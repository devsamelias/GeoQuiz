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
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
        ]
    },
    {
        question: "djidjidjidji?", 
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
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
        ]
    },
    {
        question: "djidjidjidji?", 
        answers: [
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
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
    nextButton.innerHTMK = "Next";
    showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex]
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

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();