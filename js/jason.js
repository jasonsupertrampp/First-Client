
function openNav() {
// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
if ($(window).width() < 960) {
  document.getElementById("mySidenav").style.width = "50%";
  document.getElementById("mySidenav").style.display="block";
  document.querySelector(".logo").style.visibility="hidden";
  document.querySelector(".navbar-toggler").style.visibility="hidden";
}
else {
  document.getElementById("mySidenav").style.width = "15%";
  document.querySelector(".main").style.marginLeft = "15%";
  document.getElementById("mySidenav").style.display="block";
}

}

function toggleClose(){
  var x=document.querySelector('.burger');
  if(x.style.display ==="none"){
    x.style.display="block";
  }else{
    x.style.display="none";
  }

}


// function anotherClose(){
//   var x=document.querySelector('#navbarNav');
//   if(x.style.display ==="none"){
//     x.style.display="block";
//   }else{
//     x.style.display="none";
//   }
// }

document.querySelector(".trend").addEventListener("touchstart",function(){
closeNav();
// anotherClose();
});
document.querySelector(".page-footer").addEventListener("touchstart",function(){
closeNav();
});
document.querySelector(".other-products").addEventListener("touchstart",function(){
closeNav();
});
document.querySelector("#title").addEventListener("touchstart",function(){
closeNav();
});

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.querySelector(".main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
document.querySelector(".logo").style.visibility="inherit";
document.querySelector(".navbar-toggler").style.visibility="inherit";
}
