/*
Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array off numbers as arguments
The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.
*/

//Tabulation
//m -> targetSum, n -> numbers.length
//Time Complexity: O(m * n)
//Time Complexity: O(m)

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(false);
    table[0] = true;

    for(let i = 0; i <= targetSum; i++){
        if(table[i]===true){
            for(let num of numbers){
                table[i + num] = true;  
            }
        }
    }

    return table[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3, 5]));
console.log(canSum(100, [7, 14]));