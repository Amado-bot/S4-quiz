var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D")
var timerEl = document.getElementById("timer")
var mainEl = document.getElementById("main")
var wrongEl = document.getElementById("wrong-answer")
var currentQuestion = 0;
var lastQuestion = 3;
// var score = finalTime;
var message = 'GAME OVER ';
var timeLeft = 120;
//reveals question and starts countdown
function startQuiz() {
  start.style.display = "none";
  displayQuestion();
  quiz.style.display = "block";
  console.log(countdown)
  countdown();
}
//the timer itsels and game over message when timer is done
function countdown() {
  runtime();
}

var timeInterval = setInterval(function () {
  console.log("timerWorking")
  if (timeLeft > 1) {
    timerEl.textContent = timeLeft + ' seconds remaining';
    timeLeft--;
  } else if (timeLeft === 1) {
    timerEl.textContent = timeLeft + ' second remaining';
    timeLeft--;
  } else {
    timerEl.textContent = '';
    clearInterval(timeInterval);
    displayMessage();
    //end quiz function
  }
}, 1000);
//displays the running time into the timerEl
function runtime() {
  timerEl.textContent = (timeLeft);
  console.log("timer is verking")
}
//this is the game over message refrenced in the countdown
function displayMessage() {
  mainEl.textContent = message;
}
//Hide or timeout wrong/right func when i move on to the next question: TODO//
// setTimeout(function () {
//   $('#main').fadeOut('fast');
// }, 3000);
//displays correct according to answer
function displayCorrect() {
  mainEl.textContent = ("correct")
}
//diplays wrong according to answer
function displayWrong() {
  mainEl.textContent = ("wrong")
}
// content of revealed question in sstartquiz func
function displayQuestion() {
  var q = questionsArr[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
// create our questionsArr
var questionsArr = [
  {
    question: "commonly used data types do NOT include?",
    choiceA: "string",
    choiceB: "boolean",
    choiceC: "numbers",
    choiceD: "pythagoren theorem",
    correct: "D"
  },
  {
    question: "string values must be enclosed in which of the following?",
    choiceA: "parenthesis",
    choiceB: "quotes",
    choiceC: "bread",
    choiceD: "curly braces",
    correct: "A"
  },
  {
    question: "arrays in javascript can be used to store _____ ?",
    choiceA: "numbers",
    choiceB: "booleans",
    choiceC: "other arrays",
    choiceD: "all of the above",
    correct: "D"
  },
  {
    question: "which of the following is not a intergrated js object?",
    choiceA: "cake",
    choiceB: "function",
    choiceC: "boolean",
    choiceD: "symbol",
    correct: "A"
  }
];
// checkAnwer
function checkAnswer(answer) {
  console.log(answer)
  console.log(questionsArr[currentQuestion].correct)
  if (answer == questionsArr[currentQuestion].correct) {
    // answer is correct
    displayCorrect();
    console.log("correct")
  } else {
    timeLeft = timeLeft - 10;
    displayWrong();
    console.log("wrong");
  }
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    displayQuestion();
  }
  if (currentQuestion == lastQuestion){
    lastClicked();
  }
}
start.addEventListener("click", startQuiz);
//create local storage for intials and score//:todo

//when final answer is chosen, stop timer //
function lastClicked() {    
      // end the quiz and show the score
      console.log("last clik func active");
        clearInterval(timeInterval);
        quiz.style.display = "none";

        //todo//
      }
}

//if timer reaches zero game over

// if (!tasks) {
//   tasks = {
//     toDo: [],
//     inProgress: [],
//     inReview: [],
//     done: []
//   };
// }

// // loop over object properties
// $.each(tasks, function(list, arr) {
//   console.log(list, arr);
//   // then loop over sub-array
//   arr.forEach(function(task) {
//     createTask(task.text, task.date, list);
//   });
// });
// };

// var saveTasks = function() {
// localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// // modal was triggered
// $("#task-form-modal").on("show.bs.modal", function() {
// // clear values
// $("#modalTaskDescription, #modalDueDate").val("");
// });

// // modal is fully visible
// $("#task-form-modal").on("shown.bs.modal", function() {
// // highlight textarea
// $("#modalTaskDescription").trigger("focus");
// });

// // save button in modal was clicked
// $("#task-form-modal .btn-primary").click(function() {
// // get form values
// var taskText = $("#modalTaskDescription").val();
// var taskDate = $("#modalDueDate").val();

// if (taskText && taskDate) {
//   createTask(taskText, taskDate, "toDo");

//   // close modal
//   $("#task-form-modal").modal("hide");

//   // save in tasks array
//   tasks.toDo.push({
//     text: taskText,
//     date: taskDate
//   });

//   saveTasks();
// }
// });