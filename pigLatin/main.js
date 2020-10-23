function translatePigLatin(str) {
  const vocLetters = 'aeiou';
  if (vocLetters.includes(str[0])) {
    return str + 'way';
  }

  let strTail = '';
  for (let i = 0; i < str.length; i++) {
    if (vocLetters.includes(str[i])) {
      return str.slice(i) + strTail + 'ay';
    } else {
      strTail += str[i];
    }
  }

  return str + 'ay';
}

// Space Complexity -> O(n)
// Time Complexity -> O(n2y)

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rhythm'));
