function convertMinutestoSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutestoSecondsResult:', convertMinutestoSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('greetResult:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log(('getAreaResult:'), getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstNameResult:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElementResult:', getLastElement(['propane', 'and', 'propane', 'accessories']));
