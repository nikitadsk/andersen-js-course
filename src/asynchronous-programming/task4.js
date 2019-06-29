function task4() {
  const response = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG').then(resp =>
    resp.json()
  );

  response.then(data => {
    if (data.getUsersData) {
      const response2 = fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC').then(resp =>
        resp.json()
      );

      response2.then(data2 => {
        console.log('task4');
        console.log(data2);
      });
    }
  });
}

export default task4;
