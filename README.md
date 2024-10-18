# benchmark-sorting

This is a tiny project to benchmark in practice 3 algorithms, which are all for sorting arrays.

1. merge-sort
2. bubble-sort
3. The sort method for JS arrays

We know that O(N) is N*log N for the merge-sort and N^2 for the bubble sort. It means that doubling N makes the execution time double for the merge-sort algorithm and 4 times more for the buubble-sort algorithm. We know, that
this trend is valid only for large, theoretically infinite N. This is also the worse case scenario, because the execution time depends on the dataset too. If the array is already sorted before the operation, bubble-sort is faster, because no need to swap the array elements.
It's an interesting question that in practice how big N is supposed to be to see the theoretical differences. It is
also interesting how the method, which JS provides performs. We will do this examination by the benchmark tool [tinybench](https://github.com/tinylibs/tinybench). The project will work in the form of a NodeJS app with Typescript.