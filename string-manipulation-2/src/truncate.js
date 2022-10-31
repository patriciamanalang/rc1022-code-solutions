/* exported truncate */
// slice(indexStart, indexEnd)
// then concatenate '...'
function truncate(length, string) {
  return string.slice(0, length) + '...';
}
