var ctxs;
var numStars = 500;
var radius = 2;
var star, i;
var stars = [];

function initializeStars()
{
	ctxs = canvas.getContext("2d");

	for (i = 0; i < numStars; i++)
	{
		star = {
			x: Math.random(),
			y: Math.random(),
			z: Math.random()
		};
		stars.push(star);
	}
}

function moveStars()
{
	for (i = 0; i < numStars; i++)
	{
		star = stars[i];
		star.z -= 0.02;
		if(star.z <= 0)
		{
			star.x = Math.random();
			star.y = Math.random();
			star.z = 1;
		}
	}
}
  
function drawStars(colorS)
{
	var pixelX, pixelY, pixelRadius, starX, starY, starZ, r, g, b;

	ctxs.fillStyle = "black";
	ctxs.fillRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < numStars; i++)
	{
		star = stars[i];
		starX = star.x*canvas.width;
		starY = star.y*canvas.height;

		for (var j = 3; j >= 0; j--)
		{
			starZ = (star.z + 0.008 * j) * canvas.width;

			r = red   - (j+1)*51;
			g = green - (j+1)*51;
			b = blue  - (j+1)*51;

			ctxs.fillStyle = "rgb("+r+","+g+","+b+")";

			pixelX = (starX - centerX) * (canvas.width/starZ);
			pixelX += centerX;
			pixelY = (starY - centerY) * (canvas.width/starZ);
			pixelY += centerY;
			pixelRadius = (radius - j * 0.2) * (canvas.width/starZ);

			ctxs.beginPath ();
			ctxs.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
			ctxs.fill();
		}
	}
}

function callStars(colorS)
{
	moveStars();
	drawStars(colorS);
}
