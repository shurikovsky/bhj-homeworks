const textReveal = [... document.getElementsByClassName('reveal')];
document.addEventListener('scroll', () => {
  textReveal.forEach(element => {
    if (element.getBoundingClientRect().top > 0 && element.getBoundingClientRect().bottom < window.innerHeight) {
        element.classList.toggle('reveal_active');
    };
  });
})