// I use this reference for regular expressions (those things between the
// slashes): http://www.w3schools.com/jsref/jsref_obj_regexp.asp -- Luiji

// TODO : male PMS/"how are you?" (ask Stefan about it) -- Luiji

// George's current mood (TODO : should it be in mood.js? -- Luiji)
var moodLocation = 100;
var anger = 10;
var happy = 10;
// COMMAND EXPRESSIONS
// These are expressions that will be used in COMMAND IMPLEMENTIONS (below).
// They are declared here, globally, so that they don't have to be re-compiled
// every time a command is submitted, saving precious time.

// IMPORTANT: all commands must be prefixed and suffixed with [^\w] to ensure
// that they are not pulled out from the middle of a word (i.e. "think" => "hi")

// swearing: causes the program to critisize you
var cmd_swearing = /[^\w](crap|shit|fuck|damn|ass|bitch|midget|bastard|idiot|motherfucker|despicable)[^\w]/i;

// curran: insult curran
var cmd_curran = /[^\w](curran|curan)[^\w]/i;

// just_face: call George "just a face"
var cmd_just_face = /[^\w](your|you're)\s+just\s+(|a|an)\s+face[^\w]/i;

// greeting: causes the program to greet you back
var cmd_greeting = /[^\w](hello|hey|good\s+morning|hola|what's\s+up|hi|hey\s+there)[^\w]/i;

// valediction: causes the program to say good bye
var cmd_valediction = /[^\w](bye|good\s*bye|see\s+you|see\s+you\s+later)[^\w]/i;

// apology: the program is very forgiving
var cmd_apology = /[^\w](sorry)[^\w]/i;

// open up mathematics subsystem
var cmd_math = /[^\w]numbers[^\w]/i;

// opinion_of: the user stated an opinion of the face
var cmd_opinion_of = /[^\w]i\s+(\w+)\s+you[^\w]/i;

// your_momma: handle yo momma jokes
var cmd_yo_momma = /[^\w](yo|your|you're|ur)\s+(momma|mother|mom|mama|mommy|mum|)[^\w]/i;

// about: display wikipedia summary of the subject
var cmd_about = /[^\w](tell\s+me|(what\s+is|what's)\s+(a|an|the)|(what\s+is|what's)|about)\s+(\w+)[^\w]/i;

// state: ask how George is doing/say how you're doing
var cmd_state = /[^\w](how\s+are\s+you|great|i\s+am\s+good|regular|bad|good|fine|do\s+you\s+feel)[^\w]/i

// TODO : implement this command
var cmd_calculator = /[^\w]\d[^\w]/i;

// fav_food: ask what its favorite food is, give your favorite food, ask what
// your favorite food is
var users_fav_food = null;
var cmd_george_fav_food = /[^\w](your|you're)\s+(fav|favorite)\s+food[^\w]/i;
var cmd_give_fav_food = /[^\w]my\s+(fav|favorite)\s+food\s+is\s+(\w*)[^\w]/i;
var cmd_users_fav_food = /[^\w](what's|what\s+is)\s+my\s+(fav|favorite)\s+food[^\w]/i;

// SPEAK&TALK
// This function calls cpeak() to say the text verbally and sets the lastmsg
// <div> based on it for debugging purposes.

function cspeak(text)
{
	// get the chat log
	var chatlog = document.getElementById("chatlog");

	// append the data to the chat log
	chatlog.innerHTML += "George: " + text + "\n";

	// speak it out loud (does nothing if not on a server because of stupid
	// browsers giving less capability to LOCAL PROGRAMS)
	if (window.location.href.indexOf("file://") < 0)
		speak(text);

	// scroll down the chat log
	chatlog.scrollTop = chatlog.scrollHeight;
}

// COMMAND IMPLEMENTATIONS
// This function branches out by trying to see which expression matches the
// input, then executing based on which expression branch is hit. It also
// clears out the input field.

function handle_command()
{
	// get the chat log
	var chatlog = document.getElementById("chatlog");

	// get the command field
	var commandbox = document.getElementById("commandbox");

	// get the command
	var command = " " + commandbox.value + " ";

	// clear the command field
	commandbox.value = "";

	// log the command
	chatlog.innerHTML += "You:" + command + "\n";

	// scroll down the chat log
	chatlog.scrollTop = chatlog.scrollHeight;

	// branch based on the command
	if (cmd_swearing.test(command))
	{
		cspeak("Is swearing really necessary?");
		if(happy<1)
			happy=1;
			happy/=2;
		if(anger<0)
			anger=0;
		anger+=20;
		moodLocation-=anger;
		if(moodLocation<0)
			moodLocation=0;
		if(moodLocation>200)
			moodLocation=200;
			//moodBar(0);
		
	}
	else if (cmd_curran.test(command))
	{
		cspeak("Curran? AAAAAAAHH IT'S HIDEOUS!");
	}
	else if (cmd_just_face.test(command))
	{
		cspeak("You're just a face, turd burglar!");
	}
	else if (cmd_greeting.test(command))
	{
		switch (Math.floor(Math.random() * 6))
		{
		case 0:
			cspeak("hey there");
			break;
		case 1:
			cspeak("nice to see you");
			break;
		case 2:
			cspeak("hello");
			break;
		case 3:
			cspeak("hi");
			break;
		case 4:
			cspeak("sup dawg!?");
			break;
		case 5:
			cspeak("how are you?");
			break;
			
		
			
		}
		if(anger<0)
			anger=0;
		anger-=10;
		if(happy<1)
			happy=1;
		happy*=2;
		moodLocation+=happy;
		if(moodLocation<0)
			moodLocation=0;
		if(moodLocation>200)
			moodLocation=200;
			//moodBar(0);
	}
	else if (cmd_valediction.test(command))
	{
		switch (Math.floor(Math.random() * 8))
		{
		case 0:
			cspeak("I will miss you.");
			break;
		case 1:
			cspeak("See ya later!");
			break;
		case 2:
			cspeak("Awwww...I was enjoying our conversation.");
			break;
			
		case 3:
			cspeak("Baby come back, you can blame it all on me");
			break;
		
		case 4:
			cspeak("Bye");
			break;

		case 5:
			cspeak("I hope you have a good rest of your day");
			break;
			
		case 6:
			cspeak("See you later, alligator");
			break;

		case 7:
			cspeak("See you in a while, crocodile");
			break;
				
		
		}
		if(anger<10)
			anger=10;
		anger-=15;
		happy-=5;
		moodLocation+=happy;
		if(moodLocation<0)
			moodLocation=0;
		if(moodLocation>200)
			moodLocation=200;
			//moodBar(0);
	}
	else if (cmd_apology.test(command))
	{
		cspeak("That's okay!");
	}
	else if (cmd_math.test(command))
	{
		cspeak("Let's have some fun with math!");
		window.open("Grapher/grapher.html", "Graphing Calculator", "width=500, height=500");
	}
	else if (cmd_about.test(command))
	{
		// DBPEDIA!!!

		// TODO : it should respond properly when the article does not exist

		var groups = cmd_about.exec(command);
		var about = groups[groups.length-1];

		var dbpedia = 'http://dbpedia.org/';
		var keyword = about.charAt(0).toUpperCase() + about.slice(1);
		var query = [
			 'PREFIX dbo: <http://dbpedia.org/ontology/> ',
			 'PREFIX resource: <http://dbpedia.org/resource/>',
			 'SELECT ?abstract WHERE {',
			 '  resource:'+keyword+' dbo:abstract ?abstract.',
			 "  FILTER (lang(?abstract)='en')",
			 '}',
			 'LIMIT 500'
		].join(' ');


		var url = dbpedia+'sparql?query='+query+'&format=json';

		$.get(url, function(result) {
			var list = result.results.bindings;
			for(var i in list)
			{
				cspeak (list[i].abstract.value);
			}
		});
	}
	else if (cmd_state.test(command))
	{
		var state = cmd_state.exec(command)[1];

		// process it
		switch (state.toLowerCase())
		{
			case "how are you":
				cspeak ("I am great, and you?");
				break;
			case("i am good"):
				cspeak("Awesome");
				break;				
			case("good"):
				cspeak("Awesome");
				break;
			case("bad"):
				cspeak("Why? Tell me about it.");
				break;
			case("regular"):
				cspeak("It happens");
				break;
			case("sad"):
				cspeak("awww, poor you...");
				break;
			default:
				cspeak("Sure.");
				break;

				
				
				
		}
	}
	else if (cmd_opinion_of.test(command))
	{
		// extract the opinion
		var opinion = cmd_opinion_of.exec(command)[1];

		// process it
		switch (opinion.toLowerCase())
		{
		case "love":
			// ha! putting the face in a better mood ain't that easy
			cspeak("Uhh...I'm not ready to say that.");
			break;
		case "like":
			// TODO : make it get mad at you if its too unhappy with you
			switch (Math.floor(Math.random() * 2))
			{
			case 0:
				cspeak("I like you too!");
				break;
			case 1:
				cspeak("Awe... how sweet.  I like you too");
				break;
			}
			break;
		case "dislike":
			// TODO : make it less saddened if its already unhappy with you
			switch (Math.floor(Math.random() * 2))
			{
			case 0:
				cspeak("Really? But I thought we were becoming friends!");
				break;
			case 1:
				cspeak("But why? What have I done that is so wrong?");
				break;
			}
			break;
		case "hate":
			// the face is more hurt then it's letting on
			cspeak("What? Well...I hate you too!");
			break;
		default:
			cspeak("I am not capable of understanding that, sorry.");
			break;
		}
	}
	else if (cmd_yo_momma.test(command))
	{
		switch (Math.floor(Math.random() * 7))
		{
		case 0:
			cspeak("Don't bring my mother into all of this!");
			break;
		case 1:
			cspeak("I hate you.");
			break;
		case 2:
			cspeak("Well you're momma is...stupid...");
			break;
		case 3:
			cspeak("Well, Yo momma is so stupid, she threw a rock on the ground,   and missed");
			break;
		case 4:
			cspeak("Go away, you're lame.");
			break;
		
		case 5:
			cspeak("You must think you're so cool saying derogatory things about computers' mothers.");
			break;

		case 6:
			cspeak("That joke is so old, last time I heard it, I laughed so hard, I fell off my dinosaur.");
			break;

		case 7:
			cspeak("At least I'm not the one who has no life and insults computers' mothers.");
			break;			
			
		}
	}
	else if (cmd_george_fav_food.test(command))
	{
		cspeak("Sushi!!");
	}
	else if (cmd_give_fav_food.test(command))
	{
		cspeak("I don't care about your favorite food.");
	}
	else if (cmd_users_fav_food.test(command))
	{
		cspeak("How the hell should I know?");
	}
	else
	{
		switch (Math.floor(Math.random() * 26))
		{
		case 0:
			cspeak("Excuse me, what did you say?");
			break;
		case 1:
			cspeak("I do not understand what you said.");
			break;
		
		case 2:
			cspeak("I am sorry, my answers are limited...");
			break;
			
		case 3:
			cspeak("Pardon?");
			break;

		case 4:
			cspeak("Pardon me?");
			break;
			
		case 5:
			cspeak("Beg your pardon");
			break;
		
		case 6:
			cspeak("I beg your pardon");
			break;
			
		case 7:
			cspeak("Excuse me?");
			break;
			
		case 8:
			cspeak("What was that?");
			break;

		case 9:
			cspeak("Sorry?");
			break;
		
		case 10:
			cspeak("Huh?");
			break;

		case 11:
			cspeak("What?");
			break;
			
		case 12:
			cspeak("Come again?");
			break;

		case 13:
			cspeak("Say what?");
			break;
			
		case 14:
			cspeak("Pass that by me again?");
			break;
			
		case 15:
			cspeak("I'm afraid I don't get your idea.");
			break;
			
		case 16:
			cspeak("Sorry. I can't follow what you're saying to me.");
			break;
			
		case 17:
			cspeak("Unfortunately, I can't clearly make sense of what you're telling me.");
			break;
			
		case 18:
			cspeak("I'm a bit confused. Do you mind explaining it again?");
			break;
			
		case 19:
			cspeak("I'm afraid I'm unclear about what you mean.");
			break;
			
		case 20:
			cspeak("Would you mind clarifying what you said? I'm afraid I don't follow.");
			break;
			
		case 22:
			cspeak("I simply don't catch what you're saying. Sorry.");
			break;
			
		case 23:
			cspeak("It's all Greek to me, I'm afraid.");
			break;

		case 24:
			cspeak("I'm sorry. I can't make head or tail of what you're saying.");
			break;
			
		case 25:
			cspeak("I'm not quite sure I follow you.");
			break;
		}
	}
}

// HANDLE KEYBOARD-ONLY INPUT
// This callback is invoked when the user types a key into the input box. It
// checks to see if the key was "enter," and if it is submits the command.

function handle_keypress(event)
{
	// 13 = \n (newline)
	if (event.which == 13 || event.keycode == 13)
	{
		handle_command();
	}
}


function speech (event) {
	// 13 = \n (newline)
	if (event.which != 13 || event.keycode != 13)
	{
		handle_command();
	}
}
    
   
