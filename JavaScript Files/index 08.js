function resizeFunction(){
    console.clear();
    var Outerheight = window.outerHeight;
    console.log("Outerheight" + Outerheight); 
    var Innerheight = window.innerHeight;
    console.log("Innerheight" + Innerheight);

    
    var mywindow;}
function Openwindow(){

   mywindow =  window.open("","_blank","width=200px,height=200px,left=100px,top=200px")
   mywindow.document.write("<p>This is my Window!</p>")
}
function moveWindow(){
    mywindow.moveTo("200","200");
    mywindow.focus();
}