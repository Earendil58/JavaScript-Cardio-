// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N

function findOutlier(...integers) {
    const integerArray = [];
    integerArray.push(...integers);

    let oddArray = [];
    let evenArray = [];

    for (let element of integerArray) {
        if ((element % 2) === 0) {
            evenArray.push(element);
        } else {
            oddArray.push(element);
        }
    }

    if (oddArray.length > 1) {
        console.log('Its an odd array');
    } else {
        console.log('Its an even array');
    }

    return integerArray;

}


console.log(findOutlier(2, 4, 7, 8, 10));

