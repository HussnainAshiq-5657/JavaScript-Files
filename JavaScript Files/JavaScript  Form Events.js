document.getElementById("fname").addEventListener("focus",abc);
function abc(){
    document.getElementById("fname").style.background = "lime";
};
document.getElementById("Cname").addEventListener("focus",def);
function def(){
    document.getElementById("Cname").style.background = "lime";
};
document.getElementById("Country").addEventListener("focus",ghi);
function ghi(){
    document.getElementById("Country").style.background = "lime";
};

document.getElementById("fname").addEventListener("blur",jql);
function jql(){
    document.getElementById("fname").style.background = "";
};
document.getElementById("Cname").addEventListener("blur",mno);
function mno(){
    document.getElementById("Cname").style.background = "";
};
document.getElementById("Country").addEventListener("blur",pqr);
function pqr(){
    document.getElementById("Country").style.background = "";
};

