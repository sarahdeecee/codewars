function solution(number){
  // return 0 for negative number
  if (number <= 0) {
    return 0;
  }

  for (let i = 1; i < number; i++) {
    const multiplesArray = [];
    // find multiples of 5 & 3
    if (i % 5 === 0 && i % 3 === 0) {
      multiplesArray.push(i);
    } else if (i % 5 === 0) {
      // find multiples of 5
      multiplesArray.push(i);
    } else if (i % 3 === 0) {
      // find multiples of 3
      multiplesArray.push(i);
    }
    console.log(multiplesArray);
  }
  // return sum of all multiples
}
console.log('solution: ',solution(0));