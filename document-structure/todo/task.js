const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
input.addEventListener('keyup', (event) => {
    event.preventDefault(); 
     if (event.key === 'Enter') {
       const newElement = document.createElement('div');
       newElement.innerHTML = 
       '<div class="task">' + 
         '<div class="task__title">' +
           input.value +
         '</div>' +
         '<a href="#" class="task__remove">&times;</a>'
        '</div>';
        console.log(newElement);
        taskList.append(newElement);
        const elementRemove = newElement.querySelector(".task__remove");
        elementRemove.addEventListener('click', () => {
          elementRemove.parentElement.remove();
         })
      } 
})

