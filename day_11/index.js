// DAY 11 Javascript 연산자와 조건문
console.log("index.js가 연결됐습니다");

//단항연산자//
let count = 10;
count++;
console.log(count);

count--;
console.log(count);

let num = 10;
let a = num++;
console.log("a:",a);
console.log("num:",num)

let num2 = 10;
let b =++num2;
console.log("b:",b);
console.log("num2:", num2);

//값 합산//
let total = 0;
total +=12000;
total +=3000;
console.log(total);

let message = "안녕";
message += "하세요";
console.log(message);

//비교연산자//
console.log( 10 == "10");
console.log( 10 === "10");
console.log( 0 == "");
console.log( 0 === "");
console.log( null == "undefined");
console.log( null === "undefined");

//논리연산자//
const age=42;
const hasTicket = true;

console.log (age>= 20 && hasTicket);
console.log (age<20 || hasTicket);
console.log (!hasTicket);

console.log(!true && false);
console.log(!(true && false));

//조건문//
const numIf=5;
if(numIf % 2 === 0){
    console.log("짝수입니다")
} else {
    console.log("홀수입니다");
}

const numIf2 =0;
if(numIf2 > 0){
    console.log("양수입니다")
} else if(numIf2 < 0){
    console.log("음수입니다");
} else {
    console.log("0입니다");
}

const score = 95;
if (score>=90 && score<=100) {
    console.log("A학점입니다");
}

const day = '토';
if(day ==='토' || day==="일") {
      console.log("주말입니다.");
} else {
  console.log("평일입니다.");
}

//중첩if문 
const isLoggedin = true;
const role ="admin";
if(isLoggedin){
    console.log("로그인 O");
    if(role ==="admin") {
        console.log("관리자 메뉴");
    }else{
    console.log("내정보")
        }
    } else {
        console.log("로그인하기");
}

//switch문 
const food="시금치";

switch(food) {
    case "사과":
    case "바나나":
    case "멜론":
        console.log("과일");
        break;
    case "당근":
    case "시금치":
        console.log("채소");
        break;
    default:
        console.log("과일도 채소도 아닙니다");    
}

//삼항연산자 
let result;
let scoreThird = 85;

// if문
if (scoreThird >= 60) {
  result = "합격";
} else {
  result = "불합격";
}

console.log(result); // 합격

// 삼항 연산자
result = scoreThird >= 60 ? "합격" : "불합격";

console.log(result); // 합격
//if의 괄호생략
if(scoreThird >=90 ) console.log ("A학점입니다");

if(scoreThird >=90) {
    console.log ("A학점입니다");
    console.log ("축하합니다");
}

if (scoreThird >= 90) console.log("A학점입니다");
console.log("축하합니다"); // 조건과 관계없이 실행됨





