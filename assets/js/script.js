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
function countdown() {
  runtime();
  console.log("working")
  // start.style.display = "none"
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
}

function runtime() {
  timerEl.textContent = (timeLeft);
  console.log("timer is verking")
}

function displayMessage() {
  mainEl.textContent = message;
}

function displayWrong() {
  mainEl.textContent = ("wrong")

}

setTimeout(function(){
  displayCorrect(); 
}, 2000);//wait 2 seconds

function displayCorrect() {
  mainEl.textContent = ("correct")
}


function startQuiz() {
  start.style.display = "none";
  displayQuestion();
  quiz.style.display = "block";
  console.log(countdown)
  countdown();
}

// render a question
function displayQuestion() {
  var q = questionsArr[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// checkAnwer
function checkAnswer(answer) {
  console.log(answer)
  console.log(questionsArr[currentQuestion].correct)
  if (answer == questionsArr[currentQuestion].correct) {
    // answer is correct
    console.log("correct")
  } else {
    timeLeft = timeLeft - 10;
    displayWrong();
    console.log("wrong")

  }
  count = 0;
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    displayQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(timerEl);
  }
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

//create local storage for intials and score
var saveTime = function(){
  clearInterval(timeLeft);
  localStorage.setItem("timer", JSON.stringify(timeLeft));
}

//when final answer is chosen, stop timer //
//
function quizOver() {
  console.log("start is good")
  var theEnd = questionsArr[lastQuestion];
  if (currentQuestion == theEnd ) {
    //add and choice is made
    saveTime();
  }
}

start.addEventListener("click", startQuiz);
quizOver();
//if timer reaches zero game over
}