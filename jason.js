function openNav() {
// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
if ($(window).width() < 960) {
  document.getElementById("mySidenav").style.width = "35%";
  document.getElementById("mySidenav").style.display="block";
}
else {
  document.getElementById("mySidenav").style.width = "15%";
  document.querySelector(".main").style.marginLeft = "15%";
  document.getElementById("mySidenav").style.display="block";
}
}


function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.querySelector(".main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
}
