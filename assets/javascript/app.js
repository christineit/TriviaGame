// tracks unanswered questions
var unansweredCount = 0;

// tracks the correct answers for end of game
var correctCount = 0;

// tracks incorrect answers for end of the game
var incorrectCount = 0;

var store = [];

$(document).ready(function() {
  $("#start").on("click", function() {
    var number = 20;
    var intervalId;
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the timer under the title.
      $("#timer").html("<h5> Time Left: " + number + "<h5>");

      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();

        alert("Time's Up!");
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }
    run();
    for (var i = 0; i < triviaQuestions.length; i++) {
      $("#wrapper").append("<h4>" + triviaQuestions[i].question + "</h4>");
      for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
        $("#wrapper").append(
          "<input type = 'radio' name ='question-" +
            i +
            "' value='" +
            triviaQuestions[i].choices[j] +
            "'>" +
            triviaQuestions[i].choices[j]
        );

        $("#start").remove();
      }
    }
  });

  var triviaQuestions = [
    {
      question: "What sweet treat was invented in Chicago?",
      choices: ["Caramel Popcorn", "Twinkies", "Ice Cream"],
      correctAnswer: "Twinkies"
    },

    {
      question:
        "How many states are visible from the top of the Sears(Willis) Tower?",
      choices: ["2", "3", "4"],
      correctAnswer: "4"
    },

    {
      question: "What is the 'L' short for?",
      choices: ["Loop", "Elevated", "Lit"],
      correctAnswer: "Loop"
    },

    {
      question: "How many public beaches are in Chicago?",
      choices: ["28", "24", "21"],
      correctAnswer: "24"
    },

    {
      question: "What would a Chicago style hot-dog NEVER have on it?",
      choices: ["Mustard", "Sweet Pickle Relish", "Ketchup"],
      correctAnswer: "Ketchup"
    }
  ];

  // var game = {
  //   correct: 0,
  //   incorrect: 0,
  //   counter: 30,
  //   countdown: function(){
  //     game.counter --;
  //     $("#counter").html(game.counter);
  //     if(game.counter===0){
  //       console.log("Time's up!");
  //       game.done();
  //     }
  //   }
  // }
  // start: function(){
  //   $("#start").remove();
  // }

  //Create a resultsPage function to get results;
  //   if (number === 0) $("#wrapper").hide();
  //   $("#timer").hide();

  //Create a function to determine trivia results:
  //.children("input:checked");
  //with if else statement to track correctAnswers ++;
  //incorrectAnswers ++;
});
clearInterval(number);
{
  $("#wrapper").remove;
  $("wrapper").html("<h1> Done! </h1>");
  $("wrapper").append("<h2> Correct Answer: " + this.correctAnswer + "</h2>");
  $("wrapper").append(
    "<h2> Incorrect Answer: " + this.incorrectAnswer + "</h2>"
  );
  $("wrapper").append(
    "<h2> Unanswered: " +
      triviaQuestions.length -
      (this.incorrectAnswer + this.correctAnswer) +
      "</h2>"
  );
}
//create a done button to append to $("wrapper")
//this will take you to the resultsPage
