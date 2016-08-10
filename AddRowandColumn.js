function addColumn(tblId)
{
	var tblHeadObj = document.getElementById(tblId).tHead;
	for (var h=0; h<tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		tblHeadObj.rows[h].appendChild(newTH);
		newTH.innerHTML =   'Column' + (tblHeadObj.rows[h].cells.length )
	}

	var tblBodyObj = document.getElementById(tblId).tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(-1);
	}
}
function addRow(){
	var table = document.getElementById("tblSample");
	var rowCount = table.rows.length;
	var colCount = document.getElementById('tblSample').rows[0].cells.length;
    var row = table.insertRow(rowCount);
    for(var i = 0; i < colCount ; i++){
      row.insertCell(i);
    }
}

