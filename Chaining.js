/**
* FileName:Chaining.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Calculation object by calling using Chaining method
*/
/**calculate function for  Calculatory Object*/
var calculate = function(){
  var i,j;
  /*Function for taking first number and returning Object*/
  var first = function(a){
    i = a;
    return this;
  }
  /*Function for taking second number and returning the Object*/
  var second = function(b){
    j = b;
    return this;
  }
  /*For Returning Sum of the Numbers*/
  var sum = function(){
    console.log(i+j);
  }
  return {first:first,second:second,sum:sum};
}
/*Calling the function by Chaining*/
calculate().first(3).second(2).sum();
