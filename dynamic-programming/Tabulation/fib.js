/*
write a function 'fib(n)' that takes in a number as an argument.
The function should return the n-th number of the Fibonacci sequence.

The 0th number of the sequence is 0.
The 1st number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.
*/

//Tabulation
//Time Complexity: O(n)
//Space Complexity: O(n)

const fib = (n) => {
    const fibo = Array(n + 1).fill(0);
    fibo[1]=1;

    for(let i = 0; i <= n; i++){
        fibo[i+1] += fibo[i];
        fibo[i+2] += fibo[i];
    }

    return fibo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));