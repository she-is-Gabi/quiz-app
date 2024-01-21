const quizData = [
    {
        question: "What does HTML stands for?",
        a: "HeadText Markup Logo",
        b: "HyperText Making Language",
        c: "HyperText Markup Language",
        d: "Head Title Markup Language",
        correct: "c",
    },
    {
        question: "For what is CSS used for?",
        a: "To create the structure of a web page",
        b: "To define the appearance and layout of the page",
        c: "To create the content of a web page",
        d: "To handle events",
        correct: "b",
    },
    {
        question: "Which language is used for handling events in HTML?",
        a: "JavaScript",
        b: "C",
        c: "Java",
        d: "Python",
        correct: "a",
    },
    {
        question: "Which is NOT an attribute in HTML?",
        a: "style",
        b: "h1",
        c: "href",
        d: "src",
        correct: "b",
    },
    { 
        question: "Which is NOT a tag in HTML?",
        a: "<br>",
        b: "<p>",
        c: "<src>",
        d: "<main>",
        correct: "c",
    },
    
];

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
};

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        };
    };
});