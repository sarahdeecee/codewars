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
  } else if (typeof iterable === 'string') {
    return makeUniqueArray(iterable.split(''));
  }
  
  return undefined;
};