const form = document.forms.form;
const labelProgress = document.getElementById("progress");
form.addEventListener('submit', (e) => {
  e.preventDevault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  let data = new FormData(form);
  xhr.send(data);
  xhr.upload.addEventListener('progress', (e) => {
    labelProgress.value = e.progress;
  })
})