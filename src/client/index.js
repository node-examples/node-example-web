require('angular/angular.min');
require('babel-polyfill');
const Shape = require('../shared/shape.js');

/**
 * Some Class
 **/
class Circle extends Shape {
    constructor(x) {
        super();
        if (x) {
            throw new Error('Boom');
        }
    }
}

Circle.toString();
