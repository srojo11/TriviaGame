



/*var triviaGame = {

  questionsChoice: {

	q1:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},

	q2:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},


	q3:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},


	q4:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},

	q5:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},

	q6:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},


	q7:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	},


	q8:{
		
		opt1: "a", 
		opt2: "b",
		opt3: "c",
		opt4: "d"

	}

  }	


}*/

/*var questionsArray = [

questions: [
"What is...",
"What is...",
"What is...",
"What is...",
"What is...",
"What is...",
"What is...",
"What is...",
]


choices: [
"What",
"What",
"What",
"What",
"What",
"What",
"What",
"What",

]*/






 $(document).ready(function() {

var correct = 0;
var unanswered = 0;
var incorrect = 0;
var timer = 10;
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

   function stop() {

// submit function--suppose to check is radio button is "1" or "0" and add to respective counter.

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
 	


// submit function
$('#submit').click(function(){
console.log('submitclicked')


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

	});




});


/*if ($('input[name=optradio3]:checked').val() == 1){
	correct++;
}

else if ($('input[name=optradio3]:checked').val() == 2 || $('input[name=optradio2]:checked').val() == 3 || $('input[name=optradio2]:checked').val() == 4) {
	incorrect++;

}

 else {
	unanswered++;

 }*/




