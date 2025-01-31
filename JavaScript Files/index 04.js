// var element = document.domain;  (For targeting Methods)
// console.log(element);

// var element = document.getElementById("header").attributes[3].name;  For Get Attributes
// console.log(element);


// var element = document.getElementById("header").removeAttribute("class");
// console.log(element);            For Set Attributes

// var element ; 
//  document.getElementById("header").classList = "abc def";
//  element =  document.getElementById("header").classList
// console.log(element);

//  var element = document.getElementById("header").addEventListener("click",abc);
//  function abc(){
//      document.getElementById("header").style.backgroundColor = "Green";
//  }
//  var target = document.getElementById("wrapper").parentElement;
//  console.log(target);





// var element = document.getElementById("header").getAttributeNode("onclick");
// console.log(element);

var element = document.getElementById("header").addEventListener("click",abc);


function abc(){

    var target = document.getElementById("header").classList.item(0);
    console.log(target);
}

