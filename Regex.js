/**
* FileName:Regex.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Splitting a string using regular expression
*/

/**
Function to split string by Regex
*/
function splitStringbyRegex() {
    var str1 = "Tim:20,Henry:30.Linda:35";
    var regex = /[:,.]/
    var str2 = str1.split(regex);
    console.log(str2);
    console.log(Array.isArray(str2));
}

/*Calling the method*/
splitStringbyRegex();
