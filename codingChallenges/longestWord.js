//The following algorithm has a time complexity of O(n). Each word in arr must be touched once; the .length property of that word is
//accessed in constant time.

//space complexity of the function is O(1). Storing the array is O(n), but simply reading from it and updating maxLength is constant.
const findLongestWord = arr => {
    maxLength = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }

    return maxLength;
}

console.log(findLongestWord(["hi", "hello"]));