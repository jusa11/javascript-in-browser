'use strict'
const modals = Array.from(document.querySelectorAll('.modal'))
const closes = Array.from(document.querySelectorAll('.modal__close_times'))
const modalMain = document.getElementById('modal_main')
const btn = Array.from(document.querySelectorAll('.btn'))

modalMain.classList.add('modal_active')

closes.forEach((item, index) => item.onclick = () => modals[index].classList.remove('modal_active'));

btn.forEach((item, index) => {
   item.onclick = () => {
      modals[index].classList.remove('modal_active')
      modals[index + 1].classList.add('modal_active')
   }
})




