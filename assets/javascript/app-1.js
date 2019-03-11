$(document).ready(function() {
  //   console.log("ready!");

  // tracks unanswered questions
  var unansweredCount = 0;

  // tracks the correct answers for end of game
  var correctCount = 0;

  // tracks incorrect answers for end of the game
  var incorrectCount = 0;

  var store = [];

  //use clockRunning variable to add to HTML $("#timer")
  var clockRunning = false;

  //triviaQuestions object with choices in an array
  //create radio buttons assoc. to each button to add to HTML $(#quiz)
  //var choices = $("#answers");
  // choices.append("<input type='radio' name='radio-group'></input>");

  //use .val to assign correctAnswer to radio button?
  // function buildQuiz() {
  //   // we'll need a place to store the HTML output
  //   const output = [];

  //   // for each question...
  //   myQuestions.forEach((currentQuestion, questionNumber) => {
  //     // we'll want to store the list of answer choices
  //     const answers = [];

  //     // and for each available answer...

  //   }
  // }

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

  // // create timer function
  // function runTimer() {
  //   if (!clockRunning) {
  //     intervalId = setInterval(count, 1500);
  //     clockRunning = true;
  //   };

  //   //reset timer on resultsScreen
  // function resultsScreen(){
  //   clearInterval(intervalId);
  //   clockRunning = false;
  // };

  //create a questionsScreen function
  function questionScreen(placeHolder) {
    for (var i = 0; i < triviaQuestions.length; i++) {
      var container = $("<div>");
      var questionTitle = $("<p>");
      container.append(questionTitle);
      // var questionChoice = $("<p>");

      for (var choice of triviaQuestions[i].choices) {
        // ...add an HTML radio button
        container.append(
          `<label>
              <input type="radio" value="${choice}">
              ${choice}
            </label>`
        );
      }

      questionTitle.text(triviaQuestions[i].question);
      console.log(triviaQuestions[i]);
      $("#quiz").append(container);
    }

    var timer = $("<div>");
  }

  //create startScreen function
  $("#start").on("click", function() {
    // console.log("we r clicked!!");
    $("#start").hide();
    questionScreen();
  });
});

// ```.children("input:checked");```
// jquery can iterate over all child elements of an html element
