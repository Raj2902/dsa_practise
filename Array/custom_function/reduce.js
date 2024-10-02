//custom reduce function on arrays in js.
let arr = [1, 2, 3, 4, 5];

//default function
let res = arr.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log("Result from the default function::", res);

//using prototype
Array.prototype.custom_reduce = function (callback, initial_val) {
  let acc = initial_val;
  arr.forEach((num) => {
    acc = callback(acc, num);
  });
  return acc;
};
let result = arr.custom_reduce((acc, num) => {
  return acc + num;
}, 0);
console.log("result from custom function::", result);

//using seprate function
function custom_reduce(arr, callback, initial_val) {
  let acc = initial_val;
  arr.forEach((num) => {
    acc = callback(acc, num);
  });
  return acc;
}
let result2 = custom_reduce(
  arr,
  (acc, num) => {
    return acc + num;
  },
  0
);
console.log(`Result from not recommeded:: ${result2}`);
