//function to calculate the result based on operator/selected option
function returnResult(){
//reading value and converting to integer
	var val1 = parseInt(document.getElementById('i1').value);
	var val2 = parseInt(document.getElementById('i2').value);
	//taking select element from html file	
	var e = document.getElementById("sel");
	//selected index value	
	var value = e.options[e.selectedIndex].value;
	//selected index text
	var text = e.options[e.selectedIndex].text;
	//variable to hold result
	var result;
		//if selected option is addition
		if(value == "add"){
			result = val1 + val2;
		}
		//if selected option is substraction   
		else if(value == "sub"){
			result = val1 - val2;
		}
		//if selected option is mul
		else if(value == "mul"){
			result = val1* val2;
		}
		//if selected option is div
		else if(value == "div"){
			result = val1/val2;
		}
		//setting the result in the Result input
		document.getElementById('result').value = result;
}

