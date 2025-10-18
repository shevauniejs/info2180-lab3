//getElementsByTagName()
//getElementByID()
//getElementsByClassName()

document.addEventListener('DOMContentLoaded',function(){

//1. Layout Board
let  brd = document.getElementById("board");
let spaces = brd.getElementsByTagName("div");
let sChar ="O";

for(div of spaces){
	div.className = "square";	
//2. Add X or O
	};
//3. Mouse/Square style change
//4. Check winner & Update State
//5. Restart
//6. Disallow cheating
});

