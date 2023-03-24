
// ======================== ELEMENTS ========================
const $navToggle = document.getElementById('nav-toggle'),
      $navMenu = document.getElementById('nav-menu'),
      $navLinks = document.querySelectorAll('.nav_link'),
      $sections = document.getElementById('section[id]')

// ======================== SHOW MENU ========================
const showMenu = (toggleId, navId) => {
  // Validar que las variables existen
  if (toggleId && navId) {
      toggleId.addEventListener('click', () => {
      // Agregamos la clase show-menu a la etiqueta div con la clase nav_menu
      navId.classList.toggle('show-menu')
    })
  }
}
showMenu($navToggle, $navMenu)

// ======================== REMOVE MENU MOBILE ========================
function linkAction() {
  // Cuando hacemos click en cualquier enlace de navegación, eliminamos la clase show-menu
  $navMenu.classList.remove('show-menu')
}
$navLinks.forEach( nav => nav.addEventListener('click', linkAction))

// ======================== SECTION ACTIVE LINK ======================== 
function scrollAction() {
  const scrollY = window.pageYOffset
  $sections.forEach( current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
// ======================== SHOW SCROLL TOP ========================


// ======================== DARK LIGHT THEME ========================


// ======================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ========================


// ======================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ========================

