//getElementsByTagName()
//getElementByID()
//getElementsByClassName()

document.addEventListener('DOMContentLoaded',function(){
	let  brd = document.getElementById("board");
	let boxes = brd.getElementsByTagName("div");
	let restart = document.querySelector(".btn");

	let drawBoard = function(){
			//1. Layout Board
		for(let x =0; x < boxes.length; x++){
			boxes[x].className = "square";};
		}
	

	let clearBoard = function(){
		for(box of boxes){
			drawBoard();
			box.textContent = "";
			}
	}




	let play = function(){
		restart.addEventListener('click',clearBoard);
		let currMk ='X';
		for(box of boxes){
			box.addEventListener('click', function(event){ 
			const clickedBx = event.target;
			if(clickedBx.textContent===""){
				clickedBx.textContent = currMk;
				clickedBx.classList.add(currMk);
				if(currMk==="X"){
					currMk = "O";	
					} else {
						currMk ='X';
					}
				}
			});
			drawBoard();
		}
	}
	
	let init = function(){
		alert("game started\n");
		drawBoard();
		play();
		}

	init();
		
});

