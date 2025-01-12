const hasTooltip = [... document.getElementsByClassName('has-tooltip')];


hasTooltip.forEach((item, index) => {
    const div =  document.createElement('div');
    item.appendChild(div);
    div.innerHTML = item.getAttribute('title');
    div.classList.add('tooltip');
  })
  const title = [... document.getElementsByClassName('tooltip')];
hasTooltip.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      title.forEach((elem) => elem.classList.remove('tooltip_active'));
      let rect = item.getBoundingClientRect();
      console.log(rect.left);
      title[index].classList.add('tooltip_active');
      title[index].style.top = rect.top + 20 + 'px';
      title[index].style.left = rect.left + 'px';
      console.log(title[index].style.left);
    })
})
