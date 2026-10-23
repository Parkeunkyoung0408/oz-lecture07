const nums = [3, 8, 5, 10];
console.log(nums.every((n) => n > 4));
console.log(nums.filter((n) => n > 4));
console.log(nums.reduce((acc, n) => acc + n, 0));


const books = [
  { title: "자바스크립트 입문", price: 22000, sold: 120 },
  { title: "HTML 첫걸음", price: 18000, sold: 80 },
  { title: "CSS 레시피", price: 25000, sold: 150 },
];

console.log(books.map((b) => b.title).length);
console.log(books.filter((b) => b.sold >= 100).length);
console.log(books.find((b) => b.price < 20000).title);
console.log(books.reduce((sum, b) => sum + b.sold, 0));
console.log(books.filter((b) => b.price > 30000));

//spread 구문 
const numbers = [1,2,3,4];
console.log(...numbers)

//forEach와 map
const members = [`영훈`,`윤수`,`동욱`,`태호`];

for(let member of members) {
    console.log(`${member}님이 입장하셨습니다.`);
}

members.forEach((member, i) => {
    console.log(`${i} ${member}님이 입장하셨습니다.`);
});

const firstNames = [`영훈`,`윤수`,`동욱`,`태호`];
const lastNames = [`강`,`이`,`손`,`성`];

firstNames.forEach((firstNames, i, arr) => {
    console.log(`${lastNames[i]}${firstNames}님이 입장하셨습니다.`)
    console.log(arr);
});
//map - 새로운 배열을 리턴 
//fiter와 find
//reduce 


