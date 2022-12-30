let control = document.querySelectorAll("select");
let box = document.querySelector(".control");
let time = document.querySelector("h1");
let btn = document.querySelector("button");
const alarm = new Audio('Alarm.mp3');
let alarmstate = 'noset';
let z;


for (i = 23; i >= 0; i--) {

	if (i < 10) {
		i = "0" + i;
	}
	else { i = i; }

	let option = `<option value="${i}">${i}</option>`;
	control[0].firstElementChild.insertAdjacentHTML('afterend', option);
}

for (i = 59; i >= 0; i--) {

	if (i < 10) {
		i = "0" + i;
	}
	else { i = i; }

	let option = `<option value="${i}">${i}</option>`;
	control[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval(()=>{
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	if (h<10) h = '0'+h
	if (m<10) m = '0'+m
	if (s<10) s = '0'+s
	time.innerHTML = `${h}:${m}:${s}`

	
	if (z == `${h}:${m}`){
		alarm.play();
		alarm.loop = true;
	}
	
}, 1000)

btn.addEventListener("click" , ()=>{

	let x = control[0].value;
	let y = control[1].value;
	z = `${x}:${y}`;

	if(z.includes('hour') || z.includes('minute')){
		alert("لطفا زمان را مشخص کنید")
	}
	else check(alarmstate)
	
})

function check(state){

	if(state == 'noset'){
		box.classList.add('disable');
		btn.innerHTML = 'clear alarm';
		alarmstate = 'set';
	}
	else if(state == 'set'){
		box.classList.remove('disable');
		z = " ";
		btn.innerHTML = 'set alarm';
		alarm.pause();
		alarmstate = 'noset';
	}
}	

