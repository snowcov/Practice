/*
Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.
The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.
You may reuse elements of the 'wordBank' as many times as needed.
*/

//Brute Force
//Time Complexity: O(n^m * m)
//Space Compelxity: O(m^2)

const canConstruct = (target, wordBank) => {
    if(target === '') {
        return true;
    }

    for(let word of wordBank) {
        //find word that starts at index 0 of the target
        if(target.indexOf(word)===0){
            //Slice past prefix
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank)===true) {
                return true;
            }
        }
    }

    return false;
};

/*
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "adcb"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));
*/

//===================================================================================================

//Memoization
//Time Complexity: O(n * m^2) 
//Space Compelxity: O(m^2)

const canConstruct2 = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    for(let word of wordBank) {
        //find word that starts at index 0 of the target
        if(target.indexOf(word)===0){
            //Slice past prefix
            const suffix = target.slice(word.length);
            if (canConstruct2(suffix, wordBank, memo)===true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};

console.log(canConstruct2("abcdef", ["ab", "abc", "cd", "def", "adcb"]));
console.log(canConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));