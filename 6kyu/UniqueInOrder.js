const uniqueInOrder = iterable => {
  const uniqueArray = [];
  if (Array.isArray(iterable)) {
    iterable.forEach((item, index) => {
      if (iterable[index - 1] != item) {
        uniqueArray.push(item);
      }
    })
  } else if (typeof iterable === 'string') {
    
  }
  return uniqueArray;
}