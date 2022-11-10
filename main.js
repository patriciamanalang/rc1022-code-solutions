// function getRangeReport(start, end) {
//   var output = {};
//   var range = [];
//   var total = 0;
//   var odds = [];
//   var even = [];

//   for (var i = start; i <= end; i++) {
//     range.push(i);
//   }
//   for (var k = 0; k < range.length; k++) {
//     total += range[k];
//     if (range[k] % 2 === 0) {
//       even.push(range[k]);
//     } else {
//       odds.push(range[k]);
//     }
//   }
//   output.range = range;
//   output.total = total;
//   output.odds = odds;
//   output.even = even;
//   output.average = total / range.length;
//   return output;
// }
