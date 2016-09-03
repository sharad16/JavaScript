/**
* FileName:AddRowandColumn.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Adding Rows and Columns to the table dynamically
*/

/**
*AddColumn function to add to table.
*@param {Object} tblId - Which takes the table id from html document
*@return {Boolean} trueorfalse - Based On Checking
*/
function addColumn(tblId) {
    var tblHeadObj = document.getElementById(tblId).tHead;
    for (var h = 0; h < tblHeadObj.rows.length; h++) {
        var newTH = document.createElement('th');
        var newinput = document.createElement('input');
        tblHeadObj.rows[h].appendChild(newTH);
        //newTH.innerHTML =   'Column' + (tblHeadObj.rows[h].cells.length )
        newTH.innerHTML = prompt('Enter Column Name');
    }
    var tblBodyObj = document.getElementById(tblId).tBodies[0];
    for (var i = 0; i < tblBodyObj.rows.length; i++) {
        var newinput = document.createElement('input');
        var newCell = tblBodyObj.rows[i].insertCell(-1).appendChild(newinput);
        //var newCell = tblBodyObj.rows[i].appendChild(newinput);
    }
}
/**
*Add row method to add rows dynamically
*/
function addRow() {
    //taking table id
    var table = document.getElementById("table");
    //row count and column count
    var rowCount = table.rows.length;
    var colCount = document.getElementById('table').rows[0].cells.length;
    //inserting a row at end of table
    var row = table.insertRow(rowCount);
    for (var i = 0; i < colCount; i++) {
        //creating input element and adding it to the table cells
        var newinput = document.createElement('input');
        row.insertCell(i).appendChild(newinput);
    }
}
