//your JS code here. If required.
function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`);

  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (err) {
    console.error(
      `failed running test suite ${testSuiteName} on test case ${err.testCaseName} with error message ${err.errorMessage}`
    );
  }
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);

  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    throw {
      testCaseName,
      errorMessage
    };
  }
}

function expect(actual) {
  return {
    toExist() {
      if (actual === null || actual === undefined) {
        throw `expected value to exist but got ${JSON.stringify(actual)}`;
      }
    },

    toBe(expected) {
      if (actual !== expected) {
        throw `expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`;
      }
    },

    toBeType(type) {
      const actualType = typeof actual;
      if (actualType !== type) {
        throw `expected ${JSON.stringify(actual)} to be of type ${type} but got ${actualType}`;
      }
    }
  };
}
