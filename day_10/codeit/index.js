console.log(Number('10')+Number('5'));
console.log(String(10)+ String(5));

console.log(Number('1' + '2' + '3') - Number(true));

console.log(typeof ('4' + 3));
console.log(typeof (3 - true));
console.log(typeof (Boolean(5) * true));
console.log(typeof (true < false));

console.log(0 !== Number(false));
console.log(Number(true) == String(1));
console.log('5' / true != '5');
console.log(5 % 2 === Boolean(2) * true);

function calcWage(name, time, wage) {
  let total = time * wage;
  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}

calcWage('김윤식', 208, 2358720 / 208);
calcWage('성규재', 175, 2128000 / 175);
calcWage('손태웅', 161, 2104270 / 161);
calcWage('허우선', 222, 2437560 / 222);

function myFunction() {
  let x = '코드잇';
  x = "을지로";
}

myFunction();
console.log(x);



