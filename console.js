var obj = {str:"Bridgelabz"}
var arr = ["Vamsi"];
var args = [];
var count = prompt("Enter No of Arguments");
var func = function() {
  for(var i = 0; i < count; i++) {
    args.push(prompt("Enter Value"));
    console.log(this.str+args[i]);
  }
};

func.apply(obj, args);
