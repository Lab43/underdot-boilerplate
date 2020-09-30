## Building and Watching

* First run `npm install` to install dependencies.
* Use `npm run build` to compile the site.
* Use `npm run watch` to have [nodemon](https://nodemon.io) automatically compile the site when it detects changes in the source directory.


## Deploying to GitHub pages

This site is set up to be hosted on GitHub pages.
* The default destination folder for Underdot is `/build` but this project uses `/docs` because it makes Github Pages deployment really easy. You need to commit your compiled site (`/build`) to the repo. Github Pages will not compile it for you.
* Go to the Settings tab in Github and configure Github Pages to use the `main` branch and `/docs` directory.
* The domain name is configured in `index.js` using the [underdot-cname](https://github.com/Lab43/underdot-cname) plugin. Simple replace `'underdot-boilerplate.gh.l43.co'` with your domain name. Or, remove the underdot-cname plugin to use the default Github Pages url.
