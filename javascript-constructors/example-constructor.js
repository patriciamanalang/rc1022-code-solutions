function ExampleConstructor() {}
console.log('value of ExampleConstructor Prototype Function:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor Prototype Function:', typeof ExampleConstructor.prototype);

var functionReturn = new ExampleConstructor();
console.log('value of functionReturn:', functionReturn);

var instance = functionReturn instanceof ExampleConstructor;
console.log('is functionReturn an instance of ExampleContructor?', instance);
