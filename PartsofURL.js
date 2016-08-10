var url = new URL("https://developer.mozilla.org");
function printURL(url){
  console.log("Protocol: "+url.protocol);
  console.log("HostName: "+url.host);
  console.log("PathName: "+url.pathname);
  console.log("Port: "+url.port);
  console.log()
}
printURL(url);
