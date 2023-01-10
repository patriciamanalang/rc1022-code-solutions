/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const front = queue.dequeue();
    queue.enqueue(front);
  }
  return queue.dequeue();
}
