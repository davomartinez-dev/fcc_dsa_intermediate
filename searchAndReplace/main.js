function isMayus(char) {
  let code = char.charCodeAt(0);
  if (!(code > 64 && code < 91)) {
    return false;
  }
  return true;
}

function myReplace(str, before, after) {
  if (!str.match(before)) return -1;

  if (isMayus(before[0])) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after.toLowerCase();
  }

  return str.replace(before, after);
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
myReplace('Let us go to the store', 'store', 'mall');
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
myReplace('I think we should look up there', 'up', 'Down');
