This project is the starting place I use for my own Underdot projects. As such, it's a little idiosyncratic and reflects my workflows and coding habits. For example you may not find my boilerplate css useful, but you can at least see how Underdot is set up and the various plugins are used.


## Development

* First run `npm install` to install dependencies.
* Use `npm run build` to compile the site once.
* Use `npm run dev` to start a development server with auto-rebuild.
* The server runs at `http://localhost:3000` and automatically rebuilds when source files change.


## Deploying to GitHub pages

This site is set up to be hosted on GitHub pages.
* The default destination folder for Underdot is `/build` but this project uses `/docs` because it makes Github Pages deployment really easy. You need to commit the compiled files (everything in `/docs`) to the repo. Github Pages will not compile it for you. I also find committing the compiled files to the repo helpful for spotting bugs. If you see changes in compiled files that you didn't expect based on the changes you made to the source files you know something has gone wrong.
* Go to the Settings tab in Github and configure Github Pages to use the `main` branch and `/docs` directory.
* The domain name is configured in `index.js` using the [underdot-cname](https://github.com/Lab43/underdot-cname) plugin. Simply replace `'underdot-boilerplate.gh.l43.co'` with your domain name. Or, remove the underdot-cname plugin to use the default Github Pages url.
