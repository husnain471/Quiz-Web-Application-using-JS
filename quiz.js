window.onload = function() {
    displayQuestion();
}

//***********************************************Questions In there hard form*********************************/
let question = [{
        id: 1,
        question: "Who is president of Pakistan",
        options: [
            "a) Arif Alvi",
            "b) Imran Khan",
            "c) Nawaz Shareef",
            "d) Asif Zardari",
        ],
        correct: "a",
    },

    {
        id: 2,
        question: "Who was first President of Pakistan?",
        options: [
            "a) Quaid-e-Azam",
            "b) Allama Iqbal",
            "c) Sikander Mirza",
            "d) Liaquat Ali Khan",
        ],
        correct: "c",

    },

    {
        id: 3,
        question: "When the first constitution of Pakistan was made?",
        options: [
            "a) 1973",
            "b) 1956",
            "c) 1958",
            "d) 1965",
        ],
        correct: "b",

    },


    {
        id: 4,
        question: "When Pakistan fought it's first war?",
        options: [
            "a) 1948",
            "b) 1965",
            "c) 1971",
            "d) 1999",
        ],
        correct: "a",

    },


    {
        id: 5,
        question: "When Jinnah of Pakistan died?",
        options: [
            "a) 23 March",
            "b) 25 December",
            "c) 14 August",
            "d) 11 September",
        ],
        correct: "d",

    },
]

//***********************************************This fucntion will display the questions*********************************

let questionNumber = 0;
let scoreInQuiz = 0;

function displayQuestion() {
    if (questionNumber < 5) {
        let dispalyQuestion = document.getElementById("questionsGrid");
        dispalyQuestion.innerHTML = (questionNumber + 1) + ") " + question[questionNumber].question;

        let option1 = document.getElementById("button1");
        option1.innerHTML = question[questionNumber].options[0];

        let option2 = document.getElementById("button2");
        option2.innerHTML = question[questionNumber].options[1];

        let option3 = document.getElementById("button3");
        option3.innerHTML = question[questionNumber].options[2];

        let option4 = document.getElementById("button4");
        option4.innerHTML = question[questionNumber].options[3];
    } else {
        location.replace("resultOfQuiz.html");
    }
}




//***********************************************This fucntion will check if the question is true or not*********************************
function checkAnswer(optionSelected) {
    console.log(questionNumber);
    if (questionNumber < question.length) {
        let correctAnswer = question[questionNumber].correct;
        if (correctAnswer === optionSelected) {
            scoreInQuiz += 10;
            sessionStorage.setItem("score", scoreInQuiz);
        } else {
            console.log("InCorrect Answer");
        }
        questionNumber++;
        displayQuestion();


    } else {
        location.replace("resultOfQuiz.html");
    }
}