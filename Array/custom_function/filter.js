//custom filter on array in js
let arr = [1, 2, 3, 4, 5, 6, 8, 10];
//default filter
let res = arr.filter((num) => num % 2 == 0);
console.log("result from default function::", res);

//custom one using prototype
Array.prototype.custom_filter = function (callback) {
  let newArray = [];
  this.forEach((num) => {
    callback(num) ? newArray.push(num) : "";
  });
  return newArray;
};
let result = arr.custom_filter((num) => num % 2 == 0);
console.log(`Custom filter function:: ${result}`);

//not recommended
function custom_filter(arr, callback) {
  let newArray = [];
  arr.forEach((num) => {
    callback(num) ? newArray.push(num) : "";
  });
  return newArray;
}
let result2 = custom_filter(arr, (num) => num % 2 == 0);
console.log("result from not recommended::", result2);
