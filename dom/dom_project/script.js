const questions = [
  {
    question: "Which language runs in browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: 2,
  },
  {
    question: "Who created JavaScript?",
    options: ["Google", "Brendan Eich", "Microsoft", "Apple"],
    answer: 1,
  },
  {
    question: "Which company developed React?",
    options: ["Meta", "Netflix", "Amazon", "Twitter"],
    answer: 0,
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Object Model",
      "Document Order Method",
    ],
    answer: 0,
  },
  {
    question: "Which method selects an element by id?",
    options: [
      "querySelector()",
      "getElementById()",
      "getClass()",
      "selectElement()",
    ],
    

    answer: 1,
  },

  {
    question: "Who created JavaScript?",
    options: ["Google", "Brendan Eich", "Microsoft", "Apple"],
    answer: 1,
  },
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const timer = document.getElementById("timer");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let interval;

function loadQuestion() {
  clearInterval(interval);

  timeLeft = 15;

  timer.textContent = "Time: " + timeLeft;

  interval = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];

  question.textContent = q.question;

  answers.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;

    button.classList.add("option");

    button.addEventListener("click", () => checkAnswer(index));

    answers.appendChild(button);
  });
}

function updateTimer() {
  timeLeft--;

  timer.textContent = "Time: " + timeLeft;

  if (timeLeft === 0) {
    clearInterval(interval);

    nextQuestion();
  }
}

function checkAnswer(selected) {
  clearInterval(interval);

  const buttons = document.querySelectorAll(".option");

  buttons.forEach((button) => (button.disabled = true));

  const correctAnswer = questions[currentQuestion].answer;

  buttons.forEach((button, index) => {
    if (index === correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (selected === correctAnswer) {
    score++;

    scoreText.textContent = "Score: " + score;
  } else {
    buttons[selected].classList.add("wrong");
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

nextBtn.addEventListener("click", nextQuestion);

function showResult() {
  clearInterval(interval);

  question.innerHTML = `
Quiz Finished 🎉
`;

  answers.innerHTML = `
<h2>Your Score : ${score}/${questions.length}</h2>

<br>

<button onclick="restartQuiz()" class="option">
Restart Quiz
</button>
`;

  nextBtn.style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;

  score = 0;

  scoreText.textContent = "Score: 0";

  nextBtn.style.display = "block";

  loadQuestion();
}

loadQuestion();
