const getOddLengthWordsAtProperty = (obj, key) =>
  Array.isArray(obj[key]) ? obj[key].filter(el => el.length % 2 === 1) : [];
