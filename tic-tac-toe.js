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
		let elem = document.getElementById("status");
		for(box of boxes){
			drawBoard();
			box.textContent = "";
			elem.textContent ="Move your mouse over a square and click to play an X or an O.";
			elem.classList.remove("you-won");
			}
	}


	let sco_chk = function(mk){
			let elem = document.getElementById("status");
			if (boxes[0].textContent!=="" && boxes[1].textContent!== "" && boxes[2].textContent!==""){
				if(boxes[0].textContent==="X" && boxes[1].textContent=== "X" && boxes[2].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[0].textContent==="O" && boxes[1].textContent=== "O" && boxes[2].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}
			if (boxes[3].textContent!=="" && boxes[4].textContent!== "" && boxes[5].textContent!==""){
				if(boxes[3].textContent==="X" && boxes[4].textContent=== "X" && boxes[5].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[3].textContent==="O" && boxes[4].textContent=== "O" && boxes[5].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}

			if (boxes[6].textContent!=="" && boxes[7].textContent!== "" && boxes[8].textContent!==""){
				if(boxes[6].textContent==="X" && boxes[7].textContent=== "X" && boxes[8].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[6].textContent==="O" && boxes[7].textContent=== "O" && boxes[8].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}

			///////////////////////////////////////////////////
						if (boxes[0].textContent!=="" && boxes[6].textContent!== "" && boxes[3].textContent!==""){
				if(boxes[0].textContent==="X" && boxes[6].textContent=== "X" && boxes[3].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[0].textContent==="O" && boxes[3].textContent=== "O" && boxes[6].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}
			if (boxes[1].textContent!=="" && boxes[4].textContent!== "" && boxes[7].textContent!==""){
				if(boxes[1].textContent==="X" && boxes[4].textContent=== "X" && boxes[7].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[1].textContent==="O" && boxes[4].textContent=== "O" && boxes[7].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}

			if (boxes[2].textContent!=="" && boxes[5].textContent!== "" && boxes[8].textContent!==""){
				if(boxes[2].textContent==="X" && boxes[5].textContent=== "X" && boxes[8].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[2].textContent==="O" && boxes[5].textContent=== "O" && boxes[8].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}

			///////////////////////////////////////////////////////////////

			if (boxes[0].textContent!=="" && boxes[4].textContent!== "" && boxes[8].textContent!==""){
				if(boxes[0].textContent==="X" && boxes[4].textContent=== "X" && boxes[8].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[0].textContent==="O" && boxes[4].textContent=== "O" && boxes[8].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}

			if (boxes[2].textContent!=="" && boxes[4].textContent!== "" && boxes[6].textContent!==""){
				if(boxes[0].textContent==="X" && boxes[4].textContent=== "X" && boxes[6].textContent==="X"){
					elem.textContent = "Congratulations! X is the Winner";
					elem.classList.add("you-won");	
				}
				if(boxes[2].textContent==="O" && boxes[4].textContent=== "O" && boxes[6].textContent==="O"){
					elem.textContent = "Congratulations! O is the Winner";
					elem.classList.add("you-won");	
				}
			}
					/*console.log("check done");
					elem.textContent = "Congratulations!"+ mk+" is the Winner";
					elem.classList.add("you-won");*/							
		}


	let play = function(){
		restart.addEventListener('click',clearBoard);
		let currMk ='X';
		let c = 0;
		for(box of boxes){
			box.addEventListener('click', function(event){ 
			const clickedBx = event.target;
			c++;
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

