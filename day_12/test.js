// function sum(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return;
//   }
//   return num1 + num2;
// }

// //const double = (n) => n * 2;

// function greet(name = "회원") {
//   return `${name}님, 안녕하세요`;
// }

// console.log(sum(10, 20));
// console.log(sum("a", "b"));
// console.log(double(sum(1, 2)));
// console.log(greet());
// console.log(greet("김오즈"));

//2번
// let total = 0;
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);
//codeit
// const sum = 0;

// function getSum(x, y) {
//   const sum = x + y;

//   return sum;
// }

// if (getSum(1, 5) > 3) {
//   const sum = 4 + 6; 
// }
 
// console.log(sum);

//this
// const getFullName = () => `${this.firstName} ${this.lastName}`;

// const user = {
//   firstName: 'Ted',
//   lastName: 'Chang',
//   getFullName: getFullName,
// };

// console.log(user.getFullName());

//문장과 표현식 
//조건 ? true 할때 표현식 : faulse 할때 표현식 (조건 연산자:삼항연산자) 
//스프레드 구문 
//모던한 프로퍼티 표기법 
//구조분해 
// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요
const numbers = [1, 2, 3];
const [one, two, three] = numbers;


// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = products;


// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요
let firstName = 'number';
let lastName = 'kitchen';
[firstName, lastName] = [lastName, firstName];


// 테스트 코드
console.log(one);
console.log(two);
console.log(three);
console.log(livingRoom);
console.log(kitchen[1]);
console.log(firstName);
console.log(lastName);