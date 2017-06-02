# TflHomestopAng4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional Notes

* "ng new tfl-homestop-ang4" to create new project
* "npm install" to install items
* "npm install --save bootstrap" for bootstrap reference, but also requires reference to styles in .angular-cli.json
* "ng g c tubelines" to create new tubelines component
* added simple style for 4 lines, and simple UI to display four lines
* problem with defining dynamic style on iterator, resolved with [ngClass]="tubeline.name.toLowerCase()" - but changed again
* initialised for git, added github SSH key, added github repo, and then pushed local
* need to define basic structure, with header, and routing
