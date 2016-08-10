Date.prototype.getNextDay = function(){
  var today = this.getDay();
  var next = today + 1;
  nextDate = next+":"+this.getMonth()+":"+this.getFullYear();
  return nextDate;
}
var d = new Date();
console.log(d.getNextDay());
