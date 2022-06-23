//The following algorithm has time complexity O(n) because each char in str must be touched once.
//All set methods used are O(1).

//Space complexity is worst case O(n). The set creates a pseudo copy of str, split by each char. 
const hasUniqueChars = (str) => {
    let uniqueChars = true;
    let mySet = new Set();
    for(let i = 0; i < str.length; ++i) {
        if (mySet.has(str[i])) {
            uniqueChars = false;
            break;
        } else {
            mySet.add(str[i]);
        }
    }

    return uniqueChars;
}

console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));