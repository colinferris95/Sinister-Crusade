

var hidden = true;


//help pages
function help(){
	document.getElementById('outputDiv').innerHTML = "Hi! This is the help page. <br> If you cannot beat this world or level try restarting. You may need an item you did not get along the way."
	
}

//clears output
function wipe(){
	document.getElementById('outputDiv').innerHTML = "";
	
}

//inventory
  bag = "empty";
//location
  area = "none";


  //gets player's items and location
function getStatus(){
	document.getElementById('outputDiv').innerHTML = "Your bag: " + bag + "<br>" + "Your area: " + area;
	
}


//hides the input for character name creation and confirm and start buttons when html loads(body onload)
function hide(){
	if(hidden === true){
		picture.src = "images/Sinister-Crusade-Start.gif";
		pic1 = document.getElementById('pic1');
		pic1.style.display = "none";
		pic2 = document.getElementById('pic2');
		pic2.style.display = "none";
		pic3 = document.getElementById('pic3');
		pic3.style.display = "none";
		pic4 = document.getElementById('pic4');
		pic4.style.display = "none";
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
		boss1 = document.getElementById("boss1");
		boss1.style.display = "none";
		fight1 = document.getElementById("fight1");
		fight1.style.display = "none";
		playerThumb = document.getElementById("playerThumb");
		playerThumb.style.display = "none";
		inv1 = document.getElementById('inv1');
		inv1.style.display = "none";
		dodge = document.getElementById('dodge');
		dodge.style.display = "none";
		sheild = document.getElementById('sheild');
		sheild.style.display = "none";
		fight2 = document.getElementById('fight2');
		fight2.style.display="none";
		
		
		reset = document.getElementById("reset");
		reset.style.display = "none";
		
	}
}

//reset button
function hide2(){
	if(hidden === true){
		picture.src = "images/Sinister-Crusade-Start.gif";
		pic1 = document.getElementById('pic1');
		pic1.style.display = "none";
		pic2 = document.getElementById('pic2');
		pic2.style.display = "none";
		pic3 = document.getElementById('pic3');
		pic3.style.display = "none";
		pic4 = document.getElementById('pic4');
		pic4.style.display = "none";
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
		boos1 = document.getElementById("boss1");
		boss1.style.display = "none";
		fight1 = document.getElementById("fight1");
		fight1.style.display = "none";
		playerThumb = document.getElementById("playerThumb");
		playerThumb.style.display = "none";
		inv1 = document.getElementById('inv1');
		inv1.style.display = "none";
		dodge = document.getElementById('dodge');
		dodge.style.display = "none";
		sheild = document.getElementById('sheild');
		sheild.style.display = "none";
		fight2 = document.getElementById('fight2');
		fight2.style.display="none";
		
		
		reset = document.getElementById("reset");
		reset.style.display = "none";
		
		input.style.display = "";//releaves player input
		confirm.style.display = "";//reveals confirm button
	
		document.getElementById('outputDiv').innerHTML = " ";
	}
}
//revales input and confirm button
function gameStart(){
	input.style.display = "";//relieves player input
	confirm.style.display = "";//reveals confirm button
	pic1.style.display = "";
	pic2.style.display = "";
	pic3.style.display = "";
	pic4.style.display = "";
	

}

//sets the pictures for player
function thumb1(){
	document.getElementById('playerThumb').src = "images/bluewarrior.gif";
}

function thumb2(){
	document.getElementById('playerThumb').src = "images/greenwarrior.gif";
}

function thumb3(){
	document.getElementById('playerThumb').src = "images/stonewarrior.gif";
}

function thumb4(){
	document.getElementById('playerThumb').src = "images/warrior.gif";
}

//Shows player inputed name and reveals start button
function final(){
	
	output = document.getElementById('outputDiv');
	output.innerHTML = "Your name is " + input.value;
	begin.style.display = "";
	document.getElementById('playerHeader').innerHTML = input.value; //makes the header player name
	
	playerThumb.style.display = "";
}

//hides the create character button, the output , the input bar and the confirm button, spawns player
function start(){
	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
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
	alert("The door chosen will decide your fate, BETWEEN life and death.");
	note.style.display = "none";
	exit.style.display = "";
}

//leads to the door
function door(){
	picture.src = "images/castle-door.gif";
	output.innerHTML = input.value + ", This is a door that leads to 3 rooms. Which room do you pick?"
	area = "door of deceit"
	note.style.display = "none";
	exit.style.display = "none";
	room1.style.display = "";
	room2.style.display = "";
	room3.style.display = "";
}

//first room
function roomOne(){
<<<<<<< HEAD

=======
>>>>>>> 69eae6d683f9b6e88c0b5eec7cc99f9a0081af39
	output.innerHTML = "The room is covered in ice. " + input.value + " slips and dies.";
	picture.src="images/IceDungeon.gif";
	room1.style.display = "none";
	room2.style.display = "none";
	room3.style.display = "none";
	reset.style.display = "";
	
}

//second room
function roomTwo(){
	
	output.innerHTML = "Answer the riddle to obtain a weapon to help you in your crusade."
	picture.src="images/RoomWithRiddle1.gif";
	room1.style.display = "none";
	room2.style.display = "none";
	room3.style.display = "none";
	riddle1.style.display = "";
	
}

//riddle that obtains the ice axe
function riddleOne(){
	riddle1 = prompt("Power enough to smash ships and crush roofs. Yet it still must fear the sun. What is it?", "Answer here");
	if (riddle1 === "ice" || riddle1 === "Ice" || riddle1 === "ICE"){
		output.innerHTML = "You have gained the ice axe! proceed to the boss";
		
		bag = "ice axe";
		boss1.style.display = "";
		document.getElementById('inv1').src = "images/IceAxe.gif"
		inv1.style.display = "";
	}
	else{
		output.innerHTML = "wrong answer!";
	}
}

//third room
function roomThree(){
	room1.style.display = "none";
	room2.style.display = "none";
	room3.style.display = "none";
	output.innerHTML = "You have reached a long stairwell, which leads you to the boss!";
	boss1.style.display = "";

}

//final boss
function bossOne(){
	
	picture.src="images/FirstBoss.jpg"
	output.innerHTML = input.value + " this is the boss room! He tries to attack!";
	document.getElementById("riddle1").style.display = "none";
	fight1.style.display = "";
	boss1.style.display = "none";
	sheild.style.display = "";
	dodge.style.display = "";
	
	
}

function fightOne(){
	fight1.style.display = "none";
	output.innerHTML = input.value +  "hits the boss, dealing damage. The boss tries to fight back!";
	
}

function sheildAction(){
	output.innerHTML = input.value + " blocks the boss's attack";
	sheild.style.display = "none";
	fight2.style.display = "";
}

function dodgeAction(){
	output.innerHTML = input.value + " tries to dodge the attack, but fails GG."
	reset.style.display = "";
	sheild.style.display = "none";
	dodge.style.display = "none";
	fight1.style.display = "none";
}




function finalStrike(){
	if (bag === "ice axe" ){
		output.innerHTML = input.value + " has slain the boss thanks to the ice axe!"
		sheild.style.display = "none";
		dodge.style.display = "none";
		fight2.style.display = "none";
	}
	else{
		output.innerHTML = input.value + " is destroyed by the boss. Try again!"
		reset.style.display = "";
		fight1.style.display = "none";
	}
}
<<<<<<< HEAD





=======
function worldTwo(){
	output.innerHTML = "You have now entered world two";
	
}

>>>>>>> 69eae6d683f9b6e88c0b5eec7cc99f9a0081af39








