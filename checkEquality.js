function checkObjects(obj1 , obj2){
  if (obj1 === obj2){
		return true;	
	}
	else{
		return false;	
	}
}
var obj1 = {name : "vamshi"};
var obj2 = {name : "vamshi"};
console.log(checkObjects(obj1,obj2));
obj2 = obj1;
console.log(checkObjects(obj1,obj2));
