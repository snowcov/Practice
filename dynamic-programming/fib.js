//Recursive Approach
//Bottleneck: Time Complexity of O(2^n) due to Recursion



const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

/*
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
*/


//====================================================

//memoization
//Refers to memo - reminder
//Stores duplicate subproblems
//Time Complexity: O(n)

//js object, keys will be arg to fn, value will be the return value

const fibo = (n, memo={}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n]= fibo(n-1, memo) + fibo(n-2, memo);
    return memo[n];
}

console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(50));
