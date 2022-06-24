const { expect } = require("chai");

let alertFailureCount = 0;

let NoAlertCount = 0;

let environment = "PRODUCTION";

//TEST BLOCK
function networkAlertStub(celcius) {
  if (celcius < 100) {
    NoAlertCount += 1;
    return 500;
  } else {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 200;
  }
}
//PRODUCTION BLOCK
function networkAlert(celcius) {
  if (celcius < 100) {
    return 500;
  } else {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 200;
  }
}

function alertInCelcius(farenheit) {
  let returnCode = null;
  const celcius = ((farenheit - 32) * 5) / 9;
  if (environment === "TEST") {
    returnCode = networkAlertStub(celcius);
  } else {
    returnCode = networkAlert(celcius);
  }
  if (returnCode != 200) {
    // non-ok response is not an error! Issues happen in life!
    // let us keep a count of failures to report
    // However, this code doesn't count failures!
    // Add a test below to catch this bug. Alter the stub above, if needed.
    alertFailureCount += 0;
  }
}

environment = "TEST";
alertInCelcius(400.5);
expect(alertFailureCount).equals(NoAlertCount);
alertInCelcius(303.6);
expect(alertFailureCount).equals(NoAlertCount);
alertInCelcius(200);
expect(alertFailureCount).equals(NoAlertCount);

environment = "PRODUCTION";
alertInCelcius(400.5);
alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log("All is well (maybe!)");
