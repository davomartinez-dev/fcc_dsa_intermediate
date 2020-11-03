function pairElement(str) {
  const resultArray = [];
  for (let ele of str) {
    switch (ele) {
      case 'A':
        resultArray.push(['A', 'T']);
        break;
      case 'T':
        resultArray.push(['T', 'A']);
        break;
      case 'G':
        resultArray.push(['G', 'C']);
        break;
      case 'C':
        resultArray.push(['C', 'G']);
        break;
    }
  }
  return resultArray;
}

pairElement('GCG');
