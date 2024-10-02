//linear searching in arrays.

let arr = [1, 3, 2, 5, 4]; //this is our orignal array.
let key = 5; //value to be searched.
function findElement(arry, k) {
  for (let i = 0; i < arry.length; i++) {
    if (arr[i] == k) {
      return `Element found at index ${i}`;
    }
  }
  return "Element not found";
}
console.log(findElement(arr, key));

/*Finding the time complexity of the above code (linear search).
 *There is one single for loop that iterates over the array hence the time complexity is O(n)
 *Finding the time complexity of the above code (linear search).
 *There is no extra space taken but the code so the space complexity for linear search is O(1)*/

/*Advantages
1.  **Simple to implement**: Linear search is a simple algorithm to implement. It only requires
a single loop that iterates over the array.
2.  **No extra space required**: Linear search does not require any extra space to store the
elements of the array.
3.  **Easy to understand**: Linear search is easy to understand and implement, making it a
good choice for beginners.  

Disadvantages 
1.  **Inefficient for large arrays**: Linear search has a time complexity of O(n),
which means that the time taken to search for an element increases linearly with the size of the array
2.  **Not suitable for large datasets**: Linear search is not suitable for large datasets
3.  **Not efficient for searching multiple elements**: Linear search is not efficient for searching multiple elements*/
