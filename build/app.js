"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergesort_1 = require("./mergesort");
const bubblesort_1 = require("./bubblesort");
const tinybench_1 = require("tinybench");
let arr = [5, 4, 8, 10, 9, 3, 2, 1, 7, 6];
let sortedArray = (0, mergesort_1.mergeSort)(arr);
console.log("Original Array: ", arr);
console.log("Merge Sort: ", sortedArray);
function arraySort(arr) {
    return arr.sort((a, b) => a - b);
}
sortedArray = arraySort(arr);
console.log("Array Sort: ", sortedArray);
sortedArray = (0, bubblesort_1.bubbleSort)(arr);
console.log("Bubble sort: ", sortedArray);
function randomNumbers(n) {
    const MAX_NUMBER = 100000;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * MAX_NUMBER + 1));
    }
    return arr;
}
const bench = new tinybench_1.Bench();
bench.add("Merge sort", () => (0, mergesort_1.mergeSort)(arr));
bench.add("Array sort", () => arraySort(arr));
bench.add("Bubble sort", () => (0, bubblesort_1.bubbleSort)(arr));
let n = 0;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 1; i <= 5; i++) {
            n = 10 ** i;
            arr = randomNumbers(n);
            yield bench.run();
        }
    });
})();
bench.addEventListener("complete", () => {
    console.log(`N = ${n}`);
    console.table(bench.table());
});
