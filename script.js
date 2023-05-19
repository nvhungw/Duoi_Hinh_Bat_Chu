let startBtn = document.querySelector('.start-btn');
let mainGame = document.querySelector('.main-game');
let answerBtn = document.querySelector('.answer-btn');
let result = document.querySelector('.result');
let resultCount = document.querySelector('.result-count');
let restartBtn = document.querySelector('.restart-btn');

const ANSWER = 'con cá'; //Set trước câu trả lời
const LIMIT_ANSWER = 3;
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

let image = document.querySelector('#image');
let questions = [
  [
    'https://teky.edu.vn/blog/wp-content/uploads/2022/04/hay-tim-den-duoi-hinh-bat-chu-de-choi-voi-ban-be.jpg',
    'abc',
  ],
  [
    'https://teky.edu.vn/blog/wp-content/uploads/2022/04/hay-tim-den-duoi-hinh-bat-chu-de-choi-voi-ban-be.jpg',
    'abcd',
  ],
];

function answer() {
  for (let index in questions) {
    let quesItem = questions[index];
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
  }
  resultCount.innerHTML = count;
  showResult();
  hideMainGame();
}

startBtn.addEventListener('click', function () {
  count = 0;
  showMainGame();
  hideStart();
  let firstQues = questions[0];
  image.setAttribute('src', firstQues[0]);
});

answerBtn.addEventListener('click', function () {
  answer();
});

restartBtn.addEventListener('click', function () {
  showStart();
  hideResult();
});

// //Mẫu
// // màn hình : nút bắt đầu : html
// // khi click vào nút => hiện thị ra hình ảnh và có nút trả lời : js
// // khi click vào nút trả lời thì sẽ hiện ra ô nhập thông tin : click
// // khi nhập đúng ra hiện ra kết thúc và hiện số lần trả lời : while
// // getElementById('aaaa')
// let btnStart = document.querySelector('.start-btn');
// let mainGame = document.querySelector('.main-game');
// let answerBtn = document.querySelector('.answer-btn');
// let result = document.querySelector('.result');
// let resultCount = document.querySelector('.result-count');
// let restartBtn = document.querySelector('.restart-btn');

// const ANSWER = 'abc';
// const LIMIT_ANSWER = 3;
// let count = 0;

// function initGame() {
//   console.log('init');
//   hideMainGame();
//   hideResult();
// }
// initGame();

// function hideMainGame() {
//   mainGame.style.display = 'none';
// }

// function hideResult() {
//   result.style.display = 'none';
// }

// function hideStart() {
//   btnStart.style.display = 'none';
// }

// function showMainGame() {
//   mainGame.style.display = 'block';
// }

// function showResult() {
//   result.style.display = 'block';
// }

// function showStart() {
//   btnStart.style.display = 'block';
// }
// let image = document.querySelector('#image');

// let questions = [
//   [
//     'https://cdn.24h.com.vn/upload/2-2023/images/2023-05-19/120x90/1684499890-897-thumbnail-width740height555.jpg',
//     'abcd',
//   ],
//   [
//     'https://cdn.24h.com.vn/upload/2-2023/images/2023-05-19/120x90/1684499890-897-thumbnail-width740height555.jpg',
//     'abcd',
//   ],
// ];

// console.log(questions);
// function answer() {
//   for (let index in questions) {
//     let quesItem = questions[index];
//     console.log(quesItem);
//     let userAnswer = '';
//     let question = 'Nhập đáp án:';
//     console.log(userAnswer, quesItem[1]);
//     // while (userAnswer != quesItem[1]) {
//     //   // check dk truoc
//     //   if (count > 0) {
//     //     question = `Bạn nhập sai rồi nhập lại đi Bạn còn lại ${
//     //       LIMIT_ANSWER - count
//     //     }:`;
//     //   }
//     //   if (count == LIMIT_ANSWER) {
//     //     count = 'Bạn đã nhập hết số lần giớ hạn';
//     //     break;
//     //   }
//     //   userAnswer = prompt(question);
//     //   count++; // count =1
//     // }
//   }

//   resultCount.innerHTML = count;
//   showResult();
//   hideMainGame();
// }

// btnStart.addEventListener('click', function () {
//   console.log('start click');
//   count = 0;
//   showMainGame();
//   hideStart();
//   let firstQues = questions[0];
//   image.setAttribute('src', firstQues[0]);
// });

// answerBtn.addEventListener('click', function () {
//   console.log('answer click');
//   answer();
// });

// restartBtn.addEventListener('click', function () {
//   console.log('restart click');
//   count = 0;
//   showStart();
//   hideResult();
// });
