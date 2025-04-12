const myVideo1 = document.getElementById("edit");
const myVideo2 = document.getElementById("edit2");

document.querySelector("#play").addEventListener("click", function() {
	myVideo1.play();
	console.log("Playing Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	myVideo1.pause();
	console.log("Paused Video");
});

document.querySelector("#play2").addEventListener("click", function() {
	myVideo2.play();
	console.log("Playing Video");
});

document.querySelector("#pause2").addEventListener("click", function() {
	myVideo2.pause();
	console.log("Paused Video");
});


const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});