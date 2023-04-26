// Esta función toma dos argumentos: "sections" y "navMenu". "sections" es una colección de elementos del DOM, mientras que "navMenu" es un elemento del DOM que contiene enlaces de navegación.
export default function scrollActive(sections, navMenu) {
  // La función asigna la clase "active-link" al primer elemento <a> de "navMenu" para resaltar el primer enlace de navegación como activo. Luego, se agrega un evento de "scroll" al objeto global de la ventana ("window"), que ejecuta una función llamada "cb" en cada cambio de scroll.
  navMenu.querySelector('a').classList.add('active-link')
  function cb() {
    // Dentro de "cb", se obtiene la posición actual de desplazamiento de la página ("scrollY") a través de "window.pageYOffset".
    const scrollY = window.pageYOffset
    // Luego, se recorre cada elemento de "sections" y se obtiene su altura, posición superior y atributo de "id".
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50,
        sectionId = section.getAttribute("id")
      // Si el desplazamiento de la página está en la sección correspondiente, se agrega la clase "active-link" al enlace de navegación correspondiente dentro de "navMenu". Si no, se elimina la clase "active-link" del enlace de navegación correspondiente dentro de "navMenu".
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.add('active-link')
      } else {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.remove('active-link')
      }
    })
  }
  window.addEventListener("scroll", cb)
}

// En resumen, esta función implementa la funcionalidad de resaltado de enlaces de navegación activos en función de la posición de desplazamiento actual de la página.
