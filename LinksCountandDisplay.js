function countLinks(){
  var x = document.links.length;
  document.getElementById('count').innerHTML = x;
}
function displayLinks(){
  var x = document.links;
  var links = "";
  var i;
  for(i = 0;i < x.length; i++){
    links = links + x[i].href + "<br>";
  }
  document.getElementById("links").innerHTML = links;
}
