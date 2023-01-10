/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  if (first < second) {
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    return second;
  }
}
