var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name ? ");
console.log("hello " + userName + " ,How well do you know me ? ");

function quiz(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log("Right!!!");
    score = score + 1;
  }
  else {
    console.log("Wrong!!!");
  }
  console.log("Your Score is ", score);
  console.log("     ");
}

var questions = [
  {
    ques: "What's my current city ? ",
    ans: "Pune",
  },
  {
    ques: "Which college do I go to ?",
    ans: "PVGCOET",
  },
  {
    ques: "What's my hobby ?",
    ans: "Football",
  },
  {
    ques: "What's my department in engineering ?",
    ans: "EnTC",
  },
  {
    ques: "What's my age?",
    ans: "21",
  },
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestions = questions[i];
  quiz(currentQuestions.ques, currentQuestions.ans);
}

console.log("You Scored - ", score);

var highScore = [
  {
    name: "abc",
    score: 3,
  },
  {
    name: "xyz",
    score: 4,
  }]

console.log("Current highscorer are ");
for (var i = 0; i < highScore.length; i++) {
  var currentHighscore = highScore[i];
  console.log(currentHighscore.name + ":-" + currentHighscore.score);
}

console.log("Also let me know if you break the highscore.");
