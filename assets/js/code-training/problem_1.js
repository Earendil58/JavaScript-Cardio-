// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N

function findOutlier(...integers) {
    const integerArray = [];
    integerArray.push(...integers);

    for (let element in integerArray) {
        let odd = 0;
        let even = 0
    }


}


console.log(findOutlier(1, 2, 3, 4, 5));

