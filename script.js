let startBtn = document.querySelector('.start-btn');
let mainGame = document.querySelector('.main-game');
let answerBtn = document.querySelector('.answer-btn');
let result = document.querySelector('.result');
let resultCount = document.querySelector('.result-count');
let restartBtn = document.querySelector('.restart-btn');

const ANSWER = 'abc'; //Set trước câu trả lời
const LIMIT_ANSWER = 2;
let count = 0;

function initGame() {
  console.log('init');
  hideMainGame();
  hideResult();
}
initGame();

function hideMainGame() {
  mainGame.style.display = 'none';
}

function hideResult() {
  result.style.display = 'none';
}

function hideStart() {
  startBtn.style.display = 'none';
}

function showMainGame() {
  mainGame.style.display = 'block';
}

function showResult() {
  result.style.display = 'block';
}

function showStart() {
  startBtn.style.display = 'block';
}

function answer() {
  let userAnswer = ''; // Câu trả lời của người dùng
  let question = 'Nhập đáp án: ';
  while (userAnswer != ANSWER) {
    if (count > 0) {
      question = 'Sai đáp án. Nhập lại: ';
    }
    if (count == LIMIT_ANSWER) {
      count = 'Bạn đã nhập hết số lần giới hạn';
      break;
    }
    userAnswer = prompt(question);
    count++;
  }
  resultCount.innerHTML = count;
  showResult();
  hideMainGame();
}

startBtn.addEventListener('click', function () {
  count = 0;
  showMainGame();
  hideStart();
});

answerBtn.addEventListener('click', function () {
  answer();
});

restartBtn.addEventListener('click', function () {
  showStart();
  hideResult();
});
