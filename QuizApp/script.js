const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b",
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    }
];
console.log(quizData);

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const startBtn = document.getElementById('start');
const nextBtn = document.getElementById('next');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const footerEl = document.querySelector('.footer');

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 15;

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    timerEl.style.display = 'block';
    document.querySelector('.options').style.display = 'block';
    nextBtn.style.display = 'block';
    footerEl.style.display = 'flex';
    loadQuiz();
});

function loadQuiz() {
    deselectAnswers();
    resetTimer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    questionNumberEl.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
    
    startTimer();
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
        const parent = answerEl.parentElement;
        parent.classList.remove('selected', 'correct', 'incorrect');
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function showCorrectAnswer() {
    answerEls.forEach(answerEl => {
        const parent = answerEl.parentElement;
        if (answerEl.id === quizData[currentQuiz].correct) {
            parent.classList.add('correct');
        }
    });
}

answerEls.forEach(answerEl => {
    answerEl.addEventListener('change', () => {
        answerEls.forEach(el => el.parentElement.classList.remove('selected'));
        const parent = answerEl.parentElement;
        const answer = answerEl.id;
        parent.classList.add('selected');

        if (answer === quizData[currentQuiz].correct) {
            score++;
            parent.classList.add('correct');
        } else {
            parent.classList.add('incorrect');
            showCorrectAnswer();
        }

        clearInterval(timer);
    });
});

nextBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
});

function startTimer() {
    timeLeft = 15;
    timerEl.textContent = `Time left: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Moving to the next question.');
            nextBtn.click();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timerEl.textContent = `Time left: 15`;
}