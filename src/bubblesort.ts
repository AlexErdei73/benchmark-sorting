export function bubbleSort(arr: number[]):number[]{
    let swap = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++) 
            if (arr[j] < arr[i]) {
                swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
    return arr;
}