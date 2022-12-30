const color = ['rgb(0,123,167)', 'rgb(277,127,89)', 'rgb(255,86,106)', 'rgb(247,233,160)', 'rgb(157,90,140)', 'rgb(20,111,95)', 'rgb(133,51,210)']
let item = document.querySelectorAll(".item");
let row = 3;
let cols = 3;

let result = document.querySelector(".result");
let totalscore = document.querySelector("h4");
let play = document.querySelector("button");
let currentscore = document.querySelector("p");
let score;
let section = document.querySelector("section ");

start();
function start(){
	score = 0;
	currentscore.innerHTML =  `score : ${score}`
	change();
}

function change() {
	let maincolor = color[Math.floor(Math.random() * color.length)];

	item.forEach(i => i.style.backgroundColor = maincolor);
	let target = item[Math.floor(Math.random() * (row * cols))];
	
	item.forEach(i => {
		
		if(target===i){
			i.addEventListener("click" ,nextlevel);
			i.removeEventListener("click" ,losegame);
		}else{
			i.removeEventListener("click" , nextlevel);
			i.addEventListener("click" , losegame);
		}
	})
		

	function ligth() {
		let x = maincolor.split(",").pop().split(")").splice(0, 1)[0] - 50;
		let num = maincolor.split(",")[0] + "," + maincolor.split(",")[1] + "," + x + ")";
		target.style.backgroundColor = num;
	}
	ligth()
}

function nextlevel(){
	score = score+1;
	currentscore.innerHTML = `score : ${score}`
	change();
}
function losegame(){
	totalscore.innerHTML = `score : ${score}`;
	result.classList.remove("hidden");
	section.classList.add("hidden");
}
play.addEventListener("click", ()=>{
	result.classList.add("hidden");
	section.classList.remove("hidden");
	start()
})