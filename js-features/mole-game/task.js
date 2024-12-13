const killHoles = document.getElementById('dead'),
      blunders = document.getElementById('lost'),
      getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
   hole = getHole(i);
   getHole(i).onclick = function() {
     if (getHole(i).className.includes( 'hole hole_has-mole' )) {
       if (killHoles.textContent !== '10') {
         killHoles.textContent = +killHoles.textContent + 1; 
       } else {
        alert('Победа');
        killHoles.textContent = 0;
        blunders.textContent = 0;
       } 
    } else {
        if (blunders.textContent !== '5') {
            blunders.textContent = +blunders.textContent + 1; 
        } else {
           alert('Вы проиграли');
           blunders.textContent = 0;
           killHoles.textContent = 0;
        } 
     } 
   }  
}