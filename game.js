
var hidden = true;





//hides the input for character name creation
function hide(){
	if(hidden === true){
		var input = document.getElementById("input");
		input.style.display = "none";
	}
}

//revales input
function gameStart(){
	input.style.display = "";
	
	

}


 

function confirm(){
	
	
	document.getElementById('outputDiv').innerHTML = "Your name is " + input.value;
}


