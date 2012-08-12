var color1, color2, colorY, xmove, ymove, grad, talk, move, distance, color, mouse, context;
function init_face()
{
	context = canvas.getContext("2d");
	color1 = "yellow";
	color2 = "yellow";
	xmove = 0;
	ymove = 0;
	grad = context.createLinearGradient(200, 30, 370, 400);
	talk = 0;
	move = 0;
	distance = 121;
	color = "white";
	mouse = {
		x:0,
		y:0,
		down: false
	};

	// CALL FUNCTIONS
	setInterval(function(){
		init();
		clearCanvas();
		callStars(color);
		drawFace(color1,color2);  
		move = move + 0.1;
		moodBar(0);

		var fCol = 'rgba('+red+','+green+','+blue+','+alpha+')';
		color = fCol;

	}, 30);

	canvas.addEventListener('mouseout', function(event)
	{
		mouse.down = false;
		distance = 121;
	});
}

// FUNCTIONS 
function init()
{
	xmove = Math.cos(move)*8;
	ymove = Math.sin(move)*3;

	if (isTalking)
	{
		talk = Math.abs(Math.sin(move*2)*30);
	}
	else
	{
		talk = 5;
	}
}

function clearCanvas()
{
	context.clearRect(0,0,canvas.width,canvas.height);
}
    
function drawEyeBrows (x1, x2, y1, y2)
{
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineWidth = 8;
	context.strokeStyle = "black";
	context.stroke();
}
    
function drawCircle(x, y, radius, endingAngle, color, color2, col)
{
	context.beginPath();
	context.arc (centerX+x, centerY+y, radius, 0, endingAngle);
	context.fillStyle = col;
	context.fill();
	context.lineWidth = 3;
	context.strokeStyle = color2;
	context.stroke();
}
    
function drawFace(color1, color2)
{
	drawCircle (xmove, ymove, 120, 2*Math.PI, grad, 'black', 'rgba('+red+','+green+','+blue+','+alpha+')');

	// eyes
	drawCircle (-50+xmove, -20+ymove, 35+ymove, 2*Math.PI, 'white', 'black', 'white');
	drawCircle (50+xmove, -20+ymove, 35+ymove, 2*Math.PI, 'white', 'black', 'white');

	// inner eyes
	drawCircle (-45+xmove, -20, 20+ymove, 2*Math.PI, 'cyan', 'blue', 'cyan');
	drawCircle (45+xmove, -20, 20+ymove, 2*Math.PI, 'cyan', 'blue', 'cyan');

	drawMouth();

	drawEyeBrows(centerX-50+xmove-10, centerX-15+xmove, centerY+ymove-80, centerY-70);
	drawEyeBrows(centerX+50+xmove+10, centerX+50+xmove-35, centerY+ymove-80, centerY-70);
}
    
function drawMouth()
{
	context.beginPath();
	context.rect(centerX-50+xmove, centerY+50, 100, talk);
	context.fillStyle = "red";
	context.lineWidth = 5; 
	context.strokeStyle = "black";
	context.stroke();
}
