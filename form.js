/**
* Function which takes the Url of Current window
* and which will return Query Params as an Array
*/
function getString() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //alert(hashes);
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        //alert(hash);
        //alert(hash[0]);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        //alert([hash[0]]);
    }
    return vars;
}
var strings = getString();
//alert(strings);
document.getElementById('sname').innerHTML = "StudentName:  " + strings['sname'];
document.getElementById('sroll').innerHTML = "StudentRoll:  " + strings['sroll'];
document.getElementById('sage').innerHTML = "StudentAge:  " + strings['sage'];
