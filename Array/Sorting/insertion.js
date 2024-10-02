//insertion sort on array
let arr = [1, 3, 2, 5, 6];
for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && key < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(arr);

/*
Time Complexity : O(n2)
Space Complexity = O(1)
*/

/*
Advantage : Used with partially sorted array, constant auxillary space.
Disadvantage: Not to use for large size
*/
