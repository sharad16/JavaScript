
/*
* add word "bridgeLabz" before every statement
* @ param {String} -args
*/

 function prefixWord(...args){
 
  alert(this+" "+[args]);

}
var args = prompt("enter any argument");
prefixWord.apply("bridgeLabz ",[args]);
