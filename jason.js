
function openNav() {
document.getElementById("mySidenav").style.width = "15%";
document.querySelector(".main").style.marginLeft = "15%";
// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
document.getElementById("mySidenav").style.display="block";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.querySelector(".main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
}

// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);
