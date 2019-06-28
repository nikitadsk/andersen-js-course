const successCb = result => {
  console.log('Success parse!');
  console.log(result);
};

const failureCb = error => {
  console.log('Failure parse!');
  console.log(error);
};

function parseJSON(jsonStr, sCb, fCb) {
  try {
    const result = JSON.parse(jsonStr);
    sCb(result);
  } catch (error) {
    fCb(error);
  }
}

export { successCb, failureCb, parseJSON };
