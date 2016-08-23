/**calculate function for  Calculator*/
var calculate = function(){
  var i,j;
  var first = function(a){
    i = a;
    return this;
  }
  var second = function(b){
    j = b;
    return this;
  }
  var sum = function(){
    console.log(i+j);
  }
  return {first:first,second:second,sum:sum};
}
calculate().first(3).second(2).sum();
/*var calculate = function(){

    this.i = 0;
    this.j = 0;
    this.first= function(i){
        this.i = i;
        return this;
    };
    this.second = function(j){
        this.j = j;
        return this;
    };
    this.sum = function(){
        console.log(this.i+this.j);
    };

};
new calculate().first(3).second(2).sum();
*/
