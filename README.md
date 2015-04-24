# idlecars web client
An angularjs single page application

## Getting set up
### Requirements
* npm
* bower
* gulp

### Running a dev server
`gulp serve`

### Running end-to-end tests
`gulp protractor`

### Build & Deploy
Use direnv and get `.envrc` from another developer
TODO: make this deploy better
`gulp clean && gulp build --env=production && gulp publish --env=production && gulp config`
