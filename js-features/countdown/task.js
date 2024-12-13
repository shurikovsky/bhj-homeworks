const timerOld = document.getElementById("timer");
const timerLink = setInterval(() => {
    timerOld.textContent -= 1; 
    if (timerOld.textContent === '0') {
      alert("Вы победили в конкурсе!");  
      clearInterval(timerLink);
    }
    
}, 1000);
