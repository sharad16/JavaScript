//function for digital clock
function getTime(){
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  //nsole.log(d);
  document.getElementById('demo').innerHTML = hour+":"+min+":"+sec;
  setTimeout(getTime,1000);
}
getTime();

/*
var data = [
{"author" : "chiru",
"date":"04-08-2016",
"article":"heavy rains in mumbai",
"publication":"indiatimes"
},
{"author":"krishna",
"date":"04-08-2016",
"article":"olympic games are going to start",
"publication":"eenadu"
},
{
"author":"mahesh",
"date":"04-08-2016",
"article":"Government has changed goods and tax system",
"publication":"MumbaiExpress",
}
];

*/
//var text = json.parse("article.json");
//document.write(text[0].article);
var json = new JSON();
var text =
	function displayArticle(i){	
			document.getElementById('article').innerHTML = array[i].article;
			if(i < data.length){
				setTimeout('displayArticle('+(i+1)+')',3000);			
			}
	}
	displayArticle(0);
			
