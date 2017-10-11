// create new array
// const array = [];

// const array2 = [1, 2, 3, 4];
// array2.length; // get array lenght
// const item1 = array2[3]; // get single array item
// array2[3] = 10; // set array item

const array3 = [20, 1, 3, 8, 95, 89, 20, 30];

let sum = 0;

for (let i = 0; i < array3.length; i += 1) {
  if (array3[i] % 10 === 0) {
    sum += array3[i];
  }
}

// for cycle
// sum = array3[0] + array3[1] + array3[2]

console.log(sum, sum === 60);
