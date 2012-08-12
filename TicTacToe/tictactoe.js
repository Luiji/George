var divT;
var canvasT;
var cont;
var centerx;
var centery;
//false is your turn
var turn = false;
var i;
var checkTwoO=false;
var checkTwo=false;
var squares = [[0,100,200],[0,100,200],[0,100,200]];
var turn1=true;
var tictactoeV;
var tictactoeH;
var checkIfPieceIsThere= [[0,0,0],[0,0,0],[0,0,0]];
var checkX=[[0,0,0],[0,0,0],[0,0,0]];
var checkO=[[0,0,0],[0,0,0],[0,0,0]];

function initializeTicTacToe(){
	divT = document.getElementById("tictactoe-zone");
	canvasT = document.getElementById("canvasT");
	cont  = canvasT.getContext("2d");
	centerx=canvasT.width/2;
	centery=canvasT.height/2;
	tictactoeV= [centerx-50,centerx+50];
	tictactoeH= [centery-50,centery+50];
	drawGrid();
	canvasT.addEventListener("mousedown",function(e){
		var xVal=e.x-divT.offsetLeft;
		var yVal=e.y-divT.offsetTop;
		while(xVal%100!=0)
			xVal++;
		while(yVal%100!=0)
			yVal--;

		if(checkIfPieceIsThere[xVal/100-1][yVal/100]==0){	
			checkX[xVal/100-1][yVal/100]=1;
			drawX(xVal/100,yVal);
			turn=true;
			check();
		}

		if(turn===true){
			checkIfPieceIsThere[xVal/100-1][yVal/100]=1;
			compTurn();
		}
	});
}

// get the command
function drawGrid(){
	//verticle lines
	for( i = 0; i<2; i++){
		cont.beginPath();
		cont.moveTo(tictactoeV[i],0);
		cont.lineTo(tictactoeV[i],canvasT.height);
		cont.closePath();
		cont.stroke();
	}
	
	
	//horizontal lines
	for(i = 0; i<2; i++){
		cont.beginPath();
		cont.moveTo(0,tictactoeH[i]);
		cont.lineTo(canvasT.width, tictactoeH[i]);
		cont.closePath();
		cont.stroke();
	}
}

function drawX(row,squarePlacement){
	var centerPointX=100*row-50;
	var centerPointY=squarePlacement+50;
	
	cont.beginPath();
	cont.moveTo(row*100-100,squarePlacement);
	cont.lineTo(centerPointX+50,centerPointY+50);
	cont.closePath();
	cont.stroke();
	
	cont.beginPath();
	cont.moveTo(row*100,squarePlacement);
	cont.lineTo(centerPointX-50,centerPointY+50);
	cont.closePath();
	cont.stroke();

}

function drawO(row,squarePlacement){
	cont.beginPath();
	cont.arc(row*100-50,squarePlacement+50,50,0,Math.PI*2);
	cont.closePath();
	cont.stroke();
	checkIfPieceIsThere[row-1][squarePlacement/100]=1;
}

