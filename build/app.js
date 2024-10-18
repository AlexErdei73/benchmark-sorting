"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergesort_1 = require("./mergesort");
const arr = [5, 4, 8, 10, 9, 3, 2, 1, 7, 6];
let sortedArray = (0, mergesort_1.mergeSort)(arr);
console.log("Original Array: ", arr);
console.log("Merge Sort: ", sortedArray);
function arraySort(arr) {
    return arr.sort((a, b) => a - b);
}
sortedArray = arraySort(arr);
console.log("Array Sort: ", sortedArray);
