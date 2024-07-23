/*
Say that you a traveler on a 2D grid.
You begin in the top-left corner and your foal is to travel to the bottom right corner.
You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function 'gridTraveler(m, n)' that calculates this.
*/

//Tabulation
//Time Complexity: (m * n)
//Space Complexity: (m * n)

const gridTraveler = (m, n) => {
    //Creates unique 2D array pattern
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

    table[1][1] = 1;

    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++) {
            const current = table[i][j];
            if(i+1 <= m) table[i+1][j] += current;
            if(j+1 <= n) table[i][j+1] += current;
        }
    }

    return table[m][n];

};

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));