function solution(number){
  // return 0 for negative number
  if (number < 0) {
    return 0;
  }

  const multiplesArray = [];
  for (let i = 1; i < number; i++) {
    // find multiples of 5 & 3
    if (i % 5 === 0 && i % 3 ===0) {
      multiplesArray.push(i);
    }
    // find multiples of 5

    // find multiples of 3
    // return sum of all multiples
  }
}