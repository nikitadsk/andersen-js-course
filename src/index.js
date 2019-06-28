import { foo, createCb } from './asynchronous-programming/task1';
import { failureCb, successCb, parseJSON } from './asynchronous-programming/task2';

console.log('============task1==============');

foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('===============================');

console.log('============task2==============');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

console.log('===============================');
