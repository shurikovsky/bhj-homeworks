
const textArea = document.getElementById("editor");
const button = [... document.getElementsByTagName("button")][0];

window.addEventListener('beforeunload', () => {
    {
        localStorage.text = textArea.value;
    }
})

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage) {
        textArea.value = localStorage.text
    }
})

button.addEventListener('click', () => {
    textArea.value = "";
    localStorage.clear();
})