// Array of questions
const questions = [
    {
        image: "path/to/question1.jpg",
        text: "Is the sky blue?",
        answer: true
    },
    {
        image: "path/to/question2.jpg",
        text: "Is the Earth flat?",
        answer: false
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// Initialize the quiz
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-image").src = currentQuestion.image;
    document.getElementById("question-text").textContent = currentQuestion.text;
    document.getElementById("question-section").style.display = "block";
    document.getElementById("answer-section").style.display = "none";
}

function submitAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultText = document.getElementById("result-text");

    if (userAnswer === currentQuestion.answer) {
        resultText.textContent = "Correct!";
        correctCount++;
    } else {
        resultText.textContent = "Wrong!";
        wrongCount++;
    }

    // Update the score
    document.getElementById("correct-counter").textContent = correctCount;
    document.getElementById("wrong-counter").textContent = wrongCount;

    // Show the result image (you can customize the image for correct/wrong answers)
    document.getElementById("result-image").src = currentQuestion.image;

    // Switch to answer section
    document.getElementById("question-section").style.display = "none";
    document.getElementById("answer-section").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    // If there are more questions, load the next one
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz complete!");
        location.reload(); // Reloads the page to start over
    }
}

// Start the quiz
loadQuestion();
