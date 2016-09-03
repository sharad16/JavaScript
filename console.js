/**
* FileName:checkEquality.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Function to prepix "BridgeLabz" before anything we log
*/
/*Creating Object Literal Which contains a string*/
var obj = {
    str: "Bridgelabz"
}
/*Creating array with some value*/
var arr = ["Vamsi"];
var args = [];
var count = prompt("Enter No of Arguments");
/**
* Function for Displaying Bridgelabz before anything we log
*/
var func = function() {
    for (var i = 0; i < count; i++) {
        args.push(prompt("Enter Value"));
        console.log(this.str + args[i]);
    }
};
/*calling the function by using apply method*/
func.apply(obj, args);
