//Binary Search in Array

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //orignal array : the array must be sorted.
let target = -1; //target value to search.
let st = 0;
let en = arry.length - 1;
function findElement(arr, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      return `Element found at index ${mid}`;
    }
  }
  return "Element not found";
}
console.log(findElement(arry, st, en));

/*
Finding the time Complexity of the above code (binary search).
1) its runs for n/2 times
2) it runs for n/4 times
3) it runs for n/8 times
......
till it runs for 1 time only.
so the sum of number of times the loop will run is
n/2 + n/4 + n/8 + n/16 + .... + 1
This is a GP series so
a = n/2 //first element
r = 1/2 //diffrence
l = 1 //last element
as,
l = ar^(n-1)
thefore,
1 = n/2.1/2^[n-1]
1=n/2.1/2^n.1/2^-1
1=n/2.1/2^n.2
1=n.1/2^n
log 1 = log [n.1/2^n]
0 = log n + log 1/2^n
0 = log n + n log 1/2
0 = log n + n [log 1 - log 2]
0 = log n + n [-log 2]
n log 2 = log n
n = log n / log 2
ignore the constant hence n  =log n
therefore we can say O(n) for binary search is log n
space Complexity as n as it requries size of the array to make half internvals.
so,
time Complexity
O(log n)
Space Complexity
O(n)
*/
