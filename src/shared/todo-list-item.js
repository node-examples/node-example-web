'use strict';

/**
 * Todo List Item
 * @class
 **/
class TodoListItem {
    /**
     * Initialize a new instance of the TodoListItem and set
     * various attributes.
     *
     * @param itemDescription           Description of the item we need to do.
     * @param revisionNumber            Update # of the item.
     **/
    constructor(itemDescription, revisionNumber) {
        if (!itemDescription) {
            throw new Error('The TodoListItem cannot have a null item description');
        }

        this._description = itemDescription;
        this._revisionNumber = revisionNumber ? revisionNumber : 1;
    }

    /**
     * Compare equality of instances.
     * @param otherInstance      {object}      Object to compare to.
     * @returns                 {boolean}     True if TodoListItem equals comparand.
     **/
    equalTo(otherInstance) {
        let failures = false;
        Object.keys(this).forEach((key) => {
            if (this[key] !== otherInstance[key]) {
                failures = true;
            }
        });

        return !failures;
    }

    /**
     * Get the description of the item
     *
     * @returns {string}                Description of this TodoListItem
     **/
    get description() {
        return this._description;
    }

    /**
     * Set the description of the Todo List Item
     *
     * @param newDescription {string}   New description of the item, cannot be null.
     **/
    set description(newDescription) {
        // Validate the inputs
        if (!newDescription) {
            throw new Error('The TodoListItem cannot have a null newDescription');
        }

        this._description = newDescription;
        this._revisionNumber = this._revisionNumber + 1;
    }

    /**
     * Get the revision number of the item.
     * @returns {int}       Revision number
     **/
    get revisionNumber() {
        return this._revisionNumber;
    }

    /**
     * Parse the JSON object given back into an instance of TodoListItem.
     *
     * @param jsonObject    {object}        Raw Javascript object that contains a serialized TodoListItem
     * @returns             {TodoListItem}  Deserialized TodoListItem
     **/
    static fromObject(jsonObject) {
        return new TodoListItem(jsonObject._description, jsonObject._revisionNumber);
    }
}

module.exports = TodoListItem;
