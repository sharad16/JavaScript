/**
* FileName:MusicAlbum.js
* CreatedBy: sharad
* Date :27-10-2016
* Purpose :Function which take album id,album property and return as collection
*/

var collection = {
    2548: {
      album: "wahaja tum ho",
      artist: "Arjit singh",
      tracks: [
        "bikare bikare the ham ab savarne lage wahaja tu ho",
        "Aise pehele na the ham "
      ]
    },
    2468: {
      album: "1999",
      artist: "Arjit Singh",
      tracks: ["Sanam re sanam re tu mera sanam huwa re" ]
    },
    1245: {
      album:"WADA RAHA A WADA RAHA",
      artist: "shreya ghosle",
      tracks: [ "wada raha a wada rah"]
    },
    498: {
      album: "Ae Dil hai muskil",
       artist: "Arjit Shingh",
      tracks: ["Ae Dil hai muski","tu safer mera tere bina gujar tu mera khuda"]

    }
};
// var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collection);       
function updateRecords(id, prop, value) {
if (value !== "" && prop !== "tracks"){
  return collection[id][prop].value;
} else if (value !== "" && prop === "tracks"){
  return collection[id][prop].push(value);
} else {
  delete collection[id][prop].value;
}

return collection;
}


  

