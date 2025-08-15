const Underdot = require('underdot')
    , sass = require('underdot-sass')
    , postcss = require('underdot-postcss')
    , autoprefixer = require('autoprefixer')
    , srcset = require('underdot-srcset')
    , ejs = require('underdot-ejs')
    , cname = require('underdot-cname')
    , bust = require('underdot-bust')
    , svgo = require('underdot-svgo')
    , templateHelpers = require('underdot-template-helpers')
;



const srcsetPresets = {
  full: {
    sizes: '100vw',
    srcset: [2200, 1900, 1600, 1300, 1000, 700],
  },
}


const underdot = new Underdot({
  destination: 'docs', // required by Github pages
  globals: {
    siteTitle: 'Underdot Boilerplate',
  },
  plugins: [
    ejs({
      views: ['source/_includes'],
    }),
    sass({
      sourceMap: true,
      outputStyle: 'expanded',
    }),
    postcss([autoprefixer]),
    srcset({presets: srcsetPresets}),
    cname('underdot-boilerplate.gh.l43.co'),
    bust(),
    svgo({
      plugins: [
        {inlineStyles:  false}, // so we can avoid !important in our css
        {removeViewBox: false}, // allow css resizing https://css-tricks.com/scale-svg/
        {prefixIds:     true }, // prevent styles from one svg affecting another
        {removeTitle:   false}, // improve accessibility by not remove <title> tags
      ],
    }),
    templateHelpers(),
  ]
});

// Export a build function for use in other files
const build = async () => {
  return await underdot.build();
};

// Only build if this file is run directly
if (require.main === module) {
  build();
}

module.exports = { build };
