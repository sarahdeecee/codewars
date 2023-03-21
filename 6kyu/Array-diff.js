function arrayDiff(a, b) {
  const newArray = [];
  for (let item of a) {
    if (!b.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}