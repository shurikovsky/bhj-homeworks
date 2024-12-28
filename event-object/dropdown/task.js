const listOpen = document.querySelector('.dropdown__value');
const listSelection = document.querySelector('.dropdown__list');
const arrayLink = [... document.querySelectorAll('.dropdown__item')];
listOpen.addEventListener('click', function() {
    listSelection.classList.toggle('dropdown__list_active');
})
arrayLink.forEach((item) => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        listOpen.textContent = item.textContent;
        listSelection.classList.toggle('dropdown__list_active', false);
    })
})