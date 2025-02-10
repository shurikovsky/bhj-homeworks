const form = document.forms.form;
const labelProgress = document.getElementById("progress");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  let data = new FormData(form);
  xhr.upload.addEventListener('progress', (e) => {
    console.log(e.loaded);
    console.log(e.total);
    labelProgress.value = e.loaded / e.total
  })
  xhr.send(data);
})
