const names = ['Vitalik', 'Sasha', 'Julya'];

function addName(name) {
  return `Hello, ${name}`;
}

const greets = names.map(addName);

console.log(greets);
