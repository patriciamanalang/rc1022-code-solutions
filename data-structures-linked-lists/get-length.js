/* exported getLength */

function getLength(list) {
  let counter = 0;
  while (list !== null) {
    list = list.next;
    counter++;
  }
  return counter;
}
