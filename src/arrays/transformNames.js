function transform(array) {
  const array1 = [];

  for (let i = 0; i < array.length; i += 1) {
    array1.push('Hello, ' + array[i]);
  }

  return array1;
}

console.log(transform(['Sasha', 'Vitalik', 'Julya']));
