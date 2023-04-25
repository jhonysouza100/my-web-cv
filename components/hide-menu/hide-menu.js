export default function(navMenu, navLinks) {
  navLinks.forEach(el => {
    el.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });
}