/**
* FileName:Friendly.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : function to display friendly dates to the user
*/

/**
 *
 * @param {Array} arr - Array Which contains date
 * @return {Array} date - Date in array format
 */
function friendly(arr) {
    var start = new Date(arr[0]),
      end = new Date(arr[1]),
      currYear = new Date().getFullYear();
  var startYear = start.getFullYear(),
      startMonth = start.getMonth(),
      startDay = start.getDate(),
      endYear = end.getFullYear(),
      endMonth = end.getMonth(),
      endDay = end.getDate();
  var months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];
  if (start.getDate() === end.getDate()) {
    if (currYear === startYear) {
      /* Same Date, this year*/
      return [ months[startMonth] + " " + ordinalize(startDay) ];
    } else {
      /* Same Date, not this year*/
      return [ months[startMonth] + " " + ordinalize(startDay) + ", " + startYear ];
    }
  }

  /* check for same month*/
  else if (startYear === endYear && startMonth === endMonth) {
    if (currYear === startYear) {
      // Same Month, this year
      return [ months[startMonth] + " " + ordinalize(startDay), ordinalize(endDay) ];
    } else {
      // Same Month, not this year
      return [ months[startMonth] + " " + ordinalize(startDay) + ", " + startYear, ordinalize(endDay) ];
    }
  }

  /* check for same year*/
  else if (sameYear(start, end)) {
    if (currYear === startYear) {
      /* Start Date in this year, end date less than 1 year away*/
      return [ months[startMonth] + " " + ordinalize(startDay), months[endMonth] + " " + ordinalize(endDay)];
    } else {
      /* Dates fall within same year. Start Date is NOT in this year*/
      return [ months[startMonth] + " " + ordinalize(startDay) + ", " + startYear, months[endMonth] + " " + ordinalize(endDay) ];
    }
  }

  /* does not meet any of the above conditions*/
  else {
    /* display both full dates*/
    return [ months[startMonth] + " " + ordinalize(startDay) + ", " + startYear, months[endMonth] + " " + ordinalize(endDay) + ", " + endYear];
  }


  /* sameYear returns true if the date objects are less than one year apart, otherwise returns false*/
  /**
   * Function which checks same year or not by checking dates
   *  @param {Date} d1 - date
   * @param {Number} d2 - date
   */
  function sameYear(d1, d2) {
    var years = d2.getFullYear() - d1.getFullYear();
    var origYear = d1.getFullYear();
    d1.setUTCFullYear(d2.getFullYear());
    if (d2 < d1) years--;
    d1.setUTCFullYear(origYear);
    if (years < 1) return true;
    return false;
  }

  /** ordinalize returns a formatted day string
  *  @param {Number} n - date
  *  @return {Number} n - formatted date
  */
  function ordinalize(n) {
    switch (n) {
      case 1:
      case 21:
      case 31:
        return n + 'st';
      case 2:
      case 22:
        return n + 'nd';
      case 3:
      case 23:
        return n + 'rd';
      default:
        return n + 'th';
    }
  }
}

/*Calling the user friendly method*/
var result = friendly(['2016-07-01', '2018-10-05']);
console.log(result);
