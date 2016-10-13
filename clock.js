/*  @Author : Sharad
    @Date : 08 Octo 2016
	@Purpose: Program of display random articles one by one on the screen with a digital clock*/

function displayTime() 
{
	var d = new Date();
	//get the current date
    var date = d.getDate();
	//get the current month
    var month = d.getMonth();
	//get the current year
    var year = d.getFullYear();
	//get the current time hours
    var hours = d.getHours();
	//get the current time minutes
    var minutes = d.getMinutes();
	//get the current time seconds
    var seconds = d.getSeconds();
    var mer = "AM";
	h=checkTime(hours);
	m=checkTime(minutes);
	s=checkTime(seconds);  
    // If hours is greater than 12
    if (h > 12)
    {
    	h = h - 12; //set the meridian
        mer = "PM"; 
    }
    if (h === 0)
	{
        h = 12;    
    }
    //printing date and time
    var clock = document.getElementById("date");
    clock.innerHTML = date+ "-"+(month+1)+ "-"+year + "<br/>"  + h + ":" + m + ":" + s + " " + mer + "<br/>";
}
function checkTime(i) 
{
	if (i < 10)
	{
		i = "0" + i;
	}  // add zero in front of numbers < 10
    	return i;
}

//calling the function displayTime
displayTime();
setInterval(displayTime, 1000);

//function for json objects
function jsonData()
{
var article = [
	{
		"author" : "sharad",
		"datepublished" : "1-1-2015",
        "publication" : "The Hindu",	   
	},
    {
		"author" : "yash",
	    "datepublished" : "1-12-2015",
        "publication" : "The balaguru",	   
	},
	{
	    "author" : "aashish",
	    "datepublished" : "4-5-2016",
	    "publication" : "The swas",
	},
  	{
	    "author" : "nanda",
	    "datepublished" : "3-1-2014",
	    "publication" : "The laxmant",
	}
 ]
//function to print json objects
function display(i)
{
	var print = document.getElementById("data");
	print.innerHTML =article[i].author+" "+article[i].datepublished+" "+article[i].publication+"<br/>";
    if(++i<article.length) 
    setTimeout(display,3000,i);
}
    setTimeout(display,3000,0);
}
jsonData();
