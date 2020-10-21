function hasSameKeys(obj) {}

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  for (let i in collection) {
    keys.forEach(key => {
      console.log(key);
      if (collection[i].hasOwnProperty(key)) {
        console.log(collection[key]);
      }
    });
  }
  // Loop over the collection
  // Verify that the current object has the same keys as the source object
  // If the current object has the same keys check if the values in the keys are the same
  // If are the same push that object into array
  // Otherwise continue with the next object.
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 },
);
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' },
// );
// [{ first: "Tybalt", last: "Capulet" }]

// whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
