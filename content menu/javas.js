let container = document.querySelector(".container");
let menu = document.querySelector(".menu")

document.addEventListener("contextmenu" , (e)=>{
	e.preventDefault();
	let x = e.offsetX;
	let y = e.offsetY;
	let xmenu = menu.offsetWidth; 
	let xwin = window.innerWidth;
	let ywin = window.innerHeight;
	let xbox = container.offsetWidth;
	let ybox = container.offsetHeight;

	if(x > (xwin-xbox)){
		x = xwin-xbox
	}
	if(y > (ywin-ybox)){
		y = ywin-ybox
	}
	// x = x > xwin-xbox ? xwin-xbox : x; 
	// y = y > ywin-ybox ? ywin-ybox : y; 

	if(x > xwin-xbox-xmenu){
		menu.style.left = '-181px'
	}else{
		menu.style.left = '240px'
	}

	container.style.left = x + "px"
	container.style.top = y + "px"
	container.style.visibility = "visible"

})

document.addEventListener("click" , ()=>{
	container.style.visibility = "hidden"

})