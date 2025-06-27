'uew strict';

// 객체 리터럴 문법

// const person = {
//   name: '손수호',
//   age: 25,
// };

// // 객체 생성자 문법
// const person1 = new Object();
// person1.name = '손수호';
// person1.age = 20;

// console.log(person);
// console.log(person1);

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hi');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('progrmaing');
    },
  },
};
console.log(person.name[1]); // Smith
console.log(person);
