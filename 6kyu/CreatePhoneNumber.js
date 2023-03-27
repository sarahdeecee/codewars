function createPhoneNumber(numbers){
  const numbersWithSpacers = ['('];
  for (let num of numbers) {
    if (numbersWithSpacers.length === 4) {
      numbersWithSpacers.push(') ',num.toString());
    } else if (numbersWithSpacers.length === 8) {
      numbersWithSpacers.push('-',num.toString())
    } else {
      numbersWithSpacers.push(num.toString());
    }
  }
  return numbersWithSpacers.join('');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
