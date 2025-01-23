var a = 0; 

 var id = setInterval(Anim, 250);
function Anim(){
    a = a + 10;
    if(a == 250)
    {
     clearInterval(id);
    }
    else{
        var target = document.getElementById("box");
        target.style.width = a + "px";
    }
    
}

