/**
* FileName:dateExtension.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Function to extend date object and to return nextDay
*/
/**
* Adding getNextDay function to Date prototype
* The function will return nextDate
*/
Date.prototype.getNextDay = function() {
    var today = this.getDay(); 
    var next = today + 1;
    nextDate = next+":"+this.getMonth()+":"+this.getFullYear();
    //return new Date(this.setDate(today + 1));
    return nextDate;
}
/*creating the Date instance*/
var d = new Date();
/*calling the nextDay method on date instance */
console.log(d.getNextDay());
