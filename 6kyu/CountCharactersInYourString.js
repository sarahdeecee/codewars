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