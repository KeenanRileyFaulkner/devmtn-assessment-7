//The following algorithm runs in O(n) time. It must iterate over every character in the param str once.

//Space complexity of the algorithm is O(1). Storing the string is O(n) but simply accessing its members is constant.
const isPangram = (str) => {
    let alphaCount = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0,
    }

    str = str.toLowerCase();
    let keys = Object.keys(alphaCount);
    for(let i = 0; i < str.length; ++i) {
        for(let j = 0; j < keys.length; ++j) { //iterating over alphaKeys is always constant time.
            if(str[i] == keys[j]) {
                alphaCount[keys[j]] += 1;
                break;
            }
        }
    }

    for(let i = 0; i < keys.length; ++i) {
        if(alphaCount[keys[i]] === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
console.log(isPangram('I like cats, but not mice'));