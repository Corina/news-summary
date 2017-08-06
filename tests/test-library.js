(function (exports) {
  function assertEquals (one, two) {
    if (!(one === two)) {
      throw new Error('Assertion failed: ' + one + ' is not equals to ' + two)
    }
  };

  function assertIsTruthy (one) {
    if (!one) {
      throw new Error('Assertion failed: ' + one + ' is not truthy ')
    }
  };

  function assertNotNull (one) {
    if (one === null) {
      throw new Error('Assertion failed: the argument is null')
    }
  }

  function arrayOneIncludesElementsFromTwo (one, two) {
    two = two.map(function (x) {
      return one.includes(x)
    })
    return two
  }

  function assertArrayEquals (one, two) {
    if (one.length !== two.length || arrayOneIncludesElementsFromTwo(one, two).includes(false)) {
      throw new Error('Assertion failed: the arrays are not equal')
    }
  }

  function it (text, callback) {
    callback();
    console.log('Test passed: ' + text);
  }

  exports.it = it;
  exports.assertEquals = assertEquals;
  exports.assertIsTruthy = assertIsTruthy;
  exports.assertArrayEquals = assertArrayEquals;
  exports.assertNotNull = assertNotNull;
})(this);
