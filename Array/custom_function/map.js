//Implementing map as a custom function on array.
let arr = [1, 2, 3, 4, 5];
//default function.
// let result = arr.map((num) => num * 2);
// console.log(result);

//one way
Array.prototype.customMap = function (callback) {
  let newArr = [];
  this.forEach((num) => {
    newArr.push(callback(num));
  });
  return newArr;
};
let res = arr.customMap((num) => num * 2);
// console.log(res);

//another way (not recommended)
function custom_map(arr, callback) {
  let newArr = [];
  arr.forEach((num) => {
    newArr.push(callback(num));
  });
  return newArr;
}
let result2 = custom_map(arr, (num) => num * 2);
console.log("result::", result2);
