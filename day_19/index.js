// DAY 19 고급함수와 고차함수
// console.log("index.js가 연결됐습니다!!!");

// const x = 1;

// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();

// // 카운터
// let num = 0;

// const increase = function () {
//   return ++num;
// };

// console.log(increase());
// console.log(increase());
// num = 100;
// console.log(increase());

// // 카운터 : 클로저로 숨기고 기억하기
// function makeIncrease() {
//   let num = 0;
//   return function () {
//     return ++num;
//   };
// }
// const increaseC = makeIncrease();
// console.log(increaseC());
// console.log(increaseC());

// //this의 쓰임:fuction과 
// const timer = {
//   secondes: 3,
//   start() {
//     setTimeout(function () {
//       console.log("function :", this.secondes);
//       console.log(this);
//     }, 0);
//     setTimeout(() => {
//       console.log("화살표 :", this.secondes);
//       console.log(this);
//     }, 0);
//   },
// };
// timer.start();
// // this의 쓰임 : 이벤트 리스너의 this
// const likeBtn = document.querySelector("#like-btn");

// likeBtn.addEventListener("click", function () {
//   this.textContent = "눌렀어요";
//   console.log("function :", this);
// });

// likeBtn.addEventListener("click", () => {
//   console.log(this);
//   console.log("화살표 :", this === window);
// });

// console.log(Math.round(4.5));     // 5 — 반올림
// console.log(Math.floor(4.7));     // 4 — 내림
// console.log(Math.ceil(4.2));      // 5 — 올림
// console.log(Math.max(72, 95, 58)); // 95 — 최댓값
// console.log(Math.min(72, 95, 58)); // 58 — 최솟값
// console.log(Math.abs(-3));        // 3 — 절댓값
// console.log(Math.PI);            // 3.141592653589793

// const day = new Date();
// console.log(day.getFullYear()); // 연도
// console.log(day.getMonth() + 1);    // 월: 0~11
// console.log(day.getDate());     // 일: 1~31
// console.log(day.getDay());      // 요일: 일요일 0~토요일 6
// console.log(day.getHours());    // 시: 0~23

//Higer 
// const addFuntion = (a) => {
//   let first = a; 
//   return(b) => {
//     let second = b;
//     return a+b;
//   };
// };
const add =(a) => (b) => a+b;
const add5 = add(5);
console.log(add5);
console.log(add5(10));

function makeMuliple(n) {
  return function(x) {
    return x * n;
  };
}
const double = makeMuliple(2);
const triple = makeMuliple(3);
console.log(double(4), triple(4));

// for와 메서드 이어쓰기
const scores = [72, 95, 58, 88, 64];

// 반복문 - 어떻게 할지를 한단계씩
let total = 0;
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  if (score >= 60) total += score;
}
console.log("for :", total);

// method 이어쓰기 - 무엇을 할지를 차례로
const total2 = scores
  .filter((score) => score >= 60)
  .reduce((acc, score) => acc + score, 0);
console.log("method :", total2);


