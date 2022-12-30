let btn = document.querySelector("button")
let img = document.querySelector(".imgqr")
let qr = document.querySelector("img")
let inp = document.querySelector("input")



btn.addEventListener("click" , ()=>{
	btn.innerHTML = "در حال تولید"
	let inp_val = inp.value
	if(!inp_val){
		alert("لطفا باکس را پر کنید")
	}
	else{
	img.classList.remove("hidden")
	qr.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + inp_val
	}
	qr.addEventListener("load" , ()=>{
		btn.innerHTML = "تولید QR code"
	})
	inp.addEventListener("keyup" , ()=>{
		let inp_val = inp.value
		if(!inp_val){
			img.classList.add("hidden")
		}
	})
})