const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenuLink = document.querySelectorAll('[data-mob-nav]');

const toggleMenu = () => {
  menu.classList.toggle('visually-hidden');
};

mobMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('visually-hidden');
  });
});

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
