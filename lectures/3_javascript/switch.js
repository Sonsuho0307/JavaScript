'use strict';

// let subject = 'cs';
// switch (subject) {
//   case 'js':
//     console.log('js 하이');
//     let result = 3 + 2;
//     console.log(result);
//     break;

//   case 'css':
//     console.log('css 하이');
//     const result1 = 3 + 1;
//     console.log(result1);
//     break;
//   default:
//     console.log('없');
// }
// console.log('콘솔문 종료');

let score = prompt('점수를 입력하세요');
let value = Math.floor(score / 10);
console.log('score :', score);
let mamu = '시험보느라 고생 많았어요';

switch (value) {
  case 10:
  case 9:
    console.log(' A 학점 입니다.\n', mamu);
    break;

  case 8:
    console.log('B학점 입니다.', mamu);
    break;

  case 7:
    console.log('C학점 입니다.', mamu);
    break;

  case 6:
    console.log('D학점 입니다.', mamu);
    break;

  default:
    console.log('너에게 학점은 없다. 넌 인간 실격이야');
}

console.log('이제 종강이에요');
