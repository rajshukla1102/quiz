const quizData = [
  {
    question:
      "My grandson is about as many days as my son is weeks, and my grandson is as many months as I am in years. My grandson, my son and I together are 120 years. Can you tell me my age in years?",
    a: "94",
    b: "72",
    c: "64",
    d: "87",
    correct: "b",
  },
  {
    question: "Half of 2 + 2 =?",
    a: "2",
    b: "4",
    c: "1",
    d: "3",
    correct: "a",
  },
  {
    question:
      "A firefighter stood on the middle rung of a ladder, spraying water on a burning house. He then climbed up 6 rungs before the heat of the flames caused him to come down 10 rungs. After some minutes he was able to climb 18 rungs to the very top of the ladder. How many rungs did the ladder have?",
    a: "5",
    b: "28",
    c: "29",
    d: "19",
    correct: "c",
  },
  {
    question:
      "The stubs obtained by burning ten candles will yield one extra candle if you melt them all together. If you burned 100 candles, how many extra candles could you make?",
    a: "11",
    b: "8",
    c: "9",
    d: "12",
    correct: "a",
  },
  {
    question: "0,1,1,2,3,5,?",
    a: "5",
    b: "6",
    c: "17",
    d: "8",
    correct: "d",
  },
  {
    question:
      "If there are 3 apples on the table and you take 2 of them, how many will you have?",
    a: "7",
    b: "2",
    c: "1",
    d: "none",
    correct: "b",
  },
  {
    question:
      "A doctor gives you 3 pills and tells you take 1 every half an hour, how long would it be before the pills have been taken?",
    a: "40min",
    b: "45min",
    c: "71min",
    d: "60min",
    correct: "d",
  },
  {
    question:
      "A number consists of 3 digits whose sum is 10. The middle digit is equal to the sum of the other two and the number will be increased by 99 if its digits are reversed. The number is?",
    a: "253",
    b: "414",
    c: "277",
    d: "296",
    correct: "a",
  },
  {
    question:
      "In space, which sad thing can astronauts not perform properly?",
    a: "Cry",
    b: "Sneeze",
    c: "Laugh",
    d: "Hiccup",
    correct: "a",
  },
  {
    question:
      "How many days are there in a fortnight?",
    a: "7days",
    b: "39days",
    c: "15days",
    d: "5days",
    correct: "c",
  },
  {
    question:
      "A farmer had 10 sheep, all but 7 died, how many live sheep were left?",
    a: "7",
    b: "3",
    c: "4",
    d: "6",
    correct: "a",
  },
];
const answerEle = document.querySelectorAll(".answers");

const ques = document.getElementById("ques");
const quiz = document.getElementById("quizScore");

const afill = document.getElementById("aFill");
const bfill = document.getElementById("bFill");
const cfill = document.getElementById("cFill");
const dfill = document.getElementById("dFill");

const submit = document.getElementById("sBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();

  const currentQuizData = quizData[currentQuiz];

  ques.innerText = currentQuizData.question;

  afill.innerText = currentQuizData.a;
  bfill.innerText = currentQuizData.b;
  cfill.innerText = currentQuizData.c;
  dfill.innerText = currentQuizData.d;
}

function selected() {
  let answer = undefined;
  answerEle.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      console.log(answer);
    }
  });
  return answer;
}

function deselect() {
  answerEle.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener("click", function () {
  const answer = selected();
  if (answer == quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (answer) {
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length} questions</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});
