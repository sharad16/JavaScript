/**
* FileName:JSONModification.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Modifying the json object
*/
var JSonObject = {
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette"
            ]
        },
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [
                "Let It Rock",
                "You Give Love a Bad Name"
            ]
        },
        "5439": {
            "album": "ABBA Gold"
        }
    }
/**
* function to change a JSON OBJECT based on id,prop,value
* @param {Number} id - Id of a JSON Object which will have a key
* @param {String} prop - property which we will pass to the function
* @param {String} value - value which we will pass to the function
*/
function changeJSON(id, prop, value) {

    /*If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property*/
    if (prop != "tracks" && value != "") {
        JSonObject[id][prop] = value;
        console.log(JSonObject[id][prop]);
    } else if (prop == "tracks" && value != "") {

        /*If prop is "tracks" but the album doesn't have a"tracks" property,*/
        if (!JSON.stringify(JSonObject[id]).contains(prop)) {
            JSonObject[id][prop] = [];
            JSonObject[id][prop].push(value);
            console.log(JSonObject[id].prop);
        }

        /*If prop is "tracks" and value isn't empty (""),*/
        else {
            JSonObject[id][prop].push(value);
            console.log(JSonObject[id][prop]);
        }
    }

    /*If value is empty (""), delete the given prop property from the album.*/
    else if (value == "") {
        console.log(JSON.stringify(JSonObject[id]));
        delete JSonObject[id][prop];
        console.log(JSON.stringify(JSonObject[id]));
        console.log("Property deleted");
    }
}

/*calling the method with different conditions*/
changeJSON(5439, "album", "GoldenStars");
changeJSON(2548, "tracks", "My New Song AddingTo album");
changeJSON(5439, "tracks", "New Property for the album");
changeJSON(1245, "tracks", "");
changeJSON(5439, "tracks", "");
