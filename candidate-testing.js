const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = "Who was the first American woman in space? ";
let correctAnswer;
correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = "";
//newarray = [8, 'Orbit', 'Trajectory', 45];
//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers;
candidateAnswers = [];


let Var1 = "";
let Var2 = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
let candidateName = input.question("Enter your name\n");
//console.log (candidateName);
return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');
  for (let i = 0; i < 5; i++){
    candidateAnswers[i] = input.question(questions[i]);

  }
//  let candidateAnswer = input.question(question);
  

}

function gradeQuiz(candidateAnswers) {
  let correctAnswerCount = 0;
  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < 5; i++){
    console.log ("Question: " + Number(i+1));
    Var1 = correctAnswers[i];
    Var2 = candidateAnswers[i];
  if (Var1.toLowerCase() === Var2.toLowerCase()) {
  console.log("Answer Correct");
  correctAnswerCount++
  console.log(correctAnswerCount);
}
  else {
    console.log ("Answer Incorrect");
  }
  console.log(`Correct answer is "${correctAnswers[i]}" and your answer is "${candidateAnswers[i]}"`);

  }
   //TODO 3.2 use this variable to calculate the candidates score.
   let grade = (correctAnswerCount /questions.length) * 100
  console.log (grade);
  if (grade > 80){
    console.log (`Congratulations! You have passed the test with ${grade}% `);
  } else {
    console.log (`Sorry you have failed the test, your score is ${grade}% `);
  }
  


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
 // console.log ("inside function");
 // console.log (candidateName); 
  console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};