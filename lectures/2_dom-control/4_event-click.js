let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);
// console.log(btn2);

btn1.onclick = function () {
  alert('hello 프로퍼티 리스너');
};

btn2.addEventListener('click', helloEvent1);
function helloEvent1() {
  alert('addEventListner1');
}

btn2.addEventListener('click', function () {
  alert('addEventListner2');
});

// addEventListner 는 2 개의 함수 등록 가능

btn2.removeEventListener('click', helloEvent1);
