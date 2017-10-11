const names = ['Vitalik', 'Sasha', 'Julya'];

function addName(greet) {
  return 'Hello, ' + greet;
}

const greets = names.map(addName)

console.log(greets);
