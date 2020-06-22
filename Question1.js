function buildCharacterMap(string) {
  const charMap = {};
  for (const char of string.split('')) {
    charMap[char] = true;
  }

  return charMap;
}

function compareStrings(one, two) {
  const str1map = buildCharacterMap(one);
  const str2map = buildCharacterMap(two);

  const onlyInStr1 = Object.keys(str1map).filter((key) => !(key in str2map));
  const onlyInStr2 = Object.keys(str2map).filter((key) => !(key in str1map));

  console.log(`a) ${onlyInStr1.length === 0 && onlyInStr2.length === 0}`);
  console.log(`b) ${onlyInStr1.join('')}`);
  console.log(`c) ${onlyInStr2.join('')}`);
}

// Example
compareStrings('water', 'wAiter');
