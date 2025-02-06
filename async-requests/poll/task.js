let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
       let answer = JSON.parse(xhr.responseText);
       let questionText = document.getElementById('poll__title');
       let optionAnswer = document.getElementById('poll__answers');
       let optionAnswerText = '';
       questionText.textContent = answer.data.title;
       for (let item of answer.data.answers) {
         let button = document.createElement('button');
         optionAnswer.append(button);
         button.outerHTML = '<button class="poll__answer">' + 
                             item + 
                           '</button>'
       }
       [... optionAnswer.getElementsByClassName('poll__answer')].forEach((item, index) => {
          item.addEventListener('click', () => {
            alert('«Спасибо, ваш голос засчитан!»');
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('vote=' + answer.id + '&answer=' + index);
            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === xhr.DONE) {
                  let surveyResult = JSON.parse(xhr.responseText).stat;
                  console.log(surveyResult);
                  for (let element of surveyResult) {
                    optionAnswerText += element.answer + ': ' + element.votes + ' голосов<br>';
                  }
                  optionAnswer.innerHTML = optionAnswerText;
                } 
            })
          })
        })
    }
})