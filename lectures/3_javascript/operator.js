// 문자열 병합
console.log('Hello' + 'world');
console.log('3' + 3); // number -> string
console.log(typeof ('3' + 3));
console.log('3' + 5 + 8); // 358
console.log(3 + 5 + '8'); // 88

//

// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(9 % 2); // 9 에서 2 를 나누고 남은 값 = 1

// let number = prompt('숫자를 입력하세요');
// if (number % 2 === 1) {
//   alert('홀수입니다');
// } else {
//   alert('짝수네요');
// }

// let result = x + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);

// let a = 30;
// let b = '30';
// console.log(a == b); // true
// console.log(a === b); // flase

let x = 10;
let y = 20;
x += y; // x = x + y;
result = 0;
for (i = 1; i <= 10; i++) {
  result += i;
}
console.log('result: ', result);
