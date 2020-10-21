// Given an integer n output the first n numbers
// in the fibonacci sequence

const fiboSequence = number => {
  if (number <= 0) {
    console.log('Enter a valid positive number');
    return;
  } else if (number === 1) {
    console.log('1');
    return;
  }

  let accumulator = 1;
  let previousValue = 0;
  let savedPrev = 0;
  console.log(accumulator);
  for (let i = 1; i < number; i++) {
    savedPrev = previousValue;
    previousValue = accumulator;
    accumulator = savedPrev + previousValue;
    console.log(accumulator);
  }
};

fiboSequence(0); // Error
console.log('----------------------------');
fiboSequence(1); // 1
console.log('----------------------------');
fiboSequence(2); // 1, 1
console.log('----------------------------');
fiboSequence(6); // 1, 1, 2, 3, 5, 8.
