/**
* FileName:PartsofURL.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Printing the parts of a url
*/
var url = new URL("https://developer.mozilla.org");
/**
* function To print parts of a url
* @param {URL} url - Pass any URL
*/
function printPartsOfURL(url) {
    console.log("Protocol: " + url.protocol);
    console.log("HostName: " + url.host);
    console.log("PathName: " + url.pathname);
    console.log("Port: " + url.port);
}
/*calling the function*/
printPartsOfURL(url);
