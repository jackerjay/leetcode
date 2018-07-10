/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var wordsList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var result = {};
    var morseWords = '';
    var count = 0;
    for (var i = 0; i < words.length; i ++) {
        for (var j = 0; j < words[i].length; j ++) {
            morseWords += wordsList[words[i][j].charCodeAt() - 97];
        }
        result[morseWords] = true;
        morseWords = '';
    }
    for (var item in result) {
        if (Object.prototype.hasOwnProperty.call(result, item));
        count ++;
    }
    return count;
};

console.log('a'.charCodeAt())

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])
