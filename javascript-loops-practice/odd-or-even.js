/* exported oddOrEven */
function oddOrEven(numbers) {
  var label = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      label.push('even');
    } else {
      label.push('odd');
    }
  }
  return label;
}
