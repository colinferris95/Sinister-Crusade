

var hidden = true;



function help(){
	document.getElementById('outputDiv').innerHTML = "Hi! This is the help page. <br> If you cannot beat this world or level try restarting. You may need an item you did not get along the way."
	
}

function wipe(){
	document.getElementById('outputDiv').innerHTML = "";
	
}

  bag = "empty";
  area = "none";



function getStatus(){
	document.getElementById('outputDiv').innerHTML = "Your bag: " + bag + "<br>" + "Your area: " + area;
	
}


//hides the input for character name creation and confirm and start buttons when html loads(body onload)
function hide(){
	if(hidden === true){
		picture.src = "images/Sinister-Crusade-Start.gif";
	    input = document.getElementById("input");//User input
		input.style.display = "none";
		confirm = document.getElementById("confirm");
		confirm.style.display = "none";//Hidden user confirm button
		begin = document.getElementById("begin");
		begin.style.display = "none";//Hidden game start button
		action = document.getElementById("action");
		action.style.display = "none";//hidden action button
		walk = document.getElementById("walk");
		walk.style.display = "none";//hidden wak button
		wrong = document.getElementById("wrong");
		wrong.style.display = "none";//hides no turning back
		note = document.getElementById("note");
		note.style.display = "none";//hides the note button
		exit = document.getElementById("exit");
		exit.style.display = "none";//hides the exit to the staircase
		room1 = document.getElementById("room1");
		room1.style.display = "none";//room1
		room2 = document.getElementById("room2");
		room2.style.display = "none";//room2
		room3 = document.getElementById("room3");
		room3.style.display = "none";//room3
		riddle1 = document.getElementById("riddle1");
		riddle1.style.display = "none";
		
		reset = document.getElementById("reset");
		reset.style.display = "none";
		
	}
}

function hide2(){
	if(hidden === true){
		picture.src = "images/Sinister-Crusade-Start.gif";
	    input = document.getElementById("input");//User input
		input.style.display = "none";
		confirm = document.getElementById("confirm");
		confirm.style.display = "none";//Hidden user confirm button
		begin = document.getElementById("begin");
		begin.style.display = "none";//Hidden game start button
		action = document.getElementById("action");
		action.style.display = "none";//hidden action button
		walk = document.getElementById("walk");
		walk.style.display = "none";//hidden wak button
		wrong = document.getElementById("wrong");
		wrong.style.display = "none";//hides no turning back
		note = document.getElementById("note");
		note.style.display = "none";//hides the note button
		exit = document.getElementById("exit");
		exit.style.display = "none";//hides the exit to the staircase
		room1 = document.getElementById("room1");
		room1.style.display = "none";//room1
		room2 = document.getElementById("room2");
		room2.style.display = "none";//room2
		room3 = document.getElementById("room3");
		room3.style.display = "none";//room3
		riddle1 = document.getElementById("riddle1");
		riddle1.style.display = "none";
		
		
		reset = document.getElementById("reset");
		reset.style.display = "none";
		
		input.style.display = "";//releaves player input
		confirm.style.display = "";//reveals confirm button
	
		document.getElementById('outputDiv').innerHTML = " ";
	}
}
//revales input and confirm button
function gameStart(){
	input.style.display = "";//releaves player input
	confirm.style.display = "";//reveals confirm button
	
	

}


//Shows player inputed name and reveals start button
function final(){
	
	output = document.getElementById('outputDiv');
	output.innerHTML = "Your name is " + input.value;
	begin.style.display = "";
}

//hides the create character button, the output , the input bar and the confirm button, spawns player
function start(){
	input.style.display = "none";
	character.style.display = "none";
	confirm.style.display = "none";
	begin.style.display = "none";
	output.innerHTML = "";
	output.innerHTML = input.value + " enters a long hallway";
	area = "The never-ending hallway";
	action.style.display = "";
	picture = document.getElementById("picture");
	picture.src="images/LongHallway.gif";


}

//gives player an option
function hallway(){
	output.innerHTML = "Would you like to walk down the hallway?";
	walk.style.display = "";
	wrong.style.display = "";

}

function wrong(){
	output.innerHTML = "wrong, there is no turning back!!!"
}

//allows player to choose
function downTheHallway(){
	output.innerHTML = input.value + " walks down the hallway and sees a note. Pick up the note?";
	walk.style.display = "none";
	action.style.display = "none";
	wrong.style.display = "none";
	note.style.display = "";
	exit.style.display = "";
}

//hint for the player
function hint(){
	alert("The path to victory starts with a 2.");
	note.style.display = "none";
	exit.style.display = "";
}

//leads to the door
function door(){
	picture.src = "images/castle-door.gif";
	output.innerHTML = input.value + "This is a door that leads to 3 rooms. Which room do you pick?"
	area = "door of deceit"
	note.style.display = "none";
	exit.style.display = "none";
	room1.style.display = "";
	room2.style.display = "";
	room3.style.display = "";
}

function roomOne(){
	// add picture src here greg plz
	output.innerHTML = "The room is covered in ice. " + input.value + " slips and dies.";
	room1.style.display = "none";
	room2.style.display = "none";
	room3.style.display = "none";
	reset.style.display = "";
	
}

function roomTwo(){
	//ice axe.jpg
	output.innerHTML = "answer the riddle to get something sweet!"
	picture.src="images/RoomWithRiddle1.gif";
	room1.style.display = "none";
	room2.style.display = "none";
	room3.style.display = "none";
	riddle1.style.display = "";
	
}

function riddleOne(){
	riddle1 = prompt("Power enough to smash ships and crush roofs. Yet it still must fear the sun. What is it?", "Answer here");
	if (riddle1 = "ice" || riddle1 = "Ice" || riddle1 = "ICE"){
		output.innerHTML = "You have gained the ice axe!";
	}
}

function roomThree(){
	
}













