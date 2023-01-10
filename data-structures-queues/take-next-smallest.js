/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  const second = queue.peek();
  if (second === undefined) {
    return first;
  }
  if (first > second) {
    queue.enqueue(first);
    let currentNum = second;
    let nextNum = 0;
    while (currentNum > nextNum) {
      currentNum = queue.dequeue();
      nextNum = queue.peek();
      if (currentNum > nextNum) {
        queue.enqueue(currentNum);
      }
    }
    return currentNum;
  } else {
    return first;
  }
}
