## Building and Watching

* First run `npm install` to install dependencies.
* Use `npm run build` to compile the site.
* Use `npm run watch` to have [nodemon](https://nodemon.io) automatically compile the site when it detects changes in the source directory.


## Deploying to GitHub pages

This site is set up to be hosted on GitHub pages. Change the configuration of the `cname` plugin in `index.js` to the domain name you're using, build and commit your code to to the `main` branch (including the build directory), push the code to Github, then configure Github Pages to use the build directory.
