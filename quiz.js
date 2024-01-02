const data = [
    {
        question : "What is the full form of HTML ?",
        a : "Hyper text modified language",
        b : "Hyper text markup language",
        c : "Hyper text transfer protocol",
        d : "Highlight text markup languages",
    },
    {
        question : "What is the full form of CSS ?",
        a : "Cast Style Sheet",
        b : "Cascading Sheet Style",
        c : "Cascading Style Sheets",
        d : "Cascading Sort Style",
    },
    {
        question : "Which of the following is not a programming language ?",
        a : "Ruby",
        b : "Python",
        c : "Java",
        d : "Banana",
    },
    {
        question : "What is a variable ?",
        a : "It is a location where the data is stored",
        b : "It is the type of data",
        c : "It is used in type casting",
        d : "It is a programing language",
    },
]

const quiz = document.getElementById("quiz")
const answerEls = doucment.querySelectorAll(".answer")
const questionEl = doucment.getElementById(".question")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD= document.getElementById("optionD")
const optionA = document.getElementById("optionA")

const submitBtn = document.getElementById("submit")
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz()
{
    deselectAnswers()
    const currentQuizData = data[currentQuiz]
    questionE1.innerText = curentQuizData.question
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
    optionA.innerText = currentQuizData.a
}

function deselectAnswers()
{
    answerEls.forEach((answerEL) => (
        answerEL.checked = false
    ))
}