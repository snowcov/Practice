//Optimization Problem

/*
Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments. 
The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
If there is a tie for the shortest combination, you may return any one of the shortest.
*/

//Brute Force
//m = target sum
//n = numbers.length

//Time Complexity: O(n^m *m)
//Space Complexity: O(m^2)

const bestSum = (targetSum, numbers) => {
    //Base Case
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination!==null){
            const combination = [ ...remainderCombination, num ];
            if (shortestCombination===null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

/*
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
*/

//====================================================================

//Memoization
//Time Complexity: O(n * m^2)
//Space Complexity: O(m^2)

const bestSum2 = (targetSum, numbers, memo={}) => {
    //Base Case
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderCombination = bestSum2(remainder, numbers,memo);
        if (remainderCombination!==null){
            memo[targetSum] = [ ...remainderCombination, num ];
            if (shortestCombination===null || memo[targetSum].length < shortestCombination.length){
                shortestCombination = memo[targetSum];
            }
        }
    }

    return shortestCombination;
};

console.log(bestSum2(7, [5, 3, 4, 7]));
console.log(bestSum2(8, [2, 3, 5]));
console.log(bestSum2(8, [1, 4, 5]));
console.log(bestSum2(100, [1, 2, 5, 25]));