'use strict';

// 1. 숫자 타입
let number = 2;
const number2 = 1.3;

console.log(number * number2);

console.log(5 / 0); // - 출력값 Infinity
console.log(-5 / 0); // - 출력값 -Infinity
console.log('hello' / 5); //  출력값 NaN 위 셋 다 숫자타입

let nan = 'hello' / 5;
console.log(nan); // - 출력값 NaN
console.log(typeof nan); // - nan 의 타입을 보여준다. number

// 2. 문자 타입
const name1 = '손수호';
const name2 = '손수호';
const name3 = `손수호`; // 백틱 (옵션 + ₩)
const name = '손수호';
const age = 21;

console.log('안녕하세요 제 이름은 ' + name + ' 이고 나이는 ' + age + '입니다');

//       ||   백틱을 쓰면 편한 이유

console.log(`안녕하세요 제 이름은 ${name} 이고 나이는 ${age} 입니다.`);

const message = `백틱은 이렇게

쓸 수 있어`;

console.log(message);

const hello = '안녕하세요 제 이름은 손수호 입니다.';
console.log(hello);

const hello1 = "안녕하세요 제 이름은 \n '손수호' 입니다."; // \n = 개행
console.log(hello1); //                   *백슬래시*임

// '안녕하세요 제 이름은 \'손수호\' 입니다'
// 출력하면 : 안녕하세요 제 이름은 '손수호' 입니다 라고 뜸 \'  \'
// "안녕하세요 제 이름은 '손수호' 입니다"  - 도 가능 "" 사이에 '

console.log("안녕하세요 님들 '저는' 엄청난 `사람`입니다");
// 출력 : 안녕하세요 님들 '저는' 엄청난 `사람`입니다 로 뜬다
