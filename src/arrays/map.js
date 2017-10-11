// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 2, 3, 4, 5];

function multiplyBy2(number) {
  return number * 3;
}

const mutipliedArray = numbers.map(multiplyBy2);
// const mutipliedArray = numbers.map(function (number) {
//   return number * 2;
// });

console.log(mutipliedArray);
