//Selection sort in arrays
let arr = [1, -96, 78, 9, 4, -6, 45, 54, 0, 0, -0.68];
for (let i = 0; i < arr.length - 1; i++) {
  let min = i,
    j;
  for (j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  let temp = arr[min];
  arr[min] = arr[i];
  arr[i] = temp;
}
console.log(arr);

//Time Complexity : O(n2)
//Space Complexity  : O(1)
