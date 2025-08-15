const http = require('http');
const serveStatic = require('serve-static');
const chokidar = require('chokidar');
const { build } = require('./index.js');


// ==========
// build site
// ==========

let isBuilding = false;
let buildQueued = false;

const buildSite = async () => {
  if (isBuilding) {
    buildQueued = true;
    return;
  }

  isBuilding = true;
  console.log('🔄 Building site...');
  
  try {
    await build();
    console.log('✅ Site built successfully');
  } catch (error) {
    console.error('❌ Build failed:', error);
  } finally {
    isBuilding = false;
    
    // rebuild if another build was triggered while building
    if (buildQueued) {
      buildQueued = false;
      buildSite();
    }
  }
};


// =================
// watch for changes
// =================

const watch = () => {
  const watcher = chokidar.watch('source', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  });

  watcher.on('change', (filePath) => {
    console.log(`📝 File changed: ${filePath}`);
    buildSite();
  });

  watcher.on('error', (error) => process.exit(1));
};


// ======
// server
// ======

const serve = serveStatic('docs', {
  index: ['index.html'],
  fallthrough: true
});

const server = http.createServer((req, res) => {
  serve(req, res, () => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Server running at http://localhost:3000');  
  buildSite();
  watch();
});
