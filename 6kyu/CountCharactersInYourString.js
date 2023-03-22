function count(string) {
  const count = {};
  const charArr = string.split('');
  
  for (let char of charArr) {
    if (!count[char]) { //if not on count object, add
      count[char] = 1;
    } else if (count[char]) { //if exists on object, add 1 count
      count[char] += 1;
    }
  }

  return count;
}

console.log(count('aba')); //{'a': 2, 'b': 1}
console.log(count('ABC')); //{'A': 1, 'B': 1, 'C': 1}