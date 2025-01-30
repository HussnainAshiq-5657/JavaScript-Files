var a = ["Salman","Hussnain","Zain","Ashiq","Umer"];
document.write(a + " ");
document.write("<br>");
var b = a.slice(1,4);                  //(For Slice Method in Array);
document.write(b);
document.write("<br>");
var d = ["Salman","Hussnain","Zain","Ashiq","Umer"];
 d.splice(2,1,"Babar","Imam");             //(For splice Method in Array);
document.write(d);
document.write("<br>");


//var e = ["Salman","Hussnain","Zain","Ashiq","Umer"];
var e = 20;
var f = Array.isArray(e);                       //(For isArray Method in Array);
document.write(f);
document.write("<br>");
var g = ["Salman","Hussnain","Zain","Hussnain","Umer"];
var h = g.lastIndexOf("Hussnain",);            //(For IndexOf() and LastIndexOf() Method in Array);
document.write(h);
document.write("<br>");
var i = ["Salman","Babar","Zain","Hussnain","Umer"];
var j = i.includes("Babar");          //(For Includes Method in Array);
document.write(j);
document.write("<br>");

var ages = [12,18,30,34];            //(For Some() and Every() find() findIndex() filter() Method in Array);
var z = ages.filter(loop);           
function loop(age){
    return age>=18;
}
document.write(z);
document.write("<br>");
var x = ["Salman","Babar","Zain","Hussnain","Umer"];
var y = x.fill("Babar");
document.write(y);
document.write("<br>");
var w = {
    fname : "Hussnain",
    lname : "Naz",
    City : "Lahore",
    email : "Hussnainnaz18@gmail.com",
    living : {
        city : "Chandigrah",
        Job : "Cricjeter",
    },
    salary : function(){
        return 25000;
    },
    fullname : function(){
        return this.fname + " : " + this.lname; 
    }

};
 document.write(w.City);