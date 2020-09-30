const Underdot = require('underdot')
    , sass = require('underdot-sass')
    , postcss = require('underdot-postcss')
    , autoprefixer = require('autoprefixer')
    , srcset = require('underdot-srcset')
    , ejs = require('underdot-ejs')
    , cname = require('underdot-cname')
    , hash = require('underdot-hash')
    , svgo = require('underdot-svgo')
;



const srcsetPresets = {
  full: {
    sizes: '100vw',
    srcset: [2200, 1900, 1600, 1300, 1000, 700],
  },
}


const underdot = new Underdot({
  globals: {
    siteTitle: 'Underdot Boilerplate',
  },
  plugins: [
    ejs(),
    sass({
      sourceMap: true,
      outputStyle: 'expanded',
    }),
    postcss([autoprefixer]),
    srcset({srcsetPresets}),
    cname('underdot-boilerplate.gh.l43.co'),
    hash(),
    svgo(),
  ]
});

underdot.build();
