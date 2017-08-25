$(document).ready(function(){

$('#start').on('click',function(){
	trivia.start();
	//("#start").remove();
	//$("#card1").append("weee");


});


var questions = [{
	question: "Which of the follower was not one of the original sports in the modern Olympic Games?",
	answers:["rowing ","pentathlon ","badmitten"],
	correctAnswer:"badmitten"
}, {
	question: "What do the five Olympic rings represent?",
	answers:["The five major regions of the world ","The five original athletes ","The five languages spoken during the game "],
	correctAnswer:"The five major regions of the world"
}, {
	question: "Which of the following contients has not hosted an Olympic game?",
	answers:["Africa ","Asia ","Europe "],
	correctAnswer:"Africa"
}, {
	question: "How many contries participated in the 2004 Olympic Summer Games?",
	answers:["200 ","201 ","202"],
	correctAnswer:"202"
}, {
	question: "What televsion station first covered the olympic games?",
	answers:["Fox ","CBS ","NBC"],
	correctAnswer:"CBS"
}];

var trivia = {
	correct: 0,
	incorrect: 0,
	counter: 10,
	countdown: function(){
		trivia.counter--;
		$("#counter").html(trivia.counter);
		if(game.counter <= 0){
			console.log("time is up!");
			trivia.done();
		}
	},


	start: function(){
	timer = setInterval(trivia.countdown,1000);
	$('#subWrapper').prepend('<h3> Time Remaining: <span id="counter">90</span> Seconds</3>');
	$('#start').remove();
		for(var i = 0; i < questions.length; i++){
		$('#subWrapper').append("<h3>" + questions[i].question + "</h3>");
			for(var h = 0; h < questions[i].answers.length; h++){
				$("#subWrapper").append("<input type = 'radio' name ='question-'" + i + 
				"'value = '" + questions[i].answers[h] + "'>" + questions[i].answers[h]);
				}
			}

		},
	done: function(){
		$.each($("input[name = 'question-0']: checked"), function(){
			if($(this).val() == question[0].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-1']: checked"), function(){
			if($(this).val() == question[1].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-2']: checked"), function(){
			if($(this).val() == question[2].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-3']: checked"), function(){
			if($(this).val() == question[3].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-4']: checked"), function(){
			if($(this).val() == question[4].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});

		this.results();
		},

		reults: function(){
			clearInterval(timer);
			$("#subWrapper h3").remove();

			$("#subWrapper").html("<h3>ALL DONE!</h3>");
			$("#subWrapper").append("<h3>Correct Answer: " + this.correct + "</h3>");
			$("#subWrapper").append("<h3>Correct Answer: " + this.incorect + "</h3>");
			$("#subWrapper").append("<h3>Unanswered: " + (questions.length - (this.incorect+this.correct)) + "</h3>");


		}

	}

});