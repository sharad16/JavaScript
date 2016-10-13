/*@Author : Sharad
    @Date : 09 Octo 2016
	@Purpose: Make a Calculation object which will have 3 functions first(),second() and sum().
              All these function should called by chain method  -->*/
var Calculation = {
	//num1 : 0,
	//num2 : 0,
	first : function(num) {
	    this.num1 = num;
	    return this;
	},
	second : function(num) {
	    this.num2 = num;
	    return this;	
	},
	sum : function() {
	    var add = this.num1 + this.num2;
	    alert("sum = "+add);
	
	    return add;
	}


};

 var num1=prompt("Enter First number");
 var num2=prompt("Enter second number");
Calculation.first(Number(num1)).second(Number(num2)).sum();
