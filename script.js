let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const questions = [
    {
        question: "Which country is home to the world's longest coastline?", 
        answers: [
            {text: "Australia", correct: false},
            {text: "Canada", correct: true},
            {text: "Russia", correct: false},
            {text: "Brazil", correct: false},
        ]
    },
    {
        question: "What is the only country that is also a continent?", 
        answers: [
            { text: "Greenland", correct: false },
            { text: "India", correct: false },
            { text: "Australia", correct: true },
            { text: "Japan", correct: false },
        ]
    },
    {
        question: "Which U.S. state is the only one that doesn't observe Daylight Saving Time?", 
        answers: [
            { text: "Hawaii", correct: true },
            { text: "Alaska", correct: false },
            { text: "California", correct: false },
            { text: "New York", correct: false },
        ]
    },
    {
        question: "What is the smallest country in the world by land area?", 
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Nauru", correct: false },
        ]
    },
    {
        question: "Which of these countries does not border the Mediterranean Sea?", 
        answers: [
            { text: "Spain", correct: false },
            { text: "Greece", correct: false },
            { text: "Egypt", correct: false },
            { text: "Hungary", correct: true },
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?", 
        answers: [
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "China", correct: false },
        ]
    },
    {
        question: "In which country can you find the world's largest pyramid by volume?", 
        answers: [
            { text: "Peru", correct: false },
            { text: "Egypt", correct: false },
            { text: "Mexico", correct: true },
            { text: "Sudan", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?", 
        answers: [
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Gobi", correct: false },
            { text: "Kalahari", correct: false },
        ]
    },
    {
        question: "Which island is the only place in the world where you can find wild, non-migratory kangaroos?", 
        answers: [
            { text: "Kangaroo Island", correct: true },
            { text: "Tasmania", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Fiji", correct: false },
        ]
    },
    {
        question: "Which city is located on two continents, Europe and Asia?", 
        answers: [
            { text: "Cairo", correct: false },
            { text: "Moscow", correct: false },
            { text: "Istanbul", correct: true },
            { text: "Berlin", correct: false },
        ]
    },
    {
        question: "Which country has the most official languages?", 
        answers: [
            { text: "South Africa", correct: true },
            { text: "India", correct: false },
            { text: "Switzerland", correct: false },
            { text: "Belgium", correct: false },
        ]
    },
    {
        question: "Which is the longest river in the world?", 
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Mississippi River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Nile River", correct: true },
        ]
    },
    {
        question: "Which country has the most time zones?", 
        answers: [
            { text: "United States", correct: false },
            { text: "China", correct: false },
            { text: "France", correct: false },
            { text: "Russia", correct: true },
        ]
    },
    {
        question: "Which country has no rivers?", 
        answers: [
            { text: "Saudi Arabia", correct: true },
            { text: "Liechtenstein", correct: false },
            { text: "Maldives", correct: false },
            { text: "Vatican City", correct: false },
        ]
    },
    {
        question: "Which is the only country in the world that has a flag with a square shape?", 
        answers: [
            { text: "Monaco", correct: false },
            { text: "Nepal", correct: false },
            { text: "Switzerland", correct: true },
            { text: "Vatican City", correct: false },
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

/* Betygsätt resultatet, fungerar ej..
function showGrade(){
let score = 15;
let grade;

if (score >= 12) {
    grade = 'A';
    } else if (score >= 8) {
        grade = 'B';
        } else {
            grade = 'F';
            }
            console.log(`Your grade is ${grade}`);
}

Call function
showGrade(); 
*/
    


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