1. Run npm install command from command line from location of folder.
2. once installed all npm modules, you can run ng serve and can browse application with http://localhost:4200 , after copy solution , you can run command "npm install" which will install all npm dependencies.
3. I have used bootstrap to make application responsive, also used LESS file and mixins to reuse the css classes.
4. There are in build accordion controls can be used , such as MD accordion, Angular Material accordion as well, i have used normal div and panel combination and function to expand/ hide pane written in accordian component ts file.
Remember the correct file name is accordiannew.component, as the old file has the same name, i have not yet deleted that to avoid compilation errors.
5. Test case written for accordiannew.component.spec.ts to check component created, to check header element content, rest of the test cases can be written further.
6. Test case written for data service in file data.service.spec.ts
    i. To check service instance created
    ii. To check getJson method which returns the data, i have created mock response and equated with expected response. Similar tests can be written further.
7. Test case runner : Karma, Test Framework : Jasmin, config level info can be found in Karma.config file
8. Two svg files created, one for Plus and one for Minus symbols.

# Directg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
