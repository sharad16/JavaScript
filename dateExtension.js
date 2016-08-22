/**
* Adding getNextDay function to Date prototype
* The function will return nextDate
*/
Date.prototype.getNextDay = function() {
    var today = this.getDay();
    var next = today + 1;
    //nextDate = next+":"+this.getMonth()+":"+this.getFullYear();
    return new Date(this.setDate(today + 1));
}
//creating the Date instance
var d = new Date();
//calling the nextDay method
console.log(d.getNextDay());
