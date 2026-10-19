// DAY 10 실습 02 — 사용자 정보 출력하기

//상수선언
const userName = "박은경";
const email ="hobuin07@naver.com";
//변수 선언
let age = 28;

//연산자:문자열 연결 
console.log("안녕하세요 저는 "+userName + "입니다")

//템플릿 문자열 : 벡틱안에 
console.log(`안녕하세요 저는 ${userName}입니다`)

//맥북은 영문 타자일때 숫자1 왼쪽 눌러야 한다 


let isMember = true;
//일부러 비운값 , 아직넣지 않은값
let photo = null;
let nickname;

console.log("이름 :",userName); 
console.log("이메일 :" ,email); 
console.log("나이 :",age); 
console.log("회원여부 :",isMember);
console.log("사진 :",photo)
console.log("별명 :" ,nickname);

console.log(
    `안녕하세요. 저는 ${userName}입니다. 
    나이는 ${age}살이고, 이메일은 ${email}입니다. 
    회원여부는 ${isMember}입니다.`,
);

console.log("userName의 자료형 :",typeof userName);
console.log("age의 자료형 :",typeof age);
console.log("isMember의 자료형 :",typeof isMember);
console.log("photo의 자료형 :",typeof photo);
console.log("nickname의 자료형 :",typeof nickname);

age= 29;
console.log (`생일이 지나 ${age}살이 되었습니다`);