function fizbuz(amount, fiz, buz, reporter) {
  for (let i = 1; i < amount; i += 1) {
    if (i % (fiz * buz) === 0) {
      reporter(i, 'fizbuz');
    } else if (i % fiz === 0) {
      reporter(i, 'fiz');
    } else if (i % buz === 0) {
      reporter(i, 'buz');
    }
  }
}

// function report(i, str) {
//   console.log(i, 'report', str);
// }

function logger(i, str) {
  console.log(i, 'logger', str);
}

function filter(i, str) {
  if (str === 'fizbuz') {
    logger(i, str);
  }
}

fizbuz(100, 7, 9, filter);
// report(1, 'fiz')
