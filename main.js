function init_main()
{
	var canvas = document.getElementById("canvas");

	// set the initial canvas size and make sure it resizes when the window
	// does
	resize_canvas();
	$(window).resize(resize_canvas);

	// make the widgets draggable
	$("#input-zone").draggable();
	$("#tictactoe-zone").draggable();

	initializeStars();
	initializeTicTacToe();
	init_face();
}

function resize_canvas()
{
	canvas.width = $(window).width();
	canvas.height = $(window).height()-8;

	// used in rendering functions
	centerX = canvas.width/2;
	centerY = canvas.height/2;
}
