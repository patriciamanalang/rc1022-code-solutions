/* exported getStudentNames */
function getStudentNames(students) {
  var name = [];
  for (var i = 0; i < students.length; i++) {
    name.push(students[i].name);
  }
  return name;
}
