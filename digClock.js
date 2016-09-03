/**
* FileName:digClock.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Function to extend date object and to return nextDay
*/

/**
 *Function to get the time
 *
 */
function getTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById('demo').innerHTML = "Time" + hour + ":" + min + ":" + sec;
    setTimeout(getTime, 1000);
}

/*calling the get time method*/
getTime();

/*Json data for displaying random Data*/
data = [{
    "author": "chiru",
    "date": "04-08-2016",
    "article": "heavy rains in mumbai",
    "publication": "indiatimes"
}, {
    "author": "krishna",
    "date": "04-08-2016",
    "article": "olympic games are going to start",
    "publication": "eenadu"
}, {
    "author": "mahesh",
    "date": "04-08-2016",
    "article": "Government has changed goods and tax system",
    "publication": "MumbaiExpress"
}]

/*Random variable by using Math.random function*/
var random = (Math.floor(Math.random() * 3) + 0);
/**
 * Function to display The articles
 */

function displayArticle(i) {
    document.getElementById('article').innerHTML = "News:" + data[i].article;
    document.getElementById('author').innerHTML = "Author:" + data[i].author;
    document.getElementById('date').innerHTML = "Date:" + data[i].date;
    document.getElementById('publication').innerHTML = "Publication:" + data[i].publication;
    if (i <= data.length) {
        random = (Math.floor(Math.random() * data.length) + 0);
        setTimeout('displayArticle(' + (random) + ')', 2000);

    }
}

/*calling the method to displayArticle*/
displayArticle(random);
