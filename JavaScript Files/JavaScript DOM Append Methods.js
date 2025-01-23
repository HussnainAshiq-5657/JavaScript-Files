var a = document.createElement("h2");

var b = document.createTextNode("This is just Testing!");

//var c = document.createComment("This is Comment!");
a.appendChild(b);
document.getElementById("test").appendChild(a);
console.log(a);

var target = document.getElementById("test");
target.insertBefore(a,target.childNodes[0]);