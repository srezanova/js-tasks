// const array = [];
//
// array.push('hello');
// array.push('world');
// array.push('!');
function getArrayOf1000() {
  const array = [];
  for (let i = 0; i < 1000; i += 1) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(getArrayOf1000());
