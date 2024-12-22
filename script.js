function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  // dark mode start //

let darkMode= localStorage.getItem("darkMode");
 const darkModeToggle = document.querySelector('#dark-mode-toggle');

 const enableDarkMode = () => {
    // 1. add the class darkmode
    document.body.classList.add('darkmode');
    // 2. update darkMode in the localStorage    
    localStorage.setItem('darkMode', 'enabled')
 };

 const disableDarkMode = () => {
    // 1. add the class darkmode
    document.body.classList.remove('darkmode');
    // 2. update darkMode in the localStorage    
    localStorage.setItem('darkMode', 'null')
 };

 if (darkMode === 'enabled') {
    enableDarkMode();
 }

 darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
 });

 // dark mode end //

const questions = [
    {
        question: "Which is the largest animal in the world?", 
        answers: [
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
        ]
    },
    {
        question: "djidjidjidji?", 
        answers: [
            { text: "jfewuowk", correct: false },
            { text: "blufnjfne", correct: false },
            { text: "shafsfsgrk", correct: true },
            { text: "shaweokrk", correct: false },
        ]
    },
    {
        question: "djidjidjidji?", 
        answers: [
            { text: "shark", correct: true },
            { text: "blue whale", correct: false },
            { text: "shark", correct: false },
            { text: "shark", correct: false },
        ]
    },
    {
        question: "djidjidjidji?", 
        answers: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: false },
            { text: "shark", correct: true },
            { text: "shark", correct: false },
        ]
    },
    {
        question: "djidjidjidji?", 
        answers: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: false },
            { text: "shark", correct: false },
            { text: "shark", correct: true },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();   
    }else{
        startQuiz();
    }
});

startQuiz();