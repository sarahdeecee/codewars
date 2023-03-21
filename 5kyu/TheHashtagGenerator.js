function generateHashtag (str) {
  const hashtagArr = str.split(' ');
  let hashtag = '';
  for (let word of hashtagArr) { 
    if (word != '') {
      hashtag += ((word[0]).toUpperCase() + word.slice(1));
    }
  }
  return (hashtag.length > 140 | hashtag.length == 0) ? false : `#${hashtag}`;
}