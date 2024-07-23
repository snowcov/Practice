/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.
Each element of the 2D array should represent one combination that contructs the 'target'.
You may reuse elements of 'wordBank' as many times as needed.
*/

//Brute Force
//Time Complexity: O(n^m * m)
//Space Complexity: O(m^2)

const allConstruct = (target, wordBank) => {
    if(target === '') return [[]];

    const result = [];

    for(let word of wordBank) {
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push(...targetWays);
        }
    }

    return result;
};

/*
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "adcb", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
]));
*/

//=================================================================================

//Memoization
//Time Complexity: O(n * m^2)
//Space Complexity: O(m^2)

const allConstruct2 = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for(let word of wordBank) {
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct2(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
};

console.log(allConstruct2("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct2("abcdef", ["ab", "abc", "cd", "def", "adcb", "ef", "c"]));
console.log(allConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));

console.log(allConstruct2("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
]))