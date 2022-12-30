var sindex = 0;
show(sindex);

function control(n) {
	sindex += n;
	show(sindex);
}
function sdot(n) {
	sindex = n;
	show(sindex);
}

function show(n) {
	const slide = document.querySelectorAll(".slide")
	const dot = document.querySelectorAll(".dot")

	if (n > slide.length - 1) {
		sindex = 0;
	}
	else if (n < 0) {
		sindex = 3;
	}

	for (let i = 0; i < slide.length; i++) {
		slide[i].style.display = "none"
	}
	slide[sindex].style.display = "flex";

	for (let i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace("active", "")
	}
	dot[sindex].classList.add("active");
}