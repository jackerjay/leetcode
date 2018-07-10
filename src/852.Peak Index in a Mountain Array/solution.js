/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var index = 0;
    var max = A[0];
    for (var i = 1; i < A.length - 1; i ++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
           return i;
        }
    }
};

console.log(peakIndexInMountainArray([0,2,1,0]));
