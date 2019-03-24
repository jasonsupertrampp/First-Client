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
document.querySelector(".trend").addEventListener("click",function(){
closeNav()
});

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.querySelector(".main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
  document.querySelector(".logo").style.visibility="inherit";
  document.querySelector(".navbar-toggler").style.visibility="inherit";
}
