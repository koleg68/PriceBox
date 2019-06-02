/*jshint esnext: true */
let btn = document.querySelectorAll('._btn');

   for (let i=0; i < btn.length; i++) {
      btn[i].addEventListener('mouseover', function () {
         this.classList.add('border');
      });
   }

   for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('mouseout', function () {
         this.classList.remove('border');
      });
   }
