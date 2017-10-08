function transform(array) {
  const array1 = [];

  for (let i = 0; i < array.length; i += 1) {
    array1.push(array[i] * 10);
  }

  return array1;
}

console.log(transform([12, 13, 14]));
console.log(transform([100, 130, 140, 78, 90]));
