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
        a: '10',
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

const answerEls = document.querySelectorAll('.answer');     // returns a nodelist of elements that match the specified selector name
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById ('question');
const  a_text = document.getElementById('a_text');
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    unselectAnswer();
    const currentQuizData = quizData[currentQuestion]     // assigns currentQuizData with the 0 index element of the quizData array
    questionEl.innerText = currentQuizData.question;     // gets the value of 'question:' in the 0 index element and displays it
    a_text.innerText = currentQuizData.a;     // gets the value of 'a:' in the 0 index element and displays it
    b_text.innerText = currentQuizData.b;    
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach( (answerEl) => {     // goes through each element in the nodelist
        if(answerEl.checked) {
            answer = answerEl.id     // gets the id of the choice selected
        }
    });
    return answer;     // returns the selected choice to getSelected()
}

function unselectAnswer() {
    answerEls.forEach( (answerEl) => {     // goes through each element in the nodelist
        answerEl.checked = false;     // unselects the selected answer from the previous question when moving onto next question
    });
}


submitButton.addEventListener('click', () => {     // function runs when submit button is clicked
    
    const answer = getSelected();
    if(answer) {     // only lets you move onto next question if a choice is selected
        if(answer === quizData[currentQuestion].correct) {     // if the selected answer is correct increase the score
            score++;
        }
        currentQuestion++;     // increases the value of currentQuestion to move onto the next index/question
        if(currentQuestion < quizData.length) {
            loadQuiz();     // moves on to next question
        }  else {
            quiz.style.flex= '0 1 auto';
            quiz.style.textAlign = 'center';
            quiz.style.justifyContent = 'center';
            quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>     
             <button onclick="location.reload()" id="replay-button">Try Again</button>`;     // displays end score message
             // adds replay button | location.reload() refreshes webpae upon click
        }
    }
});