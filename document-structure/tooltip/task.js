const hasTooltip = [... document.getElementsByClassName('has-tooltip')];
const title = [];

hasTooltip.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(item, item.nextElementSibling);
      if ((!item.nextElementSibling) || (item.nextElementSibling.className !== 'tooltip')) {
        let div = document.createElement('div');
        item.insertAdjacentElement('afterend', div);
        div.outerHTML = '<div class="tooltip" style="left: 0; top: 0">' + item.getAttribute('title') + '</div>';
        title[index] = div;
      } 
        //if (item.getAttribute('title') === title[index].textContent) {
        //  title[index].classList.toggle('tooltip_active');
        //} else { 
          title.forEach((item) => {
            item.classList.remove('tooltip_active');
          })
          let rect = item.getBoundingClientRect();
          console.log(rect);//проверка какие координаты пишет
          title[index].classList.add('tooltip_active');
          title[index].style.top = rect.top + 20 + 'px';
          title[index].style.left = rect.left + 'px';
         
    });
})

