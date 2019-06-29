/* eslint-disable no-throw-literal */
import { foo, createCb } from './asynchronous-programming/task1';
import { failureCb, successCb, parseJSON } from './asynchronous-programming/task2';
import delay from './asynchronous-programming/task3';
import task4 from './asynchronous-programming/task4';
import { parallel, sequence } from './asynchronous-programming/task5';
import getResolvedPromise from './asynchronous-programming/task6';

console.log('============task1==============');

foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('===============================');

console.log('============task2==============');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

console.log('===============================');

delay(1000).then(value => console.log(`Done with ${value} task3`));

task4();

parallel();
sequence();

getResolvedPromise(500).then(value => {
  try {
    if (value > 300) {
      throw 'Ошибка';
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('This is finally');
  }
});
