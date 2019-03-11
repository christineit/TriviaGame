1. Start the game by clicking the start button
2. Once start button is clicked the timer and questions pop up dynamically:
   2a.counter ticking down shows up counting down to 15second = 15000;
   2b. Questions show up with radio buttons underneath. Only allowed to select one answer.
   2c. Bottom of screen has a done button.
3. Done button will be clicked to bring the results up dynamically
   3a. Correct answers
   3b. Incorrect answers
   3c. Unanswered will be totaled up on screen
   --if "DONE" button clicked then var unansweredScore=0

4. If timer gets to 0 then screen shows with All Done! elements e with correct answers, incorrect answers, and unanswered totaled up on screen

Timer function:
function timeConverter(t) {
// Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
var minutes = Math.floor(t / 60);
var seconds = t - minutes \* 60;

if (seconds < 10) {
seconds = "0" + seconds;
}

if (minutes === 0) {
minutes = "00";
} else if (minutes < 10) {
minutes = "0" + minutes;
}
\$(timeConverter).html("#display");
return minutes + ":" + seconds;
}

Tom's Suggestion:
var questions = [
{
q: "What is Toy storys release date",
choice1: "1990",
choice2: "1991",
choice3: "1990"
},
{
q: "What is Monsters Inc release date",
choice1: "2010",
choice2: "2000",
choice3: "1990"
},
{
q: "What is jungle book Inc release date",
choice1: "2010",
choice2: "2000",
choice3: "1990"
},
{
q: "What is titanic release date",
choice1: "2010",
choice2: "2000",
choice3: "1990"
}
];

\$("#start").on("click", function() {
console.log("we r clicked!!");
startScreen();
});

function startScreen(placeHolder) {
$("#tom-container").empty();
    for (var i = 0; i < questions.length; i++) {
      var container = $("<div>");

      var questionTitle = $("<h1>");
      var questionChoice = $("<p>");
      questionChoice.text(questions[i].choice1);

      questionTitle.text(questions[i].q);
      container.append(questionTitle, questionChoice);
      $("#tom-container").append(container);
    }

}
///////////////////////////////////////////////
// console.log(triviaQuestions[0].choices[1]);
// console.log(triviaQuestions; to test that the arrays within the triviaQuestions object show up

//click event to start game
// $("#start").on("click", function() {
  //   $("#start").hide();
// displayQuestions();
// startTimer();
// for (var i = 0; i < triviaQuestions.length; i++) {
// store.push(triviaQuestions[i]);
// }
// });

// //timer start
// function startTimer() {
// if (!running) {
// intervalId = setInterval(countDown, 1500);
// running = true;
// }
// }

// // timer countdown

// function countDown() {
// \$("#timer").html("<h2>Time remaining: " + timer + "<h2>");
// timer--;

// //stop timer at 0
// if (timer === 0) {
// unansweredCount++;
// stop();
// "#answers".html(
// "<p> Time is up! The correct answer is: " +
// pick.choices[pick.correctAnswer] +
// "</p>"
// );
// }
// }

// //timer stop
// function stop() {
// running = false;
// clearInterval(intervalId);
// }

//display question and loop through choices
// function displayQuestions() {
// //generate random index in array
// // index = Math.floor(Math.random() \* triviaQuestions.length);
// // pick = options[index];

// // if (pick.shown) {
// // } else {
// $("#quiz").html("<p>" + triviaQuestions[0] + "</p>");
  //   for (var i = 0; i < triviaQuestions.length; i++);
  //   var userChoice = $("<div>");
// userChoice.addClass("answerChoice");
// userChoice.html(pick.triviaQuestions[i]);
// }
// displayQuestions();
// });
// //check answer
// userChoice.attr("data-guess-value", i);
// \$("#answers").append(userChoice);
// }

// //create click event to select answer and correct result
// $(".answerChoice").on("click", function() {
//     userChoice = parseInt($(this).attr("data-guess-value"));

// if (userChoice === pick.correctAnswer) {
// stop();
// correctCount++;
// userChoice = "";
// \$("#answers").html(
// "<p> Wrong! The answer is: " + pick.choices[pick.correctAnswer] + "</p>"
// );
// }
// });

// // Go to score screen if all questions answered
// if (incorrectCount + correctCount + unansweredCount === questionCounter) {
// $("#quiz").empty();
//     $("#quiz").html("<h2> Game Over! Results: </h3>");
// $("#quiz").append("<h4> Correct: " + correctCount + "</h4>");
//     $("#quiz").append("<h4> Incorrect: " + incorrectCount + "</h4>");
// $("#quiz").append("<h4> Unanswered: " + unansweredCount + "</h4>");
//     $("#reset").show();
// correctCount = 0;
// incorrectCount = 0;
// unansweredCount = 0;
// } else {
// startTimer();
// displayQuestion();
// }
// }, 1500);

// $("#reset").on("click", function() {
//   $("#reset").hide();
// $("#answers").empty();
//   $("quiz").empty();
// for (var i = 0; i < store.length; i++) {
// triviaQuestions.push(store[i]);
// }
// startTimer();
// displayQuestion();
// });

/////////////////////////////////////////////////////////////////////
// function countDown(seconds, elem) {
// var seconds = \$("#timer");
// seconds.html(
// "All Done!" +
// "Correct Answers: " +
// correctAnswer +
// "Incorrect Answers: " +
// incorrectAnswers
// );
// seconds--;
// var timer = setTimeout()
//
