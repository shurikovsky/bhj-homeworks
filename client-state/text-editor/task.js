
const textArea = document.getElementById("editor");
const button = [... document.getElementsByTagName("button")][0];

window.addEventListener('beforeunload', () => 
        localStorage.text = textArea.value
)

window.addEventListener('DOMContentLoaded', () => 
        textArea.value = localStorage.getItem('text')
)

button.addEventListener('click', () => {
    textArea.value = "";
    localStorage.removeItem('text');
})