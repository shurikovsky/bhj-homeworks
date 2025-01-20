const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const form = document.forms['tasks__form'];
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  if (input.value.trim() === '') {
      return;
   }
  const newElement = document.createElement('div');
  newElement.innerHTML = 
  '<div class="task">' + 
    '<div class="task__title">' +
        input.value +
    '</div>' +
    '<a href="#" class="task__remove">&times;</a>' +
  '</div>';
  taskList.append(newElement);
  const elementRemove = newElement.querySelector(".task__remove");
  elementRemove.addEventListener('click', () => {
    elementRemove.parentElement.remove();
   });
})

