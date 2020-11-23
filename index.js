'use strict';
function move() {
	const elem = document.getElementById("progress-bar");
	const inputVal = document.getElementById("goal").value;
	console.log("inputVal: ", inputVal);
	let width = 1;
	frame();
	function frame() {
	  if (width >= 10000) {
		 alert("congrats you completed your monthly challenge!");
	  } else {
		width = Math.floor(((inputVal / 10000) * 100));
		console.log("width: ", width);
		elem.style.width = width + "%";
		elem.innerHTML = width + "%";
	  }
	}
}
