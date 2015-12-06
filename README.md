# node-reference
Template project for NodeJS applications, demonstrating documentation, 
unit testing, code coverage enforcement and several other practices.

## Application Architecture
The application is a simple Express 4 website. There are three main code 
directories used:

* /src/client   - Client side code (gets bundled into a single app.js)
* /src/server   - Server code, including express and request routing.
* /src/shared   - Shared code and types across server and client.

## Tooling 
A wide range of tools have been used in this example project to represent a more-or-less
complete development workflow.

### Build and Processing
* gulp - Build task management.
* babel/babelify - For converting the client code bundle from ECMAScript 6 for use on browsers without ES6 support.
* browserify - Allow client-side code to use require() functions.

### Code Quality
* chai - Unit testing assertions
* esdoc - Generation of documentaton file from ES6+ code.
* eslint - Enforcement of strict coding standards (based on the Airbnb ruleset, with a few small changes)
* istanbul - Code coverage analysis
* isparta - Parser for ES6 code, allowing istanbul to work on raw ES6.
* mocha - Test runner
