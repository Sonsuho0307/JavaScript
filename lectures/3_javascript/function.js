'use strict';

// 함수 선언식

// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 손수호, 나이: 25살');
// }

// 함수 표현식
const sayHello = function (name, age) {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름: ${name}, 나이: ${age}살`);
};

sayHello('짐코딩', 20); // 함수 호출
sayHello('손수호', 23);

function sum(num1, num2) {
  return num1 + num2; //   let result = num1 + num2;  개행  return result;
}
let result = sum(5, 3);
console.log(result);

function aFunc() {
  let name = '손수호';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('name : ', name);
    console.log('age : ', age);
    console.log('job : ', job);
  }
  bFunc();
  console.log('name : ', name);
  console.log('age : ', age);
  // console.log('job : ', job);
}
aFunc();
