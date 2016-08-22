/**
* Function which well return a nick name based on Strokes and par
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
var result = golfNickName(6, 3);
console.log(result);
