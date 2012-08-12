var pointer_width = 2;
var red, blue, green, alpha, faceColor, pix;

function moodBar(count)
{
	var c = canvas.getContext("2d");;
	var grd = c.createLinearGradient(0, canvas.height-25, 200, canvas.height);

	grd.addColorStop(0, "#013ADF");
	// grd.addColorStop(0.5,"#B40404");
	grd.addColorStop(0.5, "red");
	grd.addColorStop(0.85, "#F7FE2E");
	grd.addColorStop(1, "yellow");

	c.fillStyle = grd;
	c.fillRect(0, canvas.height-25, 200, canvas.height);
	c.beginPath();
	if(moodLocation>200)
		moodLocation=200;

	c.moveTo(moodLocation, canvas.height-25);
	c.strokeStyle = "#04B404";
	c.lineWidth = pointer_width;
	c.lineTo(moodLocation, canvas.height);
	c.stroke();

	if(moodLocation < 5)
		faceColor = c.getImageData(moodLocation+2, canvas.height-23, 1, 1);
	else
		faceColor = c.getImageData(moodLocation-2, canvas.height-23, 1, 1);

	pix   = faceColor.data;
	red   = pix[0];
	green = pix[1];
	blue  = pix[2];
	alpha = 0.6;
}
