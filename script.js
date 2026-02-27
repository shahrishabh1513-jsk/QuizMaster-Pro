// Quiz Data - 20 Questions
const quizData = [
    // Web Development Basics
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1997",
        correct: "b",
    },
    // Frameworks & Libraries
    {
        question: "Which company developed React?",
        a: "Google",
        b: "Microsoft",
        c: "Facebook (Meta)",
        d: "Amazon",
        correct: "c",
    },
    {
        question: "Which of these is a JavaScript framework?",
        a: "Django",
        b: "Flask",
        c: "Vue.js",
        d: "Laravel",
        correct: "c",
    },
    {
        question: "What is the latest version of HTML?",
        a: "HTML4",
        b: "XHTML",
        c: "HTML5",
        d: "HTML6",
        correct: "c",
    },
    {
        question: "Which CSS framework is most popular?",
        a: "Bootstrap",
        b: "Tailwind",
        c: "Bulma",
        d: "Foundation",
        correct: "a",
    },
    // Programming Concepts
    {
        question: "What does API stand for?",
        a: "Application Programming Interface",
        b: "Advanced Program Integration",
        c: "Application Process Integration",
        d: "Automated Programming Input",
        correct: "a",
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "<!-- -->",
        b: "//",
        c: "/* */",
        d: "#",
        correct: "b",
    },
    {
        question: "How do you declare a variable in JavaScript?",
        a: "var myVar;",
        b: "variable myVar;",
        c: "v myVar;",
        d: "let = myVar;",
        correct: "a",
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        a: 'let colors = "red", "green", "blue"',
        b: 'let colors = ["red", "green", "blue"]',
        c: 'let colors = (red, green, blue)',
        d: 'let colors = {red, green, blue}',
        correct: "b",
    },
    // Database & Backend
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Simple Query Language",
        c: "Strong Question Language",
        d: "Standard Query Language",
        correct: "a",
    },
    {
        question: "Which of these is a NoSQL database?",
        a: "MySQL",
        b: "PostgreSQL",
        c: "MongoDB",
        d: "SQLite",
        correct: "c",
    },
    {
        question: "What is Node.js used for?",
        a: "Styling web pages",
        b: "Server-side JavaScript",
        c: "Database management",
        d: "Mobile development",
        correct: "b",
    },
    // Version Control
    {
        question: "Which command creates a new Git repository?",
        a: "git start",
        b: "git new",
        c: "git init",
        d: "git create",
        correct: "c",
    },
    {
        question: "What is GitHub?",
        a: "Code editor",
        b: "Git hosting service",
        c: "Programming language",
        d: "Database system",
        correct: "b",
    },
    // Web Technologies
    {
        question: "What is the purpose of JSON?",
        a: "Styling web pages",
        b: "Data interchange format",
        c: "Server-side scripting",
        d: "Database queries",
        correct: "b",
    },
    {
        question: "Which HTTP method is used to send data?",
        a: "GET",
        b: "POST",
        c: "PUT",
        d: "DELETE",
        correct: "b",
    },
    {
        question: "What does responsive design mean?",
        a: "Fast loading website",
        b: "Website adapts to screen size",
        c: "Interactive elements",
        d: "Secure website",
        correct: "b",
    }
];

// DOM Elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer-radio');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('question-counter');
const scoreBadge = document.getElementById('score-badge');

// State Variables
let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

// Initialize Quiz
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    // Update question and options
    questionEl.innerText = currentQuizData.question;
    
    // Update option texts with letters
    document.querySelectorAll('.option-text').forEach((el, index) => {
        const letter = String.fromCharCode(97 + index); // a, b, c, d
        el.innerText = currentQuizData[letter];
    });
    
    // Update progress
    updateProgress();
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
    selectedAnswer = null;
}

function getSelected() {
    let answer = null;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function updateProgress() {
    // Update progress bar
    const progress = ((currentQuiz + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update question counter
    questionCounter.innerHTML = `<i class="fas fa-question-circle"></i> ${currentQuiz + 1}/${quizData.length}`;
    
    // Update score
    scoreBadge.innerHTML = `<i class="fas fa-star"></i> Score: ${score}`;
}

function showResult() {
    const percentage = (score / quizData.length) * 100;
    let message = "";
    let icon = "";
    
    if (percentage >= 80) {
        message = "Excellent! You're a quiz master! 🏆";
        icon = "fas fa-crown";
    } else if (percentage >= 60) {
        message = "Good job! Keep learning! 📚";
        icon = "fas fa-graduation-cap";
    } else if (percentage >= 40) {
        message = "Not bad! Practice makes perfect! 💪";
        icon = "fas fa-rocket";
    } else {
        message = "Keep trying! You'll get better! 🌱";
        icon = "fas fa-seedling";
    }
    
    quiz.innerHTML = `
        <div class="result-screen">
            <i class="${icon} result-icon"></i>
            <h2>Quiz Completed!</h2>
            <div class="final-score">${score}/${quizData.length}</div>
            <p class="result-message">${message}</p>
            
            <div class="result-stats">
                <div class="stat-item">
                    <span class="stat-label">Correct Answers:</span>
                    <span class="stat-value">${score}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Incorrect Answers:</span>
                    <span class="stat-value">${quizData.length - score}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Success Rate:</span>
                    <span class="stat-value">${percentage.toFixed(1)}%</span>
                </div>
            </div>
            
            <button class="btn btn-primary" onclick="location.reload()">
                <i class="fas fa-redo-alt"></i>
                <span>Play Again</span>
            </button>
            
            <button class="btn btn-secondary" onclick="shareResults()">
                <i class="fas fa-share-alt"></i>
                <span>Share Result</span>
            </button>
        </div>
    `;
}

// Share results function (optional)
function shareResults() {
    const text = `I scored ${score}/${quizData.length} on QuizMaster Pro! Can you beat my score? 🎯`;
    if (navigator.share) {
        navigator.share({
            title: 'QuizMaster Pro Result',
            text: text,
            url: window.location.href
        });
    } else {
        alert('Share this result: ' + text);
    }
}

// Submit button click handler
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        // Check if answer is correct
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        
        // Move to next question
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    } else {
        // Show toast notification
        showToast('Please select an answer!', 'warning');
    }
});

// Toast notification function
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'warning' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style toast
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '50px';
    toast.style.zIndex = '1000';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.backdropFilter = 'blur(10px)';
    toast.style.border = '1px solid rgba(255,255,255,0.2)';
    toast.style.animation = 'slideUp 0.3s ease';
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (['a', 'b', 'c', 'd'].includes(key)) {
        const radio = document.getElementById(key);
        if (radio) {
            radio.checked = true;
        }
    } else if (key === 'enter') {
        submitBtn.click();
    }
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
    }
`;
document.head.appendChild(style);