# idlecars web client
An angularjs single page application

## Getting set up
install brew
Run `brew install node`
Run `npm install -g bower`
In the root directory of this project, run `npm install`
In the same directory run `bower install`
Run `npm install -g gulp`

### Running a dev server
`gulp serve`

### Running end-to-end tests
`gulp protractor`

### Build & Deploy
Use direnv and get `.envrc` from another developer
In the root dir of this project run `direnv allow`

TODO: make this deploy better
`gulp clean && gulp build --env=production && gulp publish --env=production && gulp config`
