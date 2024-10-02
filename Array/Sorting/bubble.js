//bubble sort on arrays in js
let arr = [1, 8, 5, 3, 4];
for (let i = 0; i < arr.length; i++) {
  let swapped = false;
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }
}
console.log(arr);

//time complexity : O(n2)
//Space Complexity : O(1)
