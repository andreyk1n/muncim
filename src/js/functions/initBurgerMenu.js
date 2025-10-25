export function initBurgerMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;
    const buttonsHeader = document.querySelectorAll('.button__header');

    burger.addEventListener('click', (event) => {
      event.stopPropagation();
      burger.classList.toggle('active');
      nav.classList.toggle('active');

      buttonsHeader.forEach((btn) => {
        btn.classList.add('_anim');
        setTimeout(() => btn.classList.remove('_anim'), 2400);
      });

      if (burger.classList.contains('active')) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !burger.contains(event.target)) {
        if (nav.classList.contains('active')) {
          burger.classList.remove('active');
          nav.classList.remove('active');
          body.classList.remove('no-scroll');
        }
      }
    });
  });
}