function compTurn(){
	if(checkIfPieceIsThere.toString()==[[1,1,1],[1,1,1],[1,1,1]].toString())
	{
		finalizeGame("Stalemate");
		return;
	}
	checkTwoComp();
	if(checkTwoO===false){
		for(var h = 0; h<3; h++){
			if(checkX[h][1]===1 && checkX[h][0]===1 && checkIfPieceIsThere[h][2]===0){
				checkO[h][2]=1;
				drawO(h+1,200);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[h][1]===1 && checkX[h][2]===1 &&checkIfPieceIsThere[h][0]===0){
				checkO[h][0]=1;
				drawO(h+1,0);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[h][0]===1 && checkX[h][2]===1 &&checkIfPieceIsThere[h][1]===0){
				checkO[h][1]=1;
				drawO(h+1,100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[0][0]===1 && checkX[2][2]===1 &&checkIfPieceIsThere[1][1]===0){
				checkO[1][1]=1;
				drawO(2,100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[2][0]===1 && checkX[0][2]===1 &&checkIfPieceIsThere[1][1]===0){
				checkO[1][1]=1;
				drawO(2,100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[0][0]===1 && checkX[2][2]===1 &&checkIfPieceIsThere[1][1]===0){
				checkO[1][1]=1;
				drawO(2,100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[2][0]===1 && checkX[0][2]===1 &&checkIfPieceIsThere[1][1]===0){
				checkO[1][1]=1;
				drawO(2,100);
				check2();
				checkTwo=true;
				break;
		
			}
			if(checkX[1][1]===1 && checkX[0][0]===1 && checkIfPieceIsThere[2][2]===0){
				checkO[2][2]=1;
				drawO(3,200);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[1][1]===1 && checkX[2][2]===1 && checkIfPieceIsThere[0][0]===0){
				checkO[0][0]=1;
				drawO(1,0);
				check2();
				checkTwo=true;
				break;
			}
		}
	}

	if(checkTwo===false){
		for(var x = 0; x<3; x++){
			if(checkX[1][x]===1 && checkX[0][x]===1 && checkIfPieceIsThere[2][x]===0){
				checkO[2][x]=1;
				drawO(3,x*100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[1][x]===1 && checkX[2][x]===1 &&checkIfPieceIsThere[0][x]===0){
				checkO[0][x]=1;
				drawO(1,x*100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[0][x]===1 && checkX[2][x]===1 &&checkIfPieceIsThere[1][x]===0){
				checkO[1][x]=1;
				drawO(2,x*100);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[1][1]===1 && checkX[0][2]===1 && checkIfPieceIsThere[2][0]===0){
				checkO[2][0]=1;
				drawO(3,0);
				check2();
				checkTwo=true;
				break;
			}
			if(checkX[1][1]===1 && checkX[2][0]===1 && checkIfPieceIsThere[0][2]===0){
				checkO[0][2]=1;
				drawO(1,200);
				check2();
				checkTwo=true;
				break;
			}
		}
	}
	if(checkTwo===false){
		while(turn===true){
			var aRow=Math.floor( Math.random()*3);
			if(aRow===3)
				aRow=2;
		
			var aColumn=Math.floor(Math.random()*3);
			if(aColumn===3)	
				aColumn=2;
		
			if(checkIfPieceIsThere[aRow][aColumn]===0){
				checkO[aRow][aColumn]=1;
				drawO(aRow+1,aColumn*100);
				check2();
				turn=false;
		
			}
		}
	}
	checkTwoO=false;
	checkTwo=false;
	turn=false;
}

function finalizeGame(winOrLose)
{
	cspeak("You " + winOrLose + "!");
	turn=false;
	cont.clearRect(0,0,canvasT.width,canvasT.height);
	drawGrid();
	checkIfPieceIsThere=[[0,0,0],[0,0,0],[0,0,0]];
	checkX=[[0,0,0],[0,0,0],[0,0,0]];
	checkO=[[0,0,0],[0,0,0],[0,0,0]];
}

function check()
{
	if(checkX[0][0]===1 && checkX[0][1]===1 && checkX[0][2] === 1)
	{
		finalizeGame("Win");
	} 
	else if(checkX[1][0]===1 && checkX[1][1]===1 && checkX[1][2] === 1)
	{
		finalizeGame("Win");
	} 
	else if(checkX[2][0]===1 && checkX[2][1]===1 && checkX[2][2] === 1)
	{
		finalizeGame("Win");
	}
	else if(checkX[0][0]===1 && checkX[1][0]===1 && checkX[2][0] === 1)
	{
		finalizeGame("Win");
	}
	else if(checkX[0][1]===1 && checkX[1][1]===1 && checkX[2][1] === 1)
	{
		finalizeGame("Win");
	}
	else if(checkX[0][2]===1 && checkX[1][2]===1 && checkX[2][2] === 1)
	{
		finalizeGame("Win");
	}
	else if(checkX[0][0]===1 && checkX[1][1]===1 && checkX[2][2] === 1)
	{
		finalizeGame("Win");
	}
	else if(checkX[2][0]===1 && checkX[1][1]===1 && checkX[0][2] === 1)
	{
		finalizeGame("Win");
	}
	else
	{
		check2();
	} 
}

function check2()
{
	if(checkO[0][0]===1 && checkO[0][1]===1 && checkO[0][2] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[1][0]===1 && checkO[1][1]===1 && checkO[1][2] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[2][0]===1 && checkO[2][1]===1 && checkO[2][2] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[0][0]===1 && checkO[1][0]===1 && checkO[2][0] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[0][1]===1 && checkO[1][1]===1 && checkO[2][1] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[0][2]===1 && checkO[1][2]===1 && checkO[2][2] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[0][0]===1 && checkO[1][1]===1 && checkO[2][2] === 1)
	{
		finalizeGame("Lose");
	}
	else if(checkO[2][0]===1 && checkO[1][1]===1 && checkO[0][2] === 1)
	{
		finalizeGame("Lose");
	}
}

//checks for double O's on the screen
function checkTwoComp(){
	//vertical
	for(var h = 0; h<3; h++){
		if(checkO[h][1]===1 && checkO[h][0]===1 && checkIfPieceIsThere[h][2]===0){
			checkO[h][2]=1;
			drawO(h+1,200);
			check2();
			checkTwoO=true;
			break;
		}
		if(checkO[h][1]===1 && checkO[h][2]===1 &&checkIfPieceIsThere[h][0]===0){
			checkO[h][0]=1;
			drawO(h+1,0);
			check2();
			checkTwoO=true;
			break;
		}	
		if(checkO[h][0]===1 && checkO[h][2]===1 &&checkIfPieceIsThere[h][1]===0){
			checkO[h][1]=1;
			drawO(h+1,100);
			check2();
			checkTwoO=true;
			break;
		}
		if(checkO[0][0]===1 && checkO[2][2]===1 &&checkIfPieceIsThere[1][1]===0){
			checkO[1][1]=1;
			drawO(2,100);
			check2();
			checkTwoO=true;
			break;
		}
		if(checkO[2][0]===1 && checkO[0][2]===1 &&checkIfPieceIsThere[1][1]===0){
			checkO[1][1]=1;
			drawO(2,100);
			check2();
			checkTwoO=true;
			break;
		
		}
		if(checkO[1][1]===1 && checkO[0][0]===1 && checkIfPieceIsThere[2][2]===0){
			checkO[2][2]=1;
			drawO(3,200);
			check2();
			checkTwoO=true;
			break;
		}
		if(checkO[1][1]===1 && checkO[2][2]===1 && checkIfPieceIsThere[0][0]===0){
			checkO[0][0]=1;
			drawO(1,0);
			check2();
			checkTwoO=true;
			break;
		}
	}

	//horizontal
	if(checkTwoO===false){
		for(var x = 0; x<3; x++){
			if(checkO[1][x]===1 && checkO[0][x]===1 && checkIfPieceIsThere[2][x]===0){
				checkO[2][x]=1;
				drawO(3,x*100);
				check2();
				checkTwoO=true;
				break;
			}
			if(checkO[1][x]===1 && checkO[2][x]===1 &&checkIfPieceIsThere[0][x]===0){
				checkO[0][x]=1;
				drawO(1,x*100);
				check2();
				checkTwoO=true;
				break;
			}
			if(checkO[0][x]===1 && checkO[2][x]===1 &&checkIfPieceIsThere[1][x]===0){
				checkO[1][x]=1;
				drawO(2,x*100);
				check2();
				checkTwoO=true;
				break;
			}
			if(checkO[1][1]===1 && checkO[0][2]===1 && checkIfPieceIsThere[2][0]===0){
				checkO[2][0]=1;
				drawO(3,0);
				check2();
				checkTwoO=true;
				break;
			}
			if(checkO[1][1]===1 && checkO[2][0]===1 && checkIfPieceIsThere[0][2]===0){
				checkO[0][2]=1;
				drawO(1,200);
				check2();
				checkTwoO=true;
				break;
			}
		}
	}
}
