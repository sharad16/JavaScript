/**
* FileName:Shopping.js
* CreatedBy: sharad
* Date :11-10-2016
* Purpose : Creating Shopping List Variable and storing it in two dimensional array
*/

/*Creating myList array*/
var myList = [];

/*Asking the user to insert the no of elements he wants to enter*/
var noOfEle = parseInt(prompt("Enter the No Of Elements u want"));

/*Repeating the for loop for no of times and taking list from user*/
for (var i = 0; i < noOfEle; i++) {
    for (var j = 0; j < noOfEle; j++) {
        var list = [];
        list[0] = prompt("Enter the Name of the item");
        list[1] = parseInt(prompt("Enter the No Of Items"));
        myList.push(list);
    }
}

/*Displaying the List of elements*/
document.write("Items in the List" + "<br>");
for (var i = 0; i < myList.length; i++) {
    for (var j = i; j < 2; j++) {
        document.write(myList[i][j] + " ");
    }
    document.write("<br>");
}

/*Returning last element from the list*/
document.write("poed list = "+ myList.pop()+"<br");

/*Returning first element in the list*/
document.write(" shift list = " + myList.shift()+"<br>");

/*Adding element to the front of array*/
document.write("unshift list = "+myList.unshift(["Jp", 20]));

/*Displaying the list on the html*/
document.write("Final List = "+myList);
