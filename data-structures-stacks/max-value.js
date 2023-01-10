/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) { return -Infinity; }
  let bigNum = stack.pop();
  let nums = stack.pop();
  while (nums !== undefined) {
    if (nums > bigNum) {
      bigNum = nums;
    }
    nums = stack.pop();
  }
  return bigNum;
}
