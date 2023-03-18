function toCamelCase(str) {
  const strArray = str.split(/([-|_])/g);
  const upperStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === '-' || strArray[i] === '_') {
      const upperCaseWord = (strArray[i+1][0]).toUpperCase() + strArray[i+1].slice(1);
      upperStrArray.push(upperCaseWord);
      i++;
    } else {
      upperStrArray.push(strArray[i])
    }
  }
  return upperStrArray.toString().replace(/,/g,"");
}