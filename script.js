const quizData = [
    {
        question: "where is france located?",
        a: "asia",
        b: "europe",
        correct: "b",
    },
    {
        question: "where is saudia arabia located?",
        a: "asia",
        b: "africa",
        correct: "a",
    },
    { 
        question:"where is nigeria located?",
        a: "europe",
        b: "africa",
        correct: "b",
    },
    {
        question:"where is the longest pyramid?",
        a: "egypt",
        b: "mexico",
        correct: "a",
    
    },
    {
        question:"which conuntry is known as the land of the rising sun?",
        a:"united states",
        b:"japan",
        correct:"b",
    },
    {
        question:"which country has the most natural lakes?",
        a:"Green Land",
        b:"Canada",
        correct:"b",
    },
    {
        question:"What is the largest ocean in the world?",
        a:"The Pacific Ocean",
        b:"The Indian Ocean",
        correct:"a",
    },
    {
        question:"What is the capital of united kingdom?",
        a:"London",
        b:"Manchester",
        correct:"a",
    },
    {
        question:"What is the longest mountain in the world?",
        a:"Foje mountain",
        b:"The Himalayas mountain",
        correct:"b",
    },
    {
        question:"What is the capital of Saudia Arabia?",
        a:"Riyadh",
        b:"Jeddah",
        correct:"a",
    },
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// 1. Render Questions
function loadQuiz() {
    let quizHtml = '';
    quizData.forEach((data, index) => {
        quizHtml += `
            <div class="mb-4">
                <h5>${index + 1}. ${data.question}</h5>
                <input type="radio" name="q${index}" value="a"> ${data.a} <br>
                <input type="radio" name="q${index}" value="b"> ${data.b}
            </div>
        `;
    });
    quizContainer.innerHTML = quizHtml;
}

// 2. Calculate Score
submitBtn.addEventListener('click', () => {
    let score = 0;
    quizData.forEach((data, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer && answer.value === data.correct) {
            score++;
        }
    });
    resultDiv.innerText = `You scored ${score} out of ${quizData.length}!`;
});

loadQuiz();