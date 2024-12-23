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
        question: "Which two countries share the longest border in the world?", 
        answers: [
            {text: "Canada and the United States", correct: false},
            {text: "Brazil and Argentina", correct: true},
            {text: "India and Pakistan", correct: false},
            {text: "Russia and China", correct: true},
        ]
    },
    {
        question: "Which two of the following countries are located on the Iberian Peninsula?", 
        answers: [
            { text: "Italy", correct: false },
            { text: "Spain", correct: true },
            { text: "Portugal", correct: true },
            { text: "France", correct: false },
        ]
    },
    {
        question: "Which two rivers flow through the city of Paris?", 
        answers: [
            { text: "Seine", correct: true },
            { text: "Danube", correct: false },
            { text: "Thames", correct: false },
            { text: "Rhone", correct: true },
        ]
    },
    {
        question: "Which two countries have the largest populations in Africa?", 
        answers: [
            { text: "Nigeria", correct: true },
            { text: "Ethiopia", correct: true },
            { text: "South Africa", correct: false },
            { text: "Egypt", correct: false },
        ]
    },
    {
        question: "Which two mountain ranges are located in North America?", 
        answers: [
            { text: "Andes", correct: false },
            { text: "Alps", correct: false },
            { text: "Rockies", correct: true },
            { text: "Appalachian", correct: true },
        ]
    },
    {
        question: "Which two countries share the island of Borneo?", 
        answers: [
            { text: "Thailand", correct: false },
            { text: "Indonesia", correct: true },
            { text: "Brunei", correct: false },
            { text: "Malaysia", correct: true },
        ]
    },
    {
        question: "Which two African countries are landlocked and bordered by South Africa?", 
        answers: [
            { text: "Zimbabwe", correct: false },
            { text: "Botswana", correct: true },
            { text: "Lesotho", correct: true },
            { text: "Namibia", correct: false },
        ]
    },
    {
        question: "Which two European capitals are located on rivers that share the same name as the city?", 
        answers: [
            { text: "Paris", correct: true },
            { text: "Budapest", correct: true },
            { text: "London", correct: false },
            { text: "Vienna", correct: false },
        ]
    },
    {
        question: "Which two countries are separated by the Strait of Gibraltar?", 
        answers: [
            { text: "Morocco", correct: true },
            { text: "Italy", correct: false },
            { text: "France", correct: false },
            { text: "Spain", correct: true },
        ]
    },
    {
        question: "Which two of these countries are located in Oceania?", 
        answers: [
            { text: "Singapore", correct: false },
            { text: "New Zealand", correct: true },
            { text: "Fiji", correct: true },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "Which two countries are located in the Scandinavian Peninsula?", 
        answers: [
            { text: "Finland", correct: false },
            { text: "Denmark", correct: false },
            { text: "Sweden", correct: true },
            { text: "Norway", correct: true },
        ]
    },
    {
        question: "Which two of the following are located on the continent of Asia?", 
        answers: [
            { text: "Vietnam", correct: true },
            { text: "Cambodia", correct: true },
            { text: "Australia", correct: false },
            { text: "Venezuela", correct: false },
        ]
    },
    {
        question: "Which two countries are home to the world's largest deserts: the Sahara and the Arabian?", 
        answers: [
            { text: "Libya", correct: false },
            { text: "Saudi Arabia", correct: true },
            { text: "Chile", correct: false },
            { text: "Egypt", correct: true },
        ]
    },
    {
        question: "Which two seas are connected by the Suez Canal?", 
        answers: [
            { text: "Red Sea", correct: true },
            { text: "Black Sea", correct: false },
            { text: "Baltic Sea", correct: false },
            { text: "Mediterranean Sea", correct: true },
        ]
    },
    {
        question: "Which two cities are considered the "Capitals of Culture" for the year 2024?", 
        answers: [
            { text: "Tartu in Estonia", correct: true },
            { text: "Bad Ischl in Austria", correct: true },
            { text: "Milan in Italy", correct: false },
            { text: "Brussels in Belgium", correct: false },
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