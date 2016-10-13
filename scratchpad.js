var person=function(name,age,city)
{
  this.name=name;
  this.age=age;
  this.city=city;
  this.printperson=function()
  {
    console.log("Name="+this.name+"Age=:"+this.age+"City=:"+this.city);
  };
};
var p1=[];
var i=0;
var size=Number(prompt("Enter number of object u want to create"));
//console.log(size);
for(i=0;i<=size;i++)
{
var name=prompt("Enter name");
var age=prompt("Enter Age");
var city=prompt("Enter city");
 p1.push(new person(name,age,city));
p1[i].printperson();
}


/*
Exception: ReferenceError: promt is not defined
@Scratchpad/2:18:5
*/