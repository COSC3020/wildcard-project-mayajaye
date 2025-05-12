const Parallel = require('paralleljs');

function kahootMapReduce(arr, cb) {
  var p = new Parallel(arr);

  p.map(function(answer) {
    for (let i = 1; i <= 3; i++) {
      if (answer[i] == true) return i; 
    }
  })
  .then(function(mapResults) {
    console.log("Total Questions:", arr.length);
    console.log("Tries Per Question:", mapResults, "\n");
    return mapResults;
  })
  .reduce(function(d) { return d[0] + d[1]; })
  .then(function(reduceResults) {
    console.log("Total Tries:", reduceResults);
    return reduceResults;
  })
  .then(cb);
}