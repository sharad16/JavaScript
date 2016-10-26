/**
* FileName:Golf.js
* CreatedBy: sharad
* Date :24-10-2016
* Purpose :Function which will return a nick name based on Strokes and par
*/

/**
* Function which will return a nick name based on Strokes and par
* @param {Number} strokes - No of Strokes to reach the hole
* @param {Number} par - the number of strokes a first-class player should normally require for a particular hole or course.
* @return {String} nickName
*/
function golfNickName(strokes, par) {
    if (strokes == 1) {
        return "Hole in One";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == (par + 1)) {
        return "Bogey";
    } else if (strokes == (par + 2)) {
        return "DoubleBogey";
    } else if (strokes >= (par + 3)) {
        return "Go Home";
    }
}

/*Calling the method golfNickName*/
var stroke=parseInt(prompt("Enter Stroke in number"));
var par=parseInt(prompt("Enter Par in number"));
var result = golfNickName(stroke, par);
console.log(result);
