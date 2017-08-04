


 $(document).ready(function() {

var correct = 0;
var unanswered = 0;
var incorrect = 0;
var timer = 30;
var countDown;


// start game function
$("#start").on("click", function(){
 	
 	// hide #start and display #question
	$("#start").css("display","none");
 	$("#wrapper").css("display","initial");
 			  
 	// decrease timer by calling decrement function at 1 second
 	countDown = setInterval(
 		decrement, 1000);

	});
 	
// function that decreases timer
function decrement () {
	timer--;

	$("#count-down").html("<h2>" + timer + "</h2>");

	if (timer === 0) {
		
		stop()

	}
}




// submit function
$('#submit').click(function(){

	stop()

});



function stop() {


$("#wrapper").css("display","none");
$("#counter").css("display","initial");


	if ($('input[name=optradio1]:checked').val() == 1){
		correct++;
	}

	else if ($('input[name=optradio1]:checked').val() == 0)// || $('input[name=optradio1]:checked').val() == 0 || $('input[name=optradio1]:checked').val() == 0)
	{
		incorrect++;


	}

 	else {
		unanswered++;

 	}

 	if ($('input[name=optradio2]:checked').val() == 1){
		correct++;
	}

	else if ($('input[name=optradio2]:checked').val() == 0){	
		incorrect++;

	}

 	else {
		unanswered++;

 	}

 	if ($('input[name=optradio3]:checked').val() == 1){
		correct++;
	}

	else if ($('input[name=optradio3]:checked').val() == 0){
		incorrect++;

	}

 	else {
		unanswered++;

 	}
 	if ($('input[name=optradio4]:checked').val() == 1){
		correct++;
	}

	else if ($('input[name=optradio4]:checked').val() == 0){
		incorrect++;

	}

 	else {
		unanswered++;

 	}


 	if ($('input[name=optradio5]:checked').val() == 1){
		correct++;
	}

	else if ($('input[name=optradio5]:checked').val() == 0){
		incorrect++;

	}

 	else {
		unanswered++;

 	}

var html = 
"<p>Correct: " + correct + "</p>" + "<br/>" +
"<p>incorrect: " + incorrect + "</p>" + "<br/>" +
"<p>Unanswered: " + unanswered + "</p>";

document.querySelector("#counter").innerHTML = html;


	
	clearInterval(countDown)

 }
 	

});


/*if ($('input[name=optradio3]:checked').val() == 1){
	correct++;
}

else if ($('input[name=optradio3]:checked').val() == 0 || $('input[name=optradio2]:checked').val() == 0 || $('input[name=optradio2]:checked').val() == 0) {
	incorrect++;

}

 else {
	unanswered++;

 }*/

/*start window that clears when you click start button

timer sets and starts

load questions with radial buttons

buttons connected to answer text

one selection only, reset selection on click of other button



functions start - load game

	Array of questions
	index number tied to each question

function check answer


	clear and show all done with counter for correct, incorrect  and unanswered answers.

3 var html's for each screen*/


