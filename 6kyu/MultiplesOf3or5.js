function solution(number){
  // return 0 for negative number
  // return 0 for numbers less than 3 (no multiples of 3 below 3)
  if (number <= 3) {
    return 0;
  }

  const multiplesArray = [];
  for (let i = 1; i < number; i++) {
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
  }
  console.log(multiplesArray);
  let sum = 0;
  multiplesArray.forEach(num => sum += num);
  return sum;
}
console.log('solution: ',solution(10));