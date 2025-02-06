let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
if(xhr.readyState === 4) {
let exchangeRates = JSON.parse(xhr.response).response.Valute;
const items = document.getElementById('items');
const img = document.getElementById('loader');
img.classList.toggle('loader_active');
for (const item in exchangeRates) {
    let div = document.createElement('div');
    items.append(div);
    div.innerHTML = '<div class="item__code">' + 
    exchangeRates[item].CharCode + 
        '</div>' + 
        '<div class="item__value">' + 
        exchangeRates[item].Value + 
         '</div>' + 
        '<div class="item__currency">' +
            'руб.' +
        '</div>'
    div.classList.add('item');    
}
};
}