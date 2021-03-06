$(document).ready(function(){

$('#start').on('click',function(){
	trivia.start();
	//("#start").remove();
	//$("#card1").append("weee");
})

$(document).on('click','#end',function(){
	trivia.done();
})

var questions = [{
	question: "Which of the follower was not one of the original sports in the modern Olympic Games?",
	answers:["rowing ","pentathlon ","badmitten"],
	correctAnswer:"badminton"
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
		if(trivia.counter <= 0){
			console.log("time is up");
			trivia.done();
		}
	},


	start: function(){
	timer = setInterval(trivia.countdown,1000);
	$('#wrapper1').prepend('<h3> Time Remaining: <span id="counter">10</span> Seconds</3>');
	$('#start').remove();
		
		for(var i = 0; i < questions.length; i++){
		$('#wrapper1').append("<h3>" + questions[i].question + "</h3>");
			for(var h = 0; h < questions[i].answers.length; h++){
				$("#wrapper1").append("<input type = 'radio' name ='question-" + i +
				"'value = '" + questions[i].answers[h] + "'>" + questions[i].answers[h]);
				}
			}
			$('#wrapper1').append('<br><button id ="end">DONE</button>')
		},

	done: function(){
		clearInterval(timer);

		$.each($("input[name = 'question-0']:checked"), function(){
			if($(this).val() == questions[0].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-1']:checked"), function(){
			if($(this).val() == questions[1].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-2']:checked"), function(){
			if($(this).val() == questions[2].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-3']:checked"), function(){
			if($(this).val() == questions[3].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		$.each($("input[name = 'question-4']:checked"), function(){
			if($(this).val() == questions[4].correctAnswer){
				trivia.correct++;
			} else {
				trivia.incorrect++;
			}
		});
		

		this.results();
		},

		results: function(){
			$("#wrapper1 h3").remove();

			$("#wrapper1").html("<h2>ALL DONE!</h2>");
			$("#wrapper1").append("<h3>Correct Answer: " + this.correct + "</h3>");
			$("#wrapper1").append("<h3>Correct Answer: " + this.incorrect + "</h3>");
			$("#wrapper1").append("<h3>Unanswered: " + (questions.length - (this.incorrect+this.correct)) + "</h3>");


		}

	}

});