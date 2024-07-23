/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string and an arrauy of strings.
The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.
You may reuse elements of 'wordBank' as many times as needed.
*/

//Brute Force
//Time Complexity: O(n^m * m)
//Space Complexity: O(m^2)

const countConstruct = (target, wordBank) => {
    if(target === '') return 1;
    let totalCount = 0;

    for(let word of wordBank) {
        if(target.indexOf(word)===0){
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount+=numWaysForRest;
        }
    }

    return totalCount;
};

/*
console.log(countConstruct("purple", ["purp", "p", "pu", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "adcb"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));
*/

//=============================================================

//Memoization
//Time Complexity: O(n * m^2)
//Space Complexity: O(m^2)

const countConstruct2 = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank) {
        if(target.indexOf(word)===0){
            const numWaysForRest = countConstruct2(target.slice(word.length), wordBank, memo);
            totalCount+=numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct2("purple", ["purp", "p", "pu", "le", "purpl"]));
console.log(countConstruct2("abcdef", ["ab", "abc", "cd", "def", "adcb"]));
console.log(countConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));