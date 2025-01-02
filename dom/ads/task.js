const elementCase = [... document.getElementsByClassName('rotator__case')];
let i = 1;
let speed = 1000;
elementCase.forEach((item) => {
  item.style.color = item.getAttribute('data-color');
})
setInterval(() => {
    if (i === elementCase.length) {
      i = 1;  
      speed = elementCase[i].getAttribute('data-speed');
      elementCase[i-1].classList.add('rotator__case_active');
      elementCase[elementCase.length-1].classList.remove('rotator__case_active'); 
    } else { 
      speed = elementCase[i].getAttribute('data-speed');
      elementCase[i].classList.add('rotator__case_active');
      elementCase[i-1].classList.remove('rotator__case_active');
      i ++;
    }
}, speed);