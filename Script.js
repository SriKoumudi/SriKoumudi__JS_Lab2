function Quiz(questions) {
    this.questions = questions;
    this.quesnumber = 0;
    this.score = 0;

}
Quiz.prototype.isEnded = function () {
    return this.quesnumber === this.questions.length
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.quesnumber];
}
Quiz.prototype.checkAnswer = function (option) {
    if (this.getQuestionIndex().isCorrect(option)) {
        this.score++;
    }
    this.quesnumber++;
}
Question.prototype.isCorrect = function (option) {
    return this.answer === option
}
function Question(title, options, answer) {
    this.title = title
    this.options = options
    this.answer = answer
}
function showScores() {
    let res = "<h1>Result</h1>"
    res += "<h2 id='score'>Your Score is " + quiz.score + ". and mark percentage is " + (quiz.score / questions.length * 100) + "%  </h2>"
    let quizelem = document.getElementById("quiz");
    quizelem.innerHTML = res;
}
function handleOptionsClicked(btnNumber, option) {
    let btn = document.getElementById(btnNumber);
    btn.onclick = function () {
        quiz.checkAnswer(option)
        loadQuestions()
    }
}
function ShowProgress() {
    let current = quiz.quesnumber + 1;
    let element = document.getElementById("progress");
    element.innerHTML = `Question ${current} of ${quiz.questions.length}`
}

function loadQuestions() {
    if (quiz.isEnded()) {
        showScores()
    }
    else {
        let questionTitle = document.getElementById("question")
        questionTitle.innerHTML = quiz.getQuestionIndex().title
        let options = quiz.getQuestionIndex().options;
        for (let i = 0; i < options.length; i++) {
            let optbtn = document.getElementById("choice" + i)
            optbtn.innerHTML = options[i];
            handleOptionsClicked("btn" + i, options[i]);
        }
        ShowProgress();
    }
}

let questions = [
    new Question("Javascript Supports", ["Functions", "HTML", "CSS", "XHTML"], "Functions"),
    new Question("Is Javascript casesensitive", ["yes", "No", "not sure", "none"], "yes"),
    new Question("is Javascript programming language", ["yes", "No"], "yes"),
    new Question("which is used for styling", ["JS", "CSS", "HTML", "C"], "CSS"),
    new Question("which is not the JS framework", ["Nodejs", "JQuery", "Angular", "Django"], "Django")

]

let quiz = new Quiz(questions)
loadQuestions()





