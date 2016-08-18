//function to return the nickname based on par and strokes
function golfNickName(strokes,par){
  if(strokes == 1){
    return "Hole in One";
  }
  else if(strokes <= par-2){
    return "Eagle";
  }
  else if(strokes == par-1){
    return "Birdie";
  }
  else if(strokes == par){
    return "Par";
  }
  else if(strokes == (par + 1)){
    return "Bogey";
  }
  else if(strokes == (par + 2)){
    return "DoubleBogey";
  }
  else if(strokes >= (par + 3)){
    return "Go Home";
  }
}
var result = golfNickName(6,3);
document.write(result);
