
var box=document.querySelector('#box');
document.addEventListener('keypress',function(){
  // console.log(event.key);
  // console.log(box.style.top, box.style.left);
  var boxRect= box.getBoundingClientRect();
  console.log(document.body.clientWidth);

  if(event.key == 'd' && (boxRect.right + boxRect.width <window.innerWidth)){
    console.log("right");
    box.style.left = (boxRect.x +100+'px');
  }
  if(event.key == 's' && (boxRect.bottom + boxRect.height <window.innerHeight)){
    box.style.top = (boxRect.y +100 + 'px');
  }
  if(event.key == 'w' && (boxRect.y >0)){
    box.style.top = (boxRect.y -100 + 'px');
  }
  if(event.key == 'a' && (boxRect.x >0)){
    box.style.left = (boxRect.x -100 + 'px');
  }

});

function catchMeIfYouCan() {

  function randomGenerator(upper,lower){
    return Math.floor((Math.random()* (upper-lower)) + lower);
  }

  var movement;
  box.addEventListener('mouseover', function(){
    // let mouseX = event.clientX;
    // let mouseY = event.clientY;
    clearInterval(movement);
    let boxX = box.getBoundingClientRect().x;
    let boxY = box.getBoundingClientRect().y;


    let newX = randomGenerator(0, window.innerWidth);
    let newY = randomGenerator(0, window.innerHeight);
    // console.log(newX);
    // console.log(newY);

    let moveX = 1;
    let moveY = 1;

    if (newX < boxX){
      moveX = -1;
    }

    if (newY < boxY){
      moveY = -1;
    }

    let secs=0;
    movement = setInterval(function(){
      boxX += moveX;
      boxY += moveY;
      secs +=1;
      box.style.left = boxX + 'px';
      box.style.top = boxY + 'px';

      if(box.getBoundingClientRect().right>window.innerWidth || box.getBoundingClientRect().bottom>window.innerHeight || boxX<0 || boxY<0){
        alert('Game Over' + '   Your Score :' + Math.floor(secs));
        clearInterval(movement);
      }

    }, 1);
    // box.style.left = newX + 'px';
    // box.style.top = newY + 'px';

  });
}
catchMeIfYouCan();
