/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newList = new LinkedList(value);
  while (list.next !== null) {
    list = list.next;
  }
  list.next = newList;
  return list;
}
