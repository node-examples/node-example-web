'use strict';

/* global afterEach */
/* global beforeEach */
/* global describe */
/* global it */
const chai = require('chai');

chai.should();

describe('Server', () => {
    let server = null;

    beforeEach(() => {
        server = require('../../../src/server');
    });

    afterEach(() => {
        server.close();
        server = null;
    });

    describe('Startup', () => {
        it('Should execute script without errors.', () => {
            // Intentionally blank. Checks start/stop.
        });
    });

    /* describe('Routes', () => {
        describe('/', () => {
            it('Should exist', () => {
                console.log(server.request('/'));
            });
        });
    }); */
});
