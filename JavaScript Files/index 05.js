// var element = document.createElement("h2");
// console.log(element);
// var elements = document.createTextNode("This side Muhammed Hussnain Ashiq");
// console.log(elements);
// var ele = document.createComment("this is just texting");
// console.log(ele);

// var element = document.createElement("h2");
// var text = document.createTextNode("Hussnain Ashiq");
// var comment = document.createComment("This is just Testing");
// element.appendChild(text);
// var target = document.getElementById("test").appendChild(element);

// var target = document.getElementById("test");
// target.insertBefore(element,target.childNodes[0]);


// var element = document.createElement("h2");
// var text = document.createTextNode("THis is Just Texting");

// element.appendChild(text);

// var target = document.getElementById("test");
// var text = "<h2>This is Just Testing</h2>";
// target.insertAdjacentHTML("beforebegin",text);


// // var target = document.createElement("li");
// // var text = document.createTextNode("Hussnain");
// // target.appendChild(text);

// // var element = document.getElementById("list");
// // var Oldelement = element.children[0];

// // // element.replaceChild(target,Oldelement);

// // // var element = document.getElementById("list");
// // // var Oldelement = element.children[0];

// // // // element.removeChild(Oldelement);

// // // var element = document.getElementById("list").children[0];
// // // var copy = element.cloneNode(true);

// // // console.log(copy);

// // // var target = document.getElementById("list1").appendChild(copy);



// // var parent = document.getElementById("list");
// // var tar = document.getElementById("list1");

// // var find = parent.contains(tar);
// // console.log(find);

// var element = document.getElementById("list");

// var find = element.hasChildNodes("class");

// console.log(find);

var ele = document.getElementById("list").children[0];
var ele1 = document.getElementById("list1").children[1];

var find = ele.isEqualNode(ele1);
console.log(find);