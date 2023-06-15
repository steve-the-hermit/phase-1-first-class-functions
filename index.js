function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      // Function logic
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      // Function logic
    };
  }
  