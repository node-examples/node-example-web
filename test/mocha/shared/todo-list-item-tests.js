'use strict';

/* global describe */
/* global it */
const chai = require('chai');
const expect = chai.expect;
const TodoListItem = require('../../../src/shared/todo-list-item');
chai.should();

describe('TodoListItem', () => {
    const exampleDescription = 'Example item description';
    const updatedDescription = 'Updated description';

    describe('Constructor', () => {
        it('Succeeds with string', () => {
            const instance = new TodoListItem(exampleDescription);
            instance.description.should.equal(exampleDescription);
            instance.revisionNumber.should.equal(1);
        });

        it('Fails when no itemDescription specified', () => {
            expect(function generateItemNoParams() {
                return new TodoListItem();
            }).to.throw(Error);
        });
    });

    describe('Properties', () => {
        it('Can change description', () => {
            const instance = new TodoListItem(exampleDescription);
            instance.description.should.equal(exampleDescription);
            instance.description = updatedDescription;
            instance.revisionNumber.should.equal(2);
            instance.description.should.equal(updatedDescription);
        });

        it('Can not change description to null', () => {
            const instance = new TodoListItem(exampleDescription);
            instance.description.should.equal(exampleDescription);
            expect(function setPropertyAndFail() {
                instance.description = null;
            }).to.throw(Error);
        });
    });

    describe('Methods', () => {
        it('Can validate equality', () => {
            const instanceOne = new TodoListItem(exampleDescription);
            const instanceTwo = new TodoListItem(exampleDescription);
            instanceOne.equalTo(instanceTwo).should.equal(true);
        });

        it('Can validate inequality', () => {
            const instanceOne = new TodoListItem(exampleDescription);
            const instanceTwo = new TodoListItem(exampleDescription);
            instanceTwo.description = updatedDescription;
            instanceOne.equalTo(instanceTwo).should.equal(false);
        });

        it('Can round-trip as JSON object', () => {
            const instance = new TodoListItem(exampleDescription);
            instance.description = updatedDescription;

            const jsonData = JSON.parse(JSON.stringify(instance));
            const reloaded = TodoListItem.fromObject(jsonData);
            instance.equalTo(reloaded).should.equal(true);
        });
    });
});
