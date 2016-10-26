/*  @Author : sharad
    @Date : 10 octo 2016
	@Purpose: function to print all the parts of URL*/
function callURL() {
	//using window oblect to print reference ,host name , protocol
    var ref = location.href;
    document.write("ref is = "+ref+"</br>");
    var host = location.hostname;
	document.write("Host Name is = "+host+"</br>");
	var path = location.pathname;
	document.write("Path Name is = "+path+"</br>");
	var protocol = location.protocol;
	document.write("port is = "+protocol);
}
callURL();

