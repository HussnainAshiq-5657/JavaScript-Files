var target = document.getElementById("name").addEventListener("focus",abc);
function abc(){
    document.getElementById("name").style.backgroundColor = "orange";
    
}
var target = document.getElementById("class").addEventListener("focus",def);
function def(){
    document.getElementById("class").style.backgroundColor = "orange";
    
}
var target = document.getElementById("select").addEventListener("focus",xyz);
function xyz(){
    document.getElementById("select").style.backgroundColor = "orange";
    
}
var target = document.getElementById("name").addEventListener("blur",ghi);
function ghi(){
    document.getElementById("name").style.backgroundColor = "";
    
}
var target = document.getElementById("class").addEventListener("blur",jkl);
function jkl(){
    document.getElementById("class").style.backgroundColor = "";
    
}
var target = document.getElementById("select").addEventListener("blur",zyx);
function zyx(){
    document.getElementById("select").style.backgroundColor = "";
    
}

function tyk(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;
    
}
function level(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;

}

var ali = document.addEventListener("select",not);
function not(){
    console.log("You Selected Some Text");
}
var hussnain = document.addEventListener("submit",huss);
function huss(){
    var target = document.getElementById("name").value;
    alert("Hello" + target);
}
var zain = document.addEventListener("invalid",zai);
function zai(){
    var target = document.getElementById("class").value;
    alert("please fill required form" + target);
}

