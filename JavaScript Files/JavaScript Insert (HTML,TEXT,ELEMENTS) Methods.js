 var newElement = document.createElement("h2");

 var newText = document.createTextNode("This is just Testing");
newElement.appendChild(newText);
 var target = document.getElementById("box");
 target.insertAdjacentElement("beforebegin",newElement);