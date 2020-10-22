function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

function isMayus(char) {
  let code = char.charCodeAt(0);
  if (!(code > 64 && code < 91)) {
    return false;
  }
  return true;
}

function spinalCase(str) {
  let newStr = '';
  let char = '';

  for (let i = 0; i < str.length; i++) {
    if (isAlphanumeric(str[i])) {
      if (
        newStr.length > 0 &&
        isMayus(str[i]) &&
        str[i - 1].charCodeAt(0) !== 32 &&
        str[i - 1].charCodeAt(0) !== 95
      ) {
        char = str[i].toLowerCase();
        newStr += '-';
        newStr += char;
      } else {
        char = str[i].toLowerCase();
        newStr += char;
      }
    } else {
      newStr += '-';
    }
  }
  return newStr;
}

spinalCase('This Is Spinal Tap');

// 65 - 90 A - Z
// 97 - 122 a - z
// 32 space
