const tabs = [... document.querySelectorAll('.tab')];
const tabsDescription = [... document.querySelectorAll('.tab__content')];
tabs.forEach((item, index, tabsArray) => {
  item.addEventListener('click', () => {
      tabsArray.forEach((item) => {
            item.classList.remove('tab_active');
        })
      item.classList.add('tab_active');
      tabsDescription.forEach((item) => {
        item.classList.remove('tab__content_active');
      })
      tabsDescription[index].classList.add('tab__content_active');
  })
})