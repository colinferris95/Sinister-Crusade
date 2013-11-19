
var hidden = true;

function help(){
	document.getElementById('outputDiv').innerHTML = "Hi! This is the help page!"
	
}

function wipe(){
	document.getElementById('outputDiv').innerHTML = "";
	
}


//hides the input for character name creation and confirm and start buttons when html loads(body onload)
function hide(){
	if(hidden === true){
		var input = document.getElementById("input");//User input
		input.style.display = "none";
		document.getElementById("confirm").style.display = "none";//Hidden user confirm button
		document.getElementById("begin").style.display = "none";//Hidden game start button
		document.getElementById("action").style.display = "none";//hidden action button
		document.getElementById("walk").style.display = "none";//hidden wak button
		document.getElementById("wrong").style.display = "none";//hides no turning back
		document.getElementById("note").style.display = "none";//hides the note button
	}
}

//revales input and confirm button
function gameStart(){
	input.style.display = "";//releaves player input
	document.getElementById("confirm").style.display = "";//reveals confirm button
	
	

}


//Shows player inputed name and reveals start button
function confirm(){
	
	output = document.getElementById('outputDiv');
	output.innerHTML = "Your name is " + input.value;
	document.getElementById("begin").style.display = "";
}

//hides the create character button, the output , the input bar and the confirm button, spawns player
function begin(){
	input.style.display = "none";
	document.getElementById("character").style.display = "none";
	document.getElementById("confirm").style.display = "none";
	document.getElementById("begin").style.display = "none";
	output.innerHTML = "";
	output.innerHTML = input.value + " enters a long hallway";
	document.getElementById("action").style.display = "";
	document.getElementById("picture").src="LongHallway.gif";


}

//gives player an option
function action(){
	output.innerHTML = "Would you like to walk down the hallway?";
	document.getElementById("walk").style.display = "";
	document.getElementById("wrong").style.display = "";

}

//allows player to choose
function walk(){
	output.innerHTML = input.value + " walks down the hallway and sees a note. Pick up the note?";
	document.getElementById("walk").style.display = "none";
	document.getElementById("action").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	document.getElementById("note").style.display = "";
}

function wrong(){
	output.innerHTML = "wrong, there is no turning back!!!"
}

function note(){
	output.innerHTML = "The path to victory starts with a 2."
}


function accesPlayer(){
	var name = player.name;
	document.getElementById('outputDiv').innerHTML = name;
	
}







