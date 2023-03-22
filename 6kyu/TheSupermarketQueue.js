function queueTime(customers, n) {
  // calculate total time for all customers to check out
  if (customers.length === 0) {
    return 0;
  } else if (n === 1) {
    return customers.reduce((sum, time) => sum + time);
  } else {
    let time = 0;
    // 0 => till 1
    // 1 => till 2
    // n => till n - 1
    // i >= n 
    return time;
  }
}

// console.log(queueTime([2,2,3,3,4,4], 2)); //9
// console.log(queueTime([1,2,3,4,5], 100)); //5
// console.log(queueTime([], 100)); //5
// console.log(queueTime([5, 3, 4], 1)); //5
console.log(queueTime([10,2,3,3], 2)); //10
console.log(queueTime([2,3,10,2], 2)); //12