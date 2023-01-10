/* exported getFront */

function getFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  return queue.peek();
}
