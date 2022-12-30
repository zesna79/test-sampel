let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let isdrawing = false;
let brush_width = document.querySelector("#brush-width");
let current_width = 5;
let color_piker = document.querySelector("#color-piker");
let current_color = "";
let eraser = document.querySelector(".eraser");
let brush = document.querySelector(".brush");
let clear = document.querySelector(".clear");
let save = document.querySelector(".save");

function load() {
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	ctx.fillStyle = 'aliceblue';
	ctx.fillRect(0, 0, 600, 600);
}
function start() {
	isdrawing = true;
	ctx.beginPath();
}
function end() {
	isdrawing = false;
}
function drawing(e) {
	if (isdrawing) {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		ctx.lineWidth = current_width;
		ctx.strokeStyle = `${current_color}`;
	}
}

brush_width.addEventListener("change", () => {
	current_width = brush_width.value;
});
color_piker.addEventListener("change", () => {
	current_color = color_piker.value;
});
eraser.addEventListener("click", () => {
	eraser.classList.add("active");
	brush.classList.remove("active");
	current_color = 'aliceblue';
})
brush.addEventListener("click", () => {
	brush.classList.add("active");
	eraser.classList.remove("active");
	current_color = color_piker.value;
})
clear.addEventListener("click", () => {
	ctx.fillStyle = 'aliceblue';
	ctx.fillRect(0, 0, 600, 600);
})
save.addEventListener("click", () => {
	let link = document.createElement("a");
	link.download = `${Date.now()}.png`;
	link.href = canvas.toDataURL();
	link.click()
})

window.addEventListener("load", load);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", end);
