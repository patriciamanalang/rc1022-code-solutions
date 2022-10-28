var books = [
  {
    isbn: '1234567',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    isbn: '8910112',
    title: 'The Alchemist',
    author: 'Paulo Cuelho'
  },
  {
    isbn: '4567181',
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof books);

var JSONbooks = JSON.stringify(books);
console.log('JSON Stringify:', JSONbooks);
console.log('JSON Stringify type', typeof JSONbooks);

var JSONstudent = '{"id":"1234567","name":"Patricia"}';
console.log('JSON student', JSONstudent);
console.log('type of student:', typeof JSONstudent);

var student = JSON.parse(JSONstudent);
console.log('student:', student);
console.log('typeof student', typeof student);
