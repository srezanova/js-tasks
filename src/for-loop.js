const a = 'hello ';
let b = '';
let c = 'ha';
const pupsik = 'pupsik';
let e = '';
let f = '';


// b = b + a;
// b = b + a;
// b = b + a;
// b = b + a;
// b = b + a;

for (let i = 0; i < 10; i = i + 1) {
  b = b + a + i;
}

console.log(b);

for (let i = 0; i < 2; i = i + 1) {
  c = c + '-' + c;
}

console.log(c); // ha-ha-ha-ha

for (let i = 5; i < 9; i = i + 1) {
  e = e + pupsik + i + ' ';
}

console.log(e); // pupsik5 pupsik6 pupsik7 pupsik8

for (let i = 2; i < 9; i = i + 2) {
  f = f + pupsik + i + ' ';
}
console.log(f); // pupsik2 pupsik4 pupsik6 pupsik8
