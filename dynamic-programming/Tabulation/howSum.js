/*
Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
The function should return an array containing any combination of elements that add up to exactly the targetSum.
If there is no combination that adds up to the targetSum, then return null.
If there are multiple combinates possible, you may return any single one.
*/

//Tabulation
//Time Complexity: O(m^2 * n)
//Space Complexity: O(m * n)

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(null);
    table[0] = []

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(let num of numbers) {
                table[i + num] = [ ...table[i], num ]
            }
        }
    }

    return table[targetSum];
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));