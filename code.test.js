const fs = require('fs');
eval(fs.readFileSync('code.js')+'');
const assert = require('assert');

let allAnswers = {
  "in asynchronous execution": { "1": false, "2": true, "3": false },
  "To ensure a particular order of execution in asynchronous code, I can": { "1": false, "2": true, "3": false },
  "asynchronous execution is useful for": { "1": false, "2": false, "3": true },
  "the worst-case input for insertion sort is": { "1": true, "2": false, "3": false },
  "the purpose of an invariant is": { "1": false, "2": false, "3": true },
  "The Ford-Fulkerson algorithm finds": { "1": true, "2": false, "3": false },
  "an augmenting path is": { "1": false, "2": false, "3": true },
  "the return edge": { "1": true, "2": false, "3": false },
  "dynamic programming helps to": { "1": true, "2": false, "3": false },
  "in memoization": { "1": true, "2": false, "3": false },
  "dynamic programming": { "1": true, "2": false, "3": false },
  "amdahl's law allows to": { "1": true, "2": false, "3": false },
  "we can model parallel programming as": { "1": false, "2": true, "3": false },
  "the asymptotically optimal runtime of a parallel program is": { "1": true, "2": false, "3": false },
  "parallelism is": { "1": false, "2": false, "3": true },
  "concurrency issues arise when": { "1": true, "2": false, "3": false },
  "a machine can only run as many processes as ther are cores": { "1": false, "2": false, "3": true },
  "np-complete problems can be solved in": { "1": true, "2": false, "3": false },
  "The difficulty of NP-complete problems comes from": { "1": false, "2": true, "3": false },
  "The traveling salesperson problem is to find": { "1": true, "2": false, "3": false },
  "When parallelizing algorithms, there is a trade-off between": { "1": true, "2": false, "3": false },
  "With a thread pool, there is": { "1": false, "2": true, "3": false },
  "In shared memory parallelism": { "1": false, "2": true, "3": false },
  "A good pivot will": { "1": false, "2": true, "3": false },
  "The difference between quicksort and mergesort is that": { "1": true, "2": false, "3": false },
  "Quicksort is": { "1": true, "2": false, "3": false },
  "The complexity of a problem is": { "1": true, "2": false,  "3": false },
  "General sorting algorithms make the assumption that": { "1": false,  "2": true, "3": false },
  "A general sorting algorithm with a complexity better than Ω(n log n) is not possible because": {"1": true, "2": false,  "3": false },
  "Mergesort is an example of": { "1": false, "2": false,  "3": true },
  "A recurrence relation": { "1": true,  "2": false, "3": false },
  "The base case tells us": { "1": false, "2": false,  "3": true },
  "Dijkstra's algorithm finds": { "1": false,  "2": true, "3": false },
  "Dijkstra's algorithm is an example of": { "1": false, "2": false,  "3": true },
  "Intuitively, Dijkstra's algorithm is correct because": { "1": true, "2": false, "3": false },
  "In divide-and-conquer parallelism you must": { "1": true, "2": false, "3": false },
  "Asymptotically, divide-and-conquer is more efficient than a thread pool because": { "1": false, "2": true, "3": false },
  "Divide-and-conquer parallelism is like": { "1": false, "2": false, "3": true },
  "Search in graphs is": { "1": true, "2": false, "3": false },
  "Depth-first search": { "1": true, "2": false, "3": false },
  "The difference between depth-first and best-first search is": { "1": true, "2": false, "3": false },
  "Adjacency matrices are more efficient than adjacency lists for": { "1": true, "2": false, "3": false },
  "A graph is connected if": { "1": false, "2": true, "3": false },
  "Trees are": { "1": true, "2": false, "3": false },
  "Kruskal's algorithm finds": { "1": false, "2": false, "3": true },
  "Kruskal's algorithm assumes that": { "1": false, "2": true, "3": false },
  "Kruskal's algorithm works because": { "1": false, "2": true, "3": false },
  "A function is tail recursive if": { "1": true, "2": false, "3": false },
  "A tail recursive function": { "1": true, "2": false, "3": false },
  "Tail recursion optimization involves": { "1": false, "2": true, "3": false },
  "Map-reduce is a framework for": { "1": false, "2": false, "3": true },
  "In map-reduce you have to": { "1": false, "2": false, "3": true },
  "If you can solve a problem with map-reduce, you get": { "1": false, "2": true, "3": false }
};

let randomAnswers = {
  "Kruskal's algorithm works because": { "1": false, "2": true, "3": false },
  "A function is tail recursive if": { "1": true, "2": false, "3": false },
  "A tail recursive function": { "1": true, "2": false, "3": false },
  "Tail recursion optimization involves": { "1": false, "2": true, "3": false },
  "Map-reduce is a framework for": { "1": false, "2": false, "3": true },
  "Search in graphs is": { "1": true, "2": false, "3": false },
  "Depth-first search": { "1": true, "2": false, "3": false },
  "np-complete problems can be solved in": { "1": true, "2": false, "3": false },
  "The difficulty of NP-complete problems comes from": { "1": false, "2": true, "3": false },
  "The traveling salesperson problem is to find": { "1": true, "2": false, "3": false },
  "When parallelizing algorithms, there is a trade-off between": { "1": true, "2": false, "3": false }
}

let sortingAnswers = {
  "A good pivot will": { "1": false, "2": true, "3": false },
  "The difference between quicksort and mergesort is that": { "1": true, "2": false, "3": false },
  "Quicksort is": { "1": true, "2": false, "3": false },
  "The complexity of a problem is": { "1": true, "2": false,  "3": false },
  "General sorting algorithms make the assumption that": { "1": false,  "2": true, "3": false },
  "A general sorting algorithm with a complexity better than Ω(n log n) is not possible because": {"1": true, "2": false,  "3": false },
  "Mergesort is an example of": { "1": false, "2": false,  "3": true },
  "A recurrence relation": { "1": true,  "2": false, "3": false },
  "The base case tells us": { "1": false, "2": false,  "3": true },
}

function kahootTests() {
  kahootMapReduce(Object.values(allAnswers), function(result) {
    assert.strictEqual(result, 92);
    console.log("Passed: 92 tries for all 53 questions\n");
  });

  kahootMapReduce(Object.values(randomAnswers), function(result) {
    assert.strictEqual(result, 16);
    console.log("Passed: 16 tries for 11 random questions\n");
  });

  kahootMapReduce(Object.values(sortingAnswers), function(result) {
    assert.strictEqual(result, 15);
    console.log("Passed: 15 tries for 9 sorting questions\n");
  });
}

kahootTests();
