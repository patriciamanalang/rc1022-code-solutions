/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }
  return count;
}
