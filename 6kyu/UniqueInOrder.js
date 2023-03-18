const uniqueInOrder = iterable => {
  if (Array.isArray(iterable)) {
    const uniqueArray = [];
    iterable.forEach((item, index) => {
      if (iterable[index - 1] != item) {
        uniqueArray.push(item);
      }
    })
    return uniqueArray;
  } else if (typeof iterable === 'string') {

  } else {
    return undefined;
  }
}