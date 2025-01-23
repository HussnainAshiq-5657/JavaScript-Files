

var id = setTimeout(Abc,500);
function Abc(){
var target = document.getElementById("box");
     target.style.width = "600px"
}
     


function stopAnimation(){
    clearTimeout(id);
}