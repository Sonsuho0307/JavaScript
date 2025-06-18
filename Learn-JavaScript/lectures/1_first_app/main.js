console.log('Hellod', 'asdad');

let str = 'Hellol Js';
let number = 30;
console.log('문자열: ', str);
console.log('number: ', number);

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('-=------');
sayHello();

let obj = {
  // 객체 - 객체는 변수와 함수를 가질 수 있다.
  number: 30, // 프로퍼티(속성) - 객체가 가지고 있는 변수, 객체가 변수를 가지고 있을 때 프로퍼티라고 부른다.
  sayHello: function () {
    // 함수
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.sayHello();
