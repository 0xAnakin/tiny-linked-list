const Item = require('./Item');

class List {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    get size() {

        let items = 0;

        if (this.head) {

            let item = this.head;
                    
            while (item) {
                items++;
                item = item.next;
            }

        }

        return items;

    }

    getItemByIndex(index) {

        if (this.head) {

            let idx = 0;
            let item = this.head;

            while (item) {
                
                if(index === idx) {
                    return item;
                }

                idx++;
                item = item.next;

            }

        }

        return null; 

    }

    toArray() {

        const arr = [];

        if (this.head) {

            let item = this.head;

            while (item) {
                arr.push(item);
                item = item.next;
            }

        }

        return arr;

    }

    traverse() {

        const { head } = this;

        return {
            item: head,
            next: function () {

                const item = this.item;

                if (item) {
                    this.item = item.next;
                }

                return item;

            }
        }

    }

    reverse() {

        const { tail } = this;

        return {
            item: tail,
            next: function () {

                const item = this.item;

                if (item) {
                    this.item = item.prev;
                }

                return item;

            }
        }

    }

    prepend(item) {

        if (this.head) {
            this.head.prepend(item);
        }

        this.head = item;

        if (!this.tail) {
            this.tail = this.head;
        }

    }

    append(item) {

        if (this.tail) {
            this.tail.append(item);
        }

        this.tail = item;

        if (!this.head) {
            this.head = this.tail;
        }

    }

}


module.exports = List;