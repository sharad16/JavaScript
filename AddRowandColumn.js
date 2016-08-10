function addColumn(tblId)
{
	var tblHeadObj = document.getElementById(tblId).tHead;
	for (var h=0; h<tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		var newinput = document.createElement('input');
		tblHeadObj.rows[h].appendChild(newTH);
		//newTH.innerHTML =   'Column' + (tblHeadObj.rows[h].cells.length )
		newTH.innerHTML = prompt('Enter Column Name');
	}

	var tblBodyObj = document.getElementById(tblId).tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newinput = document.createElement('input');
		var newCell = tblBodyObj.rows[i].insertCell(-1).appendChild(newinput);
		//var newCell = tblBodyObj.rows[i].appendChild(newinput);
	}
}
function addRow(){
	var table = document.getElementById("table");
	var rowCount = table.rows.length;
	var colCount = document.getElementById('table').rows[0].cells.length;
    var row = table.insertRow(rowCount);
		var element = document.createElement("input");
    for(var i = 0; i < colCount ; i++){
			var newinput = document.createElement('input');
      row.insertCell(i).appendChild(newinput);
    }
}

