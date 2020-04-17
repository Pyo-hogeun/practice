let x = 0;
let y = 0;
let moveX = 0;
let moveY = 0;

function dragStart (e){
  console.log('드래그 시작');
  x = e.offsetX;
  y = e.offsetY;
}

function dragAllow (e){
  e.preventDefault();
}

function dragend(e){
  console.log('드래그 끝');
  console.log(e.offsetX, e.offsetY);
  let left = document.querySelector('.box').style.left;
  let top = document.querySelector('.box').style.top;

  left = Number(left.replace(/px$/, ''));
  top = Number(top.replace(/px$/, ''));

  moveX = e.offsetX - x + left;
  moveY = e.offsetY - y + top;

  document.querySelector('.box').style.left = moveX;
  document.querySelector('.box').style.top = moveY;
}