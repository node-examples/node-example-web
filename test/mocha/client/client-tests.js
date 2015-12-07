'use strict';

/* global afterEach */
/* global beforeEach */
/* global describe */
/* global it */
const chai = require('chai');

chai.should();

describe('Client', () => {
    let client = null;

    beforeEach(() => {
        client = require('../../../src/client');
    });

    afterEach(() => {
        if (client) {
            client = null;
        }
    });

    describe('Startup', () => {
        it('Should execute script without errors.', () => {
            // Intentionally blank. Checks start/stop.
        });
    });
});
