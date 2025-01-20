const hasTooltip = [... document.getElementsByClassName('has-tooltip')];


hasTooltip.forEach((item, index) => {
    let div = '<div class="tooltip"; style="left: 0; top: 0">' + item.getAttribute('title') + '</div>'
    item.insertAdjacentHTML("afterend", div);
  })

  const title = [... document.getElementsByClassName('tooltip')];
hasTooltip.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.getAttribute('title') === title[index].textContent) {
        title[index].classList.toggle('tooltip_active');
      } else { 
        title.forEach((element) => {
          element.classList.remove('tooltip_active');
        });
        let rect = item.getBoundingClientRect();
        title[index].classList.toggle('tooltip_active');
        title[index].style.top = rect.top + 20 + 'px';
        title[index].style.left = rect.left + 'px';
      };
    });
})

