/* exported student */
var student = {
  firstName: 'Patricia',
  lastName: 'Manalang',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;

  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying' + ' ' + this.subject + '.';
    return introduction;
  }
};
