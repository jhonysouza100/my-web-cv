// Funcion para remover el menu cundo un link registra click
export default function removeMenu(navId, navLinks) {
  // Cuando ocurre un click en cualquier enlace de navegación, eliminamos la clase show-menu
  const linkAction = () => navId.classList.remove('show-menu')
  navLinks.forEach( e => e.addEventListener('click', linkAction))
}