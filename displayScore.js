let score = sessionStorage.getItem("score");

let resultBox = document.getElementById("questionsGrid2");

if (score >= 30) {
    resultBox.innerHTML = "Wao! You scored " + score + " marks in the quiz!";
} else if (score < 30) {
    resultBox.innerHTML = "Below average! You scored " + score + " marks in the quiz! We prefer retaking the test!";
}

function retakeTest() {
    location.replace("quiz.html");
}