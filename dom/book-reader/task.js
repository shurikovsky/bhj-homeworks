const labelSize = [... document.getElementsByClassName('font-size')];
const labelTextColor = [... [... document.getElementsByClassName('book__control_color')][0].getElementsByClassName('color')];
const labeBackgroundColor = [... [... document.getElementsByClassName('book__control_background')][0].getElementsByClassName('color')];
const bookSize = [... document.getElementsByClassName('book')][0];
function selectCaption(labelMode, classMode, dataAttribute, bookAttribute) {
  labelMode.forEach((item, i, arrayLabel) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    if (!item.classList.contains(classMode)) {
      item.classList.add(classMode);
      arrayLabel.forEach((element, j) => {
        if (j != i) {
            element.classList.remove(classMode);
        }
      })
      if (item.getAttribute(dataAttribute)) {
        bookSize.className = 'book '+ bookAttribute + item.getAttribute(dataAttribute);
      } else {
        bookSize.className = 'book';
      }
    }
  })
})
}

selectCaption(labelSize, 'font-size_active', 'data-size', 'book_fs-');
selectCaption(labelTextColor, 'color_active', 'data-text-color', 'book_color-');
selectCaption(labeBackgroundColor, 'color_active', 'data-bg-color', 'book_bg-');
