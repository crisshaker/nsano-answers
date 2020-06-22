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

  const onlyInStr1 = [];
  for (const char in str1map) {
    if (!(char in str2map)) onlyInStr1.push(char);
  }

  const onlyInStr2 = [];
  for (const char in str2map) {
    if (!(char in str1map)) onlyInStr2.push(char);
  }

  console.log(`a) ${onlyInStr1.length === 0 && onlyInStr2.length === 0}`);
  console.log(`b) ${onlyInStr1.join('')}`);
  console.log(`c) ${onlyInStr2.join('')}`);
}

// Example
compareStrings('water', 'wAiter');
