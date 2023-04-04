// Funcion para mostrar en que parte del documento se encuentra
export default function linkActive(sections) {

  function linkAction() {
  const scrollY = window.pageYOffset
  sections.forEach( e => {
    const sectionHeight = e.offsetHeight,
          sectionTop = e.offsetTop - 50,
          sectionId = e.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', linkAction)
}