export default function(navMenu, navLinks) {
  // con el método forEach, y agregando un evento de click a cada uno de ellos.
  navLinks.forEach(el => {
    // cuando se hace clic en uno de los elementos, se ejecuta la función que remueve la clase show-menu del elemento navMenu.
    el.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });
}