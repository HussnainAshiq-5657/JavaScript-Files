

var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("box").appendChild(copyElement);