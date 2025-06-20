// const fruits = ['사과', '바나나', '수박'];
// // const fruits = new Array('사과', '바나나', '수박');
// console.log('fruits :', fruits);

// console.log(fruits[0]);
// fruits[2] = '딸기';
// console.log(fruits[2]);

// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// let fruits = ['사과', '딸기', '바나나'];

// // let apple = fruits[0];
// // let strawberry = fruits[1];
// // let banana = fruits[2];

// let [apple, strawberry, banana, ...others] = [
//   '사과',
//   '딸기',
//   '바나나',
//   'a',
//   'v',
//   'b',
//   'w',
//   'q',
//   's',
// ];

// console.log(apple);
// console.log(others);

let text = ['a', 'v', 'b'];
let num = ['1', '2', '5'];
console.log(...text, ...num);
