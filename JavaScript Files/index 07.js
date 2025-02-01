// var a = 0;
//  var id = setInterval(Anim,600);

// function Anim(){

//     a = a + 10;
//     if(a==200){

//         clearInterval(id);

//     }else{
//         var target = document.getElementById("test").style.width = a + "px"; 
//     }
   
// }



var id = setTimeout(Animation,1000);
function Animation(){
var target = document.getElementById("test").style.width = "500px";
}
function Anim(){
    clearTimeout(id);
}