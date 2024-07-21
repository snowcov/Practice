/*
Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers fromthe array.
You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.
*/

//Recursive Brute Force
//Time Complexity:O(n^m)
//Space Complexity:O(m)

const canSum = (targetSum, numbers) => {
    //base case
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    //recursive scenario
    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder, numbers)===true){
            return true;
        }
    }

    return false;
};

/*
console.log(canSum(7, [2,3]));
*/

//=========================================

//Memoization
//Time Complexity: O(m*n)
//Space Complexity: O(m)

const canSum2 = (targetSum, numbers, memo={}) => {
    //base case
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    //recursive scenario
    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum2(remainder, numbers, memo)===true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum2(7, [2,3]));
console.log(canSum2(7, [5, 3, 4, 7]));
console.log(canSum2(7, [2, 4]));
console.log(canSum2(8, [2, 3, 5]));
console.log(canSum2(300, [7, 14]));
