const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

function responses() {
  return urls.map(value => fetch(value).then(response => response.json()));
}

function parallel() {
  const promises = responses();
  Promise.all(promises).then(data => console.log(data));
}

function sequence() {
  const result = urls.reduce((accum, next) => {
    return accum.then(coupling =>
      fetch(next)
        .then(response => response.json())
        .then(element => [...coupling, element])
    );
  }, Promise.resolve([]));

  result.then(element => {
    console.log('sequence');
    console.log(element);
  });
}

export { parallel, sequence };
