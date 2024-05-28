'use strict'
const reveals = document.querySelectorAll('.reveal')

function isVisible(el) {
   const { top, bottom } = el.getBoundingClientRect()

   if (bottom < 0) {
      return false
   }

   if (top > window.innerHeight) {
      return false
   }

   return true
}

window.addEventListener('scroll', () => reveals.forEach(el => isVisible(el) ?
   el.classList.add('reveal_active') :
   el.classList.remove('reveal_active')))
