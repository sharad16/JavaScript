var obj = {
    str: "Bridgelabz"
}
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
//calling the function by using apply method
func.apply(obj, args);
