const html = document.querySelector('html')
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) { 
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
      menuLink.addEventListener("click", () => {
         burger.classList.remove('active')
   menu.classList.remove('active')
         html.classList.remove('scroll-lock')
})
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top-120 + pageYOffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault(); 
      }
   }
}

burger.addEventListener("click", () => {
   burger.classList.toggle('active')
   menu.classList.toggle('active')
   html.classList.toggle('scroll-lock')
})



