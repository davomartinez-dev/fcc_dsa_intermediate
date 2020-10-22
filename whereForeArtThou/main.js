function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 },
);

// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' },
);
// [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
