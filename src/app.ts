import { mergeSort } from './mergesort';
import { bubbleSort } from './bubblesort';
import { Bench } from 'tinybench';

let arr = [5, 4, 8, 10, 9, 3, 2, 1, 7, 6];

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

function randomNumbers(n: number):number[] {
    const MAX_NUMBER = 100000;
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * MAX_NUMBER + 1));
    }
    return arr;
}

const bench = new Bench();

bench.add("Merge sort", () => mergeSort(arr));
bench.add("Array sort", () => arraySort(arr));
bench.add("Bubble sort", () => bubbleSort(arr));

let n = 0;

(async function() {
  for (let i = 1; i <= 5; i++) {
    n = 10**i;
    arr = randomNumbers(n);
    await bench.run();
  }  
})();

bench.addEventListener("complete", () => {
    console.log(`N = ${n}`);
    console.table(bench.table());
});