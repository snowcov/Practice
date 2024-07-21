//Combinatoric Problem

/*
Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
The function should return an array containing any combination of elements that add up to exactly the targetSum.
If there is no combination that adds up to the targetSum, then return null.
If there are multiple combinations possible, you may return any single one.
*/

//Brute Force
//Time Complexity: O(n^m * m)
//Space Complexity: O(m)

const howSum = (targetSum, numbers) => {
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult!==null){
            //returns array of remainderResult plus num
            return [ ...remainderResult, num];
        }
    }

    return null;
};

/*
console.log(howSum(7, [2,3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7,14]));
*/

//===================================================

//Memoization
//Time Complexity: O(n * m^2)
//n*m from recursive call, and m array iterations in each call

//Space Complexity: O(m^2)

const howSum2 = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum2(remainder, numbers,memo);
        if(remainderResult!==null){
            //returns array of remainderResult plus num
            memo[targetSum] = [ ...remainderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
};

console.log(howSum2(7, [2,3]));
console.log(howSum2(7, [5, 3, 4, 7]));
console.log(howSum2(7, [2, 4]));
console.log(howSum2(8, [2, 3, 5]));
console.log(howSum2(300, [7,14]));