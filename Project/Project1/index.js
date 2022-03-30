function portfolioFunction(){
    var x = document.getElementById("Contact");
    var y = document.getElementById("Portfolio");
    var z = document.getElementById("About");
    if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display="none";
    z.style.display="none";
  } else {
    x.style.display = "none";
    z.style.display="none";
  }
}

function aboutFunction(){
    var x = document.getElementById("Contact");
    var y = document.getElementById("Portfolio");
    var z = document.getElementById("About");
    if (z.style.display === "none") {
    z.style.display = "block";
    x.style.display="none";
    y.style.display="none";
  } else {
    x.style.display = "none";
    y.style.display="none";
  }
}



function contactFunction(){
    var x = document.getElementById("Contact");
    var y = document.getElementById("Portfolio");
    var z = document.getElementById("About");
    if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display="none";
    z.style.display="none";
  } else{
      y.style.display="none";
      z.style.display="none";
  }
}






// if (onclick==)

// document.getElementById("About").onclick=function(){

// }
// document.getElementById("Portfolio").onclick=function(){
    
// }
// document.getElementById("Contact").onclick=function(){
    
// }

