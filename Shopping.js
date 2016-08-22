//created an array which will take shopping list
var myList = [];
//taking no of elements into the array
var noOfEle = parseInt(prompt("Enter the No Of Elements u want"));
//taking list values*/
for (var i = 0; i < noOfEle; i++) {
    for (var j = 0; j < noOfEle; j++) {
        //list of values
        var list = [];
        list[0] = prompt("Enter the Name of the item");
        list[1] = parseInt(prompt("Enter the No Of Items"));
        //inserting into mylist
        myList.push(list);
    }
}
document.write("Items in the List" + "<br>");
for (var i = 0; i < myList.length; i++) {
    for (var j = 0; j < 2; j++) {
        document.write(myList[i][j] + " ");
    }
    document.write("<br>");
}

//Usage of pop function it will remove last element
document.write(myList.pop()+"<br");
//Usage of shift function it will remove first element
document.write(myList.shift()+"<br>");
//Usage of unshift function  will add elements to the list and returns the noof elements
document.write(myList.unshift(["Jp", 20]));
document.write(myList);
