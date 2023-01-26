const { List, Item } = require('./index');

const i1 = new Item(1);
const i2 = new Item(2);
const i3 = new Item(3);
const i4 = new Item(4);
const i5 = new Item(5);

const list = new List();

list.append(i1);
list.append(i2);
list.append(i3);
list.append(i4);
list.append(i5);

console.log('head ->', list.head.data);
console.log('tail ->', list.tail.data);

list.toArray().map((i) => console.log(`map item value:${i.data}`));

let item;
let iterator1 = list.traverse();
let iterator2 = list.reverse();

while ((item = iterator1.next()) !== null) {
    console.log(`traverse: ${item.data}`);
}

while ((item = iterator2.next()) !== null) {
    console.log(`reverse: ${item.data}`);
}

console.log(`size: ${list.size}`);

i3.remove();

console.log(`size: ${list.size}`);

