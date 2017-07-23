(function(exports) {
  function assertEquals(one, two) {
    if (!(one === two)) {
      throw new Error("Assertion failed: " + one + " is not equals to " + two)
    }
  };
  
  function assertIsTruthy(one) {
    if (!one) {
      throw new Error("Assertion failed: " + one + " is not truthy ")
    }
  };
  
  function assertNotNull(one) {
    if (one === null) {
      throw new Error("Assertion failed: the argument is null")
    }
  }
  
  function assertArrayEquals(one, two) {
    var values = [];
    one.forEach(function(item) {
      values.push(two.includes(item));
    })
    if (values.includes(false) || one.length !== two.length) {
      throw new Error("Assertion failed: the arrays are not equal")
    }
  }
  
  function it(text, callback) {
    callback();
    console.log("Test passed: " + text);
  }
  
  exports.it = it;
  exports.assertEquals = assertEquals;
  exports.assertIsTruthy = assertIsTruthy;
  exports.assertArrayEquals = assertArrayEquals;
  exports.assertNotNull = assertNotNull;
})(this);
