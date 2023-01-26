class Item {

    constructor(data = null) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    get isHead() {
        return !this.prev ? true : false;
    }

    get isTail() {
        return !this.next ? true : false;
    }

    get isFirst() {
        return this.isHead;
    }

    get isLast() {
        return this.isTail;
    }

    get index() {

        if (!this.prev && !this.next) {
            return -1;
        } else if (!this.prev && this.next) {
            return 0;
        } else {

            let item = this;
            let idx = -1;

            while (item) {
                idx++;
                item = item.prev;
            }

            return idx;

        }

    }

    prepend(item) {

        if (!(item instanceof Item)) {
            throw new Error('List item is not an instance of Item');
        }

        /**
         * set prev and next pointers for new item
         */

        item.next = this;
        item.prev = this.prev;

        /**
         * set previously prev item next pointer 
         */

        if (!this.isHead) {
            this.prev.next = item;
        }

        /**
         * set my own prev pointer
         */

        this.prev = item;

    }

    append(item) {

        if (!(item instanceof Item)) {
            throw new Error('List item is not an instance of Item');
        }

        /**
         * set prev and next pointers for new item
         */

        item.next = this.next;
        item.prev = this;

        /**
         * set previously next item prev pointer 
         */

        if (!this.isTail) {
            this.next.prev = item;
        }

        /**
         * set my own next pointer
         */

        this.next = item;

    }

    insertAfter(item) {
        item.append(this);
    }

    insertBefore(item) {
        item.prepend(this);
    }

    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }

}


module.exports = Item;