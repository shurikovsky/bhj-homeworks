const hasTooltip = [... document.getElementsByClassName('has-tooltip')];
let div = document.createElement('div');
hasTooltip.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.getAttribute('title') === div.textContent) {
        div.classList.toggle('tooltip_active');
      } else {
      div.classList.remove('tooltip_active');
      if ((!item.nextElementSibling) || (item.nextElementSibling.className !== 'tooltip')) {
        div = document.createElement('div');
        item.insertAdjacentElement('afterend', div);
        div.outerHTML = '<div class="tooltip" style="left: 0; top: 0"></div>';      
        div = item.nextElementSibling;
      }
        let rect = item.getBoundingClientRect();
        div.style.top = rect.top + 20 + 'px';
        div.style.left = rect.left + 'px';
        div.textContent = item.getAttribute('title');
        div.classList.add('tooltip_active');
        }
          
    });
})

