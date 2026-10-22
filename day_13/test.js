// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요
const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};
const {title,artist,year,medium} = myBestArt;


// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당해 주세요
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};
const {title:songName, artist: singer, ...rest} = myBestSong;

console.log(songName);
console.log(singer);
console.log(rest);


// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	const {name, ice = true} = menu;
	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}


// 테스트 코드
console.log(title);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(rest);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);

//구조분해
function getArray() {
    return[`컴퓨터`,`냉장고`,`세탁기` ];
}

const [el1,el2,el3] = getArray();

console.log(el1);
console.log(el2);
console.log(el3);

//함수 객체 활용 
function getObject() {
    return {
        name: '코드잇',
        birth: 2017,
        job: '프로그래밍 강사',
    }
};

const {name: brand, birth, job} = getObject();

console.log(brand);
console.log(birth);
console.log(job);

//
const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d[2]);
console.log(d[4]);
 
//퀴즈왕의 길은 험난하다. 
const quiz1 = {
  question: '다음 중 스승의 날과 생일이 같은 인물은 누구일까요?',
  example: [ '율곡 이이', '퇴계 이황', '세종대왕', '신사임당'],
  answer: 3,
  solution: '훈민정음 창제 등 우리나라 문화와 교육 발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바람으로 세종대왕의 탄생일이 스승의 날로 지정되었습니다.',
};

const quiz2 = {
  question: '다음 중 희노애락에 속하지 않는 것은 무엇일까요?',
  example: ['사랑', '기쁨', '즐거움'],
  answer: 1,
  solution: '희노애락에서의 애를 사랑 애(愛)라고 자칫 오해할 수가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.',
};

function printQuiz({ question, example }) {
  try {
    let exMsg = '';

    for (let i = 0; i < example.length; i++) {
      exMsg += `${i + 1}. ${example[i]}  `;
    }

    console.log(question);
    console.log(exMsg);
  } catch (e) {
    console.log(e.name);
  }
}

// 테스트 코드
printQuiz(quiz1);
printQuiz(1);
printQuiz("");
printQuiz({});
printQuiz(quiz2);

//foeEach와 map
function createTodo(value, order) {
  const list = document.querySelector('.list');
  const node = document.createElement('li');
  if (value.isClear) {
    node.classList.add('item', 'done');
  } else {
    node.classList.add('item');
  }
  node.textContent = `${order}. ${value.title}`;
  list.appendChild(node);
}

const data = [
  {
    title: '자바스크립트 공부하기',
    isClear: true,
  },
  {
    title: '쓰레기 분리수거',
    isClear: false,
  },
  {
    title: '고양이 밥주기',
    isClear: true,
  },
  {
    title: '독서하기',
    isClear: false,
  },
  {
    title: '영어 공부하기',
    isClear: false,
  },
];

// 여기에 코드를 작성해 주세요.
