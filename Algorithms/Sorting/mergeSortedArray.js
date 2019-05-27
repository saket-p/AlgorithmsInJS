export const mergeSortedArray = (arr1, arr2) => {
    const tempArr = [];
    const len1 = arr1.length;
    const len2 = arr2.length;

    let ind1 = 0;
    let ind2 = 0;
    let tempInd = 0;

    while(ind1 < len1 && ind2 < len2){
        let lesserVal;
        if(arr1[ind1] === arr2[ind2]) {
            lesserVal = arr1[ind1];
            ind1 += 1;
            ind2 += 1;
        } else if(arr1[ind1] < arr2[ind2]) {
            lesserVal = arr1[ind1++];
        } else {
            lesserVal = arr2[ind2++];
        }
        tempArr[tempInd++] = lesserVal;
    }

    while(ind1 < len1) {
        tempArr[tempInd++] = arr1[ind1++];
    }

    while(ind2 < len2) {
        tempArr[tempInd++] = arr2[ind2++];
    }

    return tempArr;
};

/* const arr1 = [1,2,3,0,0,0];
const arr2 = [4, 7, 8];
console.log('' + mergeSortedArray(arr1, arr2)); */