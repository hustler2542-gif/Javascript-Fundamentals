function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
  console.log(init)
  console.log('Function 1')
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
  console.log(init)
  console.log('Function 2')
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
  console.log(init)
  console.log('Function 3')
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();