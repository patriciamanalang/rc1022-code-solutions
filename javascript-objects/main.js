var student = {
  firstName: 'Patricia',
  lastName: 'Manalang',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Realtor';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2017
};
vehicle['color'] = 'gray';
console.log('value of vehicle["color"]:', vehicle['color']);

vehicle['isConvertible'] = false;
console.log('value of vehicle[isConvertible:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Bella',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log(pet);
