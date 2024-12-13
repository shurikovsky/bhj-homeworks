const cookiePicture = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
cookiePicture.onclick = function() {
clickerCounter.textContent = +clickerCounter.textContent + 1;
cookiePicture.width = (cookiePicture.width === 180)?200:180;
}