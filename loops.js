function oddNumbers(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));

function OddEven(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
}
console.log(OddEven(9, 12));
