let btn = document.querySelector(
  '.btn-burger__menu--span',
);
let btnBlock = document.querySelector(
  '.btn-burger__menu',
);
let menu = document.querySelector(
  '.header__menu',
);
btnBlock.addEventListener('click', function () {
  menu.classList.toggle('burger-menu_active');
  btn.classList.toggle('active-burger');
});

form.addEventListener('submit', () => {
  submitted = true;
});

const anchors = document.querySelectorAll(
  'a[href*="#"]',
);

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor
      .getAttribute('href')
      .substr(1);

    document
      .getElementById(blockID)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  });
}
