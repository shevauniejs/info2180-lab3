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


	let sco_chk = function(mk){
		alert("so_check");
		let elem = document.getElementById("status");
		if((boxes[0]===boxes[1] && boxes[1]===boxes[2])||
			(boxes[3]===boxes[4] && boxes[4]===boxes[5])||
			(boxes[6]===boxes[7]&& boxes[7]===boxes[8])){
				elem.textContent = "Congratulations!"+ mk+" is the Winner";
				elem.classList.add("you-won");	
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
				sco_chk(currMk);
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

