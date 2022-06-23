//Time complexity of the following algorithm is O(n^2) (must loop through the array for each element in it)
//Specifically, the algorith runtime has the formula n(n + 1)/2 

//Space complexity of the algorithm is O(1). Storing the arr is O(n) but simply reading its values is constant.

const addToZero = arr => {
    oppositesExist = false;
    for(let i = 0; i < arr.length; ++i) {
        for(let j = i + 1; j < arr.length; ++j) {
            if(arr[j] = arr[i] * -1) {
                oppositesExist = true;
                break;
            }
        }
        if(oppositesExist) {
            break;
        }
    }

    return oppositesExist;
}