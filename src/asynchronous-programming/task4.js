function task4() {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(resp => resp.json())
    .then(({ getUsersData }) => {
      if (getUsersData) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(resp2 => resp2.json())
          .then(data => {
            console.log('task4');
            console.log(data);
          });
      }
    });
}

export default task4;
