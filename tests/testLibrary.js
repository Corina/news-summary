(function(exports) {
  function assertEquals(one, two) {
    if (!(one === two)) {
      throw new Error("Assertion failed: " + one + " is not equals to " + two)
    }
  };
  
  function assertNotNull(one) {
    if (one === null) {
      throw new Error("Assertion failed: the argument is null")
    }
  }
  
  function it(text, callback) {
    callback();
    console.log("Test passed: " + text);
  }
  
  exports.it = it;
  exports.assertEquals = assertEquals;
  exports.assertNotNull = assertNotNull;
})(this);
