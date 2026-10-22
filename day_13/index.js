// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");

const fruits = [ "사과", "바나나", "오렌지" ];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);
console.log(fruits[5]);
console.log(fruits.length);

fruits[1] = "망고";
console.log(fruits);

//맨뒤에 더할때
fruits.push("포도");
console.log(fruits);

//length로 처음부터 끝까지 반복시키기
const scores = [80, 95, 70, 55];
let total = 0;

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    total += score;
}

console.log("총합", total);                
console.log("평균", total / scores.length); 

//배열의 요소 넣기 빼기 
console.log(fruits);
fruits.push("딸기");
console.log(fruits);

const poped = fruits.pop();
console.log(poped);
console.log(fruits);

fruits.unshift("수박");
console.log(fruits);

const shifted = fruits.shift();
console.log(shifted);
console.log(fruits);

//배열 splice
const removed = fruits.splice(1,1, "딸기"); //인수를 한개 준경우, 두개준경우. 세개준경우 다름 
console.log(removed);
console.log(fruits);

//객체선언
const bread = {
    name: "팥붕어빵",
    Price: 1000,
    ingridients: ["밀가루","팥","설탕"],
    ishot: true,
}
console.log(bread);
console.log("이름 :", bread.name);
console.log("가격 :", bread.Price);
console.log("크기 :", bread.size);
console.log("따뜻한가요? :", bread.ishot);

bread.Price = 500
bread.owner ="김오즈";
console.log(bread);

//user 객체 
// const user = {
//     userName: "김오즈",
//     address: {
//         city: "서울",
//         zip: "04524",
//     },
//     likes: ["커피", "코딩"],
//     great() {
//         return "안녕하세요";
//     },
// };

// console.log(user);
// console.log(user.address.city); 
// console.log(user.likes[1]);     
// console.log(user.likes.length); 
// console.log(user.great());      

const products = [
    {
        id: 1,
        pdcName: "에코백",
        price: 12000,
        stock: 5
    },
    {
        id: 2,
        pdcName: "텀블러",
        price: 18000,
        stock: 5
    },
    {
        id: 3,
        pdcName: "머크컵",
        price: 9000,
        stock: 5
    }
];
console.log(products);
console.log(products[0].pdcName); 
console.log(products[2].price);   

let pdcTotal = 0;

for (let i = 0; i < products.length; i++) {
    const item = products[i];

    console.log(`${item.pdcName} ${item.price}원`);
    pdcTotal += item.price * item.stock;
}

console.log(`재고금액합계 ${pdcTotal}원`); 
//객체 => json parse 
const Json = JSON.stringify(products);
console.log(Json);

const back = JSON.parse(Json);
console.log(back);

const cart = ["우유", "빵"];
const a = cart.push("계란");
const b = cart[cart.length - 1];
const c = cart.shift();
cart.unshift("버터");
const d = cart.splice(1, 1);
const e = cart.slice(0, 1);
console.log(cart);


