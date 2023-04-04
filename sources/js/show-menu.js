// Funcion para mostrar u ocultar el menu
export default function showMenu(toggleId, navId) {
  // Validar que las variables existen
  if (toggleId && navId) {
      toggleId.addEventListener('click', () => {
      // Alterna la clase show-menu para mostrar u ocultar el elemento menu
      navId.classList.toggle('show-menu')
    })
  }
}