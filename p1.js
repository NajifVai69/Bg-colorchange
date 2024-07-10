const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (b1) {
  console.log(b1);
  b1.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    body.style.backgroundColor = e.target.id;
  });
});
