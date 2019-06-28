import { foo, createCb } from './asynchronous-programming/task1';

console.log('============task1==============');

console.log(foo(5, createCb('cb')));
console.log(foo(20, createCb('cb')));

console.log('===============================');
