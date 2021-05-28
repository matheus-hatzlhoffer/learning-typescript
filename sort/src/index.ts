import { NumberCollection } from './numbercollection';
import { CharCollection } from './charcollection';
import { LinkedListCollection } from './linkedlistcollection';

const numbercollection = new NumberCollection([1, -2, 10, 5]);
numbercollection.sort();
console.log(numbercollection.data);

const charcollection = new CharCollection('Matheus Carvalho Hatzlhoffer');
charcollection.sort();
console.log(charcollection.data);

const collection = new LinkedListCollection();
collection.add(3);
collection.add(-2);
collection.add(5);
collection.add(13);
collection.add(-5);
collection.add(4);
collection.sort();
collection.print();
