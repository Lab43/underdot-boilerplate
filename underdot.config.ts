import autoprefixer from 'autoprefixer';
import type { Configuration } from 'underdot';
import { bust } from 'underdot-bust';
import { ejs } from 'underdot-ejs';
import { helpers } from 'underdot-helpers';
import { postcss } from 'underdot-postcss';
import { sass } from 'underdot-sass';
import { srcset } from 'underdot-srcset';
import { svgo } from 'underdot-svgo';

export default {
  destination: 'docs', // required by Github pages
  globals: {
    siteTitle: 'Underdot Boilerplate',
  },
  plugins: [
    ejs({ views: ['_includes'] }),
    sass(),
    postcss({ plugins: [autoprefixer()] }),
    srcset({
      presets: {
        full: {
          sizes: '100vw',
          widths: [2200, 1900, 1600, 1300, 1000, 700],
        },
      },
    }),
    bust(),
    svgo(),
    helpers(),
  ],
} satisfies Configuration;
