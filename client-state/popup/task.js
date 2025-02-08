const popup = document.getElementById("subscribe-modal");
const popupClose = [... document.getElementsByClassName("modal__close_times")][0];
popupClose.addEventListener('click', () =>{
    popup.classList.toggle('modal_active');
    document.cookie = 'modal=active';
})
window.addEventListener('DOMContentLoaded', () => {
  if (!document.cookie.includes('modal=active')) {
    popup.classList.add('modal_active');
  }
})