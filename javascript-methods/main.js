var a = 88;
var b = 75;
var c = 96;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

var heroes = ['Black Panther', 'Captain America', 'Shang Chi', 'Wonder Woman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Red Book',
    author: 'Mr. Red'
  },
  {
    title: 'Yellow Book',
    author: 'Mr. Yellow'
  },
  {
    title: 'Blue Book',
    author: 'Mr. Blue'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Patricia Manalang';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);
console.log('sayMyName:', sayMyName);
