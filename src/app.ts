import { mergeSort } from './mergesort';
import { bubbleSort } from './bubblesort';

const arr = [5, 4, 8, 10, 9, 3, 2, 1, 7, 6];

let sortedArray = mergeSort(arr);

console.log("Original Array: ", arr);
console.log("Merge Sort: ", sortedArray);

function arraySort(arr: number[]):number[] {
    return arr.sort((a, b) => a - b);
}

sortedArray = arraySort(arr);
console.log("Array Sort: ", sortedArray);

sortedArray = bubbleSort(arr);
console.log("Bubble sort: ", sortedArray);