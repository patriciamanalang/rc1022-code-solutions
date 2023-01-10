/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const front = queue.dequeue();
    return queue.enqueue(front);
  }
}
