function comp(array1, array2){
  if (Array.isArray(array1) && Array.isArray(array2) && array1 && array2) {
    const sortedArr1 = array1.sort((a, b) => a - b);
    const sortedArr2 = array2.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr1.length; i++) {
      const array1Squared = sortedArr1[i] * sortedArr1[i];
      if (sortedArr2[i] !== array1Squared) {
        return false;
      }
    }

    if (array1.length === array2.length) {
      return true;
    }
  }

  return false;
}