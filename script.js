const catContainers = [...document.getElementsByClassName('cat-container')];

for (const cat of catContainers) {
  function animateCat() {
    cat.style.transform = 'translateY(-100px)';
    setTimeout(() => {
      cat.style.transform = 'translateY(0)';
    }, 1000);
  }

  function moveCatLeft() {
    cat.style.transform = 'translateX(-50px)';
  }

  function moveCatRight() {
    cat.style.transform = 'translateX(50px)';
  }

  setInterval(animateCat, 2000);
}