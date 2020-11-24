'use strict';
function move() {
	const elem = document.getElementById("progress-bar");
	const inputVal = document.getElementById("goal").value;
    localStorage.setItem('myCat', 'TK');
    console.log(localStorage.getItem('myCat'));
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

function getRemainingDays() {
  let date = new Date();
  let time = new Date(date.getTime());
  time.setMonth(date.getMonth() + 1);
  time.setDate(0);
  let days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
  let elem = document.getElementById("days-left");
  elem.innerHTML = "Days left in month: " + days;
}
getRemainingDays();
