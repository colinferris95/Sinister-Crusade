
var hidden = true;


//hides the input for character name creation and confirm and start buttons when html loads(body onload)
function hide(){
	if(hidden === true){
		var input = document.getElementById("input");//User input
		input.style.display = "none";
		document.getElementById("confirm").style.display = "none";//Hidden user confirm button
		document.getElementById("begin").style.display = "none";//Hidden game start button
		document.getElementById("action").style.display = "none";//hidden action button
		document.getElementById("walk").style.display = "none";//hidden wak button
		document.getElementById("wrong").style.display = "none";
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
	
}

//gives player an option
function action(){
	output.innerHTML = "Would you like to walk down the hallway?";
	document.getElementById("walk").style.display = "";
	document.getElementById("wrong").style.display = "";

}

//allows player to choose
function walk(){
	output.innerHTML = input.value + " walks down the hallway";
	document.getElementById("walk").style.display = "none";
	document.getElementById("action").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	
}

function wrong(){
	output.innerHTML = "wrong, there is no turning back!!!"
}












