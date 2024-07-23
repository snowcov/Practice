/*
Say that you are a traveler on a 2D grid.
You begin in the top-left corner and your goal is to travel to bottom-right cornder. 
You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m*n?

Write a function 'gridTraveler(m,n)' that calculates this.
*/

//Time Complexity: O(2^n+m)
//Space Complexity: O(n+m)

const gridTraveler = (m,n) => {
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    return gridTraveler(m-1,n) + gridTraveler(m,n-1);
};

/*
console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));
*/

//==============================================
//Memoization

//Time Complexity: O(n+m)
//Space Complexity: O(n+m)

const gridTraveler2 = (m,n,memo = {}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    memo[key] = gridTraveler2(m-1,n, memo) + gridTraveler2(m,n-1, memo);
    return memo[key];
};

console.log(gridTraveler2(1,1));
console.log(gridTraveler2(2,3));
console.log(gridTraveler2(3,2));
console.log(gridTraveler2(3,3));
console.log(gridTraveler2(18,18));