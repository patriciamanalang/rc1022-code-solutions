/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) { return; }
  const top = stack.pop();
  const newTop = stack.push(value);
  stack.push(top);
  return newTop;
}
