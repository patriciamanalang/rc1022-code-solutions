/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialsOfPerson = person.firstName[0] + person.lastName[0];
  return initialsOfPerson;
}
