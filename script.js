// Array of objects containing the question, possible answers, and the correct answer for each question

const quizData = [
    {
        question: 'What is 5 + 5?',
        a: '10',
        b: '1',
        c: '5',
        d: '25',
        correct: 'a'
    },
    {
        question: 'What is 5  x 3?',
        a: '15',
        b: '8',
        c: '15',
        d: '20',
        correct: 'c'
    },
    {
        question: 'What is 17 x 4?',
        a: '67',
        b: '78',
        c: '53',
        d: '68',
        correct: 'd'
    },
    {
        question: 'What is 22 + 105?',
        a: '126',
        b: '128',
        c: '122',
        d: '127',
        correct: 'd'
    },
    {
        question: 'What is 88 x 3?',
        a: '188',
        b: '264',
        c: '244',
        d: '256',
        correct: 'b'
    },
];

const questionEl = document.getElementById ('question');
const  a_text = document.getElementById('a_text');
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion]     // assigns currentQuizData with the 0 index element of the quizData array
    questionEl.innerText = currentQuizData.question;     // gets the value of 'question:' in the 0 index element and displays it
    a_text.innerText = currentQuizData.a;     // gets the value of 'a:' in the 0 index element and displays it
    b_text.innerText = currentQuizData.b;    
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitButton.addEventListener('click', () => {     // function runs when submit button is clicked
    currentQuestion++;     // increases the value of currentQuestion to move onto the next index/question
    loadQuiz();     // moves on to next question
});