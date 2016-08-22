/**
* add function by using closure and currying
* @param {Number} a
*This function will return a new function
*/
var add = function(a) {
    return function(b) {
        return a + b;
    }
}
/**
*substract function by using closure and currying
*@param {Number} a - number
*This function will return a new function
*/
var substract = function(a) {
    return function(b) {
        return a - b;
    }
}
/**
*@param {Number} a - number
*This function will return a new function
*/
var multiplication = function(a) {
    return function(b) {
        return a * b;
    }
}
/**
* @param {Number} a - Pass Number to the function
* This function will return a new function
*/
var division = function(a) {
    return function(b) {
        return a / b;
    }
}
//calling the returned function
var addTo = add(5);
console.log(addTo(4));
var substractTo = substract(3);
console.log(substractTo(2));
var multipy = multiplication(4);
console.log(multipy(5));
var divide = division(10);
console.log(divide(2));
