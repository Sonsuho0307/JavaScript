// 1) get 메서드
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);

console.log('스쿼트 : ', items[0]);
console.log('벤치프레스 : ', items[1]); // 벤치프레스
console.log('데드리프트 : ', items[2]);

let listLi = document.getElementsByTagName('li');
console.log(listLi);

// 2) HTML 요소 쿼리

let h2 = document.querySelector('#title');
console.log('h2 : ', h2);

let item = document.querySelector('.item');
console.log('item : ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll[0] : ', itemAll[0]);
console.log('itemAll[1] : ', itemAll[1]);
console.log('itemAll[2] : ', itemAll[2]);

// h2.textContent = '운동!!';

// console.log(h2.textContent);

// // h2.innerHTML = '<span>운동@@</span>';

// document.querySelector('body').innerHTML = '<span>운동</span>';
//  // innerHTML 을 사용 하면 ㄴbody 전부 다 지워지고    ㄴ 값으로 치환되니 사용시 주의

let input = document.querySelector('input');
input.setAttribute('placeholder', '입력해주세요');
input.removeAttribute('placeholder');
// input.setAttribute('required');
// input.removeAttribute('required');

let helloItem = document.querySelector('.hello');
console.log('hello : ', helloItem);

// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'green';

helloItem.classList.add('dark', 'one', 'hi');
helloItem.classList.remove('dark');
