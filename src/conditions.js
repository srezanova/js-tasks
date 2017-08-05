let a = 6;

if (a === 5) {
  console.log('a is 5');
}

a = 5;

if (a === 6) {
  console.log('a is 6');
}

const b = 10;
let c = 0;
let d = 0;
let e = ''

for (let i = 0; i < 10; i = i + 1) {
  if (b - i < 5) {
    c = c + 1;
  }
}

for (let i = 0; i < 1001; i = i + 1) {
  if (i % 2 === 0) {
    d = d + 1;
  }
}

console.log(c);
console.log(d);
