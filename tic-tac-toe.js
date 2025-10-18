//getElementsByTagName()
//getElementByID()
//getElementsByClassName()

document.addEventListener('DOMContentLoaded',function(){
	let  brd = document.getElementById("board");
	let boxes = brd.getElementsByTagName("div");


	let drawBoard = function(){
		//1. Layout Board
		for(let x =0; x < boxes.length; x++){
			boxes[x].className = "square";};
		}


	let play = function(ch){
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
	

//2. Add X or O
	//boxes[x].addEventListener("click", function(){})
	//3. Mouse/Square style change
//4. Check winner & Update State
//5. Restart
//6. Disallow cheating
});

