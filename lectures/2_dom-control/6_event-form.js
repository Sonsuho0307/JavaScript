let inputbox = document.querySelector('#input-box');
let image = document.querySelector('img');
// inputbox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputbox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// inputbox.addEventListener('keyup', function (event) {
//   console.log('event.key', event.key);
//   console.log('event.keyCode', event.keyCode);
// });

// inputbox.addEventListener('focus', function (event) {
//   alert('focus');
// });

// inputbox.addEventListener('blur', function (event) {
//   alert('blur');
// });

inputbox.addEventListener('change', function (event) {
  alert('change');
});

image.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../img/apple.jpg';
});
