// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");

console.log("1. 첫 번째 줄");
console.log("2. 두 번째 줄");
//console.log("주석은 실행되지 않습니다")
console.log("3. 세 번째 줄");
//let은 다시 닮을 수 있다.(재할당가능)
let price = 200;
console.log(price)

price = 300;
console.log(price)
//선언하고 할당하고 초기값
let score;
console.log(score);
score = 100;
console.log(score);

let level = 1;//초기화 :선언과 동시에 할당 

//실습
let city="서울";
city="부산";
console.log("도시 :",city);
//다시 담을 수 없다 : 상수
const birthYear = 1998;
console.log("태어난 해: ", birthYear)

//boolean type 
let isMember = true;
let hasCoupon = false;
console.log(typeof isMember);
console.log("회원인가요?", isMember);
console.log("쿠폰이 있나요?", hasCoupon);

console.log(10<20);
console.log(10>20);

const userScore =80;
const passScore =60;
let isPass = userScore>passScore;

console.log("합격했나요?", isPass);




