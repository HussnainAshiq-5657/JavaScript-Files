 function hello(){
    alert("Hello Everyone");
}
function not(){
    alert("Hello My Love");
}
    ABC();
function ABC(){
    var arr = ["Babar","Hussnain","Zain","Shakir","Zulqarnain"];
    for (var a = 0; a<=4; a++){
        document.write(arr[a] + " ");
    }
    document.write("<br>")
}
  document.write("<br><br>");
var ary = [
    ["Hussnain" , 19 , "Male" , "BS(Computer Science)"],
    ["Muskan" , 24 ,  "Female" , "BS(BioChemistry)"],
    ["Arman" , 20 , "Male" , "BS(Mass Communication)"],
    ["Zain" , 18 ,  "Male" , "BS(Computer Science)"]
];
   //document.write(ary[0][2]);
   document.write("<table border='1px' cellpadding='2px' cellspacing='2px' bgcolor='pink'>")
      for(var b = 0; b<ary.length; b++){
        document.write("<tr>")
         for( var c = 0; c<ary[b].length; c++){
             document.write("<td>" + ary[b][c] + "</td>");
        }
         document.write("</tr>");
     };
     document.write("</table>");

     document.write("<br><br>");
      var ara = ["Babar","Kholi","Saim","Hardik"];
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      }
      document.write("<br>");
       ara.sort();                        // (For Sorting Method of Array);
       for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
      document.write("<br>");
      ara.reverse();                      // (For Reverse Method of Array);
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
      document.write("<br>");
      ara.pop();                         // (For Pop Method of Array);
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
      document.write("<br>");
      ara.push("Babar");                     // (For Push Method of Array); 
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
      document.write("<br>");
      ara.shift();                     // (For Shift Method of Array); 
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
      document.write("<br>");
      ara.unshift("Babar");                     // (For UnShift Method of Array); 
      for( var d = 0; d<ara.length; d++){
        document.write(ara[d] + " ");
      };
    document.write("<br>");
      var e = ["Salman","Babar","Zain","Hussnain"];
      var f = ["Hassan","Afridi"];
      var g = ["Imam","Fakhar"];
      var d = e.concat(f,g);              // (For Concat Method of Array);
      document.write(d + " ");
      document.write("<br>");
      var h = d.join("-");                // (For Join Method of Array);
      document.write(h);
      


      var ayr = new Array();
       for ( var i = 0; i<=3; i++){
           ayr[i] = prompt("Enter Your Values");
       }
      document.write("<ul>");
       for ( var k = 0; k<=3; k++){
        document.write("<li>" + ayr[k] + "</li>");
       };
       document.write("</ul>");

       document.write("<br>");





       for( var x = 5; x>=1; x--){
        for( var y = 1; y<=x; y++)
        {
            document.write(x + " ");
        }
        document.write("<br>")
       }

