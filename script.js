function changeBackgroundColor() {
	console.log("hi");
	document.body.style.backgroundColor = randomColor();
}

function randomColor() {
	var randomNum = Math.random()*3;
	if (randomNum > 2) {
		return  "pink";
	} else if (randomNum > 1) {
		return "yellow";
	} else {
		return "orange";
	}
}