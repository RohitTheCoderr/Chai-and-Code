//  we want to sort this array accounding to age
const arr = [
  { name: "X", age: 12 },
  { name: "D", age: 5 },
  { name: "A", age: 7 },
  { name: "Y", age: 9 },
];

arr.sort(function (a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
});
console.log(arr);

// const newarr = [{ X: 2, X: -5, X: 1, X: 6, X: 0 }];
// newarr.sort(function (a, b) {
//   if (a.X > b.X) {
//     return 1;
//   }
//   if (a.X < b.X) {
//     return -1;
//   }
//   return 0;
// });
// console.log(newarr);
