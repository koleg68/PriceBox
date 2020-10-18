/*jshint esnext: true */

let butt = document.getElementById('btn-menu');
butt.onclick = function () {
   let a = document.getElementsByClassName('menu-nav');
   let wrap = document.querySelector('#btn-menu');

   for (let i = 0; i < a.length; i++) {
      a[i].classList.toggle('menu-nav-active');
      wrap.classList.toggle('noMagic');
   }
};

let enter = document.getElementById('in');
enter.onclick = function () {
   let formEnter = document.getElementsByTagName('form')[0];
   if (formEnter.style.display == 'block') {
      formEnter.style.display = 'none';
      enter.innerText = 'Войти';
   } else {
      formEnter.style.display = 'block';
      enter.innerText = 'Отмена';
   }

};

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

   // кнопка наверх

   let top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
   let delay = 1000; // Задержка прокрутки
   $(document).ready(function () {
      $(window).scroll(function () { // При прокрутке попадаем в эту функцию
         /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
         if ($(this).scrollTop() > top_show) $('#top').fadeIn();
         else $('#top').fadeOut();
      });
      $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
         /* Плавная прокрутка наверх */
         $('body, html').animate({
            scrollTop: 0
         }, delay);
      });
   });
