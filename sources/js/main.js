
// ======================== ELEMENTS ========================
const $navToggle = document.getElementById('nav-toggle'),
      $navMenu = document.getElementById('nav-menu'),
      $navLinks = document.querySelectorAll('.nav_link'),
      $sections = document.querySelectorAll('section[id]'),
      $scrollTop = document.getElementById('scroll-top'),
      $themeButton = document.getElementById('theme-button'),
      $resumeButton = document.getElementById('resume-button')

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
function linkActive() {
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
window.addEventListener('scroll', linkActive)

// ======================== SHOW SCROLL TOP ========================
function showScrollTop() {
  // Cuando el desplazamiento es superior a la altura de la ventana gráfica 200, agrega la clase show-scroll al elemento $scrollTop
  (this.scrollY >= 200)
  ? $scrollTop.classList.add('show-scroll')
  : $scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', showScrollTop)

// ======================== DARK LIGHT THEME ========================
const darkTheme = 'dark-theme',
      iconTheme = 'bx-sun'

// Tema previamente seleccionado (si el usuario lo seleccionó)
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon')

// Validamos si el usuario eligió previamente un tema
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => $themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos, preguntamos el tema para saber si activamos el tema oscuro
if(selectedTheme) {
  // si se cumple la validacion le preguntamos al tema si activamos o desactivamos el tema oscuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  document.body.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](darkTheme)
}

// Activar/Desactivar el tema manualmente con el botón
$themeButton.addEventListener('click', () => {
  // Agregar o eliminar el tema oscuro /icono
  document.body.classList.toggle(darkTheme)
  $themeButton.classList.toggle(iconTheme)
  // Guardamos el tema y el icono actual que eligió el usuario
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// ======================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ========================
function scaleCv() {
  document.body.classList.add('scale-cv')
}

// ======================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ========================
function removeScaleCv() {
  document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/ 
// Area generada en PDF
const $areaCv = document.getElementById('area-cv')

// Html2pdf options
let opt = {
  margin: 0,
  filename: 'Jhon Smith CV.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' }
}

// Función para llamar a las opciones areaCv y Html2Pdf
function generateResume() {
  html2pdf($areaCv, opt)
}

// Cuando se hace clic en el botón, ejecuta las tres funciones
$resumeButton.addEventListener('click', () => {
  // 1. Se agrega la clase .scale-cv al cuerpo, donde reduce el tamaño de los elementos
  scaleCv()
  
  // 2. Se genera el PDF
  generateResume()
  
  // 3. La clase .scale-cv se elimina del cuerpo después de 5 segundos para volver al tamaño normal.
  setTimeout(removeScaleCv, 5000)
})