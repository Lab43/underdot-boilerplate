const http = require('http');
const path = require('path');
const serveStatic = require('serve-static');
const chokidar = require('chokidar');
const WebSocket = require('ws');
const fs = require('fs');
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
  notifyBrowsers('building');
  
  try {
    await build();
    console.log('✅ Site built successfully');
    notifyBrowsers('built');
    reloadBrowsers();
  } catch (error) {
    console.error('❌ Build failed:', error);
    notifyBrowsers('failed');
  } finally {
    isBuilding = false;
    
    // rebuild if another build was triggered during this build
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
  // intercept HTML requests to inject live reload script
  if (req.url === '/' || req.url.endsWith('.html')) {
    const filePath = path.join(__dirname, 'docs', req.url === '/' ? 'index.html' : req.url);
    let html = fs.readFileSync(filePath, 'utf8');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(injectLiveReload(html));
    return;
  }
  
  // serve static files for everything else
  serve(req, res, () => {
    // serve custom 404 page
    const notFoundPath = path.join(__dirname, 'docs', '404', 'index.html');
    let html = fs.readFileSync(notFoundPath, 'utf8');
    
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(injectLiveReload(html));
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Server running at http://localhost:3000');  
  buildSite();
  watch();
});



// ===========
// live reload
// ===========

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('🔌 Browser connected for live reload');
  
  ws.on('close', () => {
    console.log('🔌 Browser disconnected');
  });
});

const notifyBrowsers = (message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

const reloadBrowsers = () => {
  notifyBrowsers('reload');
};

const injectLiveReload = (html) => {
  const liveReloadPath = path.join(__dirname, 'lib', 'live-reload.js');
  const liveReloadScript = fs.readFileSync(liveReloadPath, 'utf8');
  const reloadScript = `<script>${liveReloadScript}</script>`;
  return html.replace('</body>', reloadScript + '\n</body>');
};
