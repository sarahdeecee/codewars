const uniqueInOrder = iterable => {
  
  const makeUniqueArray = (array) => {
    const uniqueArray = [];
    array.forEach((item, index) => {
      if (array[index - 1] != item) {
        uniqueArray.push(item);
      }
    })
    return uniqueArray;
  }

  if (Array.isArray(iterable)) {
    return makeUniqueArray(iterable);
  }

  if (typeof iterable === 'string') {
    
  }
  return uniqueArray;
}

console.log(uniqueInOrder([1,2,2,3,3]));