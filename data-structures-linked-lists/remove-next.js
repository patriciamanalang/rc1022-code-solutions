/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const withoutSecond = list.next.next;
  list.next = withoutSecond;
  return list;

}
