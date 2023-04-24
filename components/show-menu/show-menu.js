const D = document
export default function showMenu(navMenu, toggleBtn, navLinks) {
  if(toggleBtn && navMenu) {
    D.addEventListener('click', e => { 
      e.preventDefault()
      if(e.target === toggleBtn) navMenu.classList.toggle('show-menu') 
    })
  }
  /*==================== REMOVE MENU MOBILE ====================*/
  const hiddeMenu = () => {
    navMenu.classList.remove('show-menu')
  }
  // recorre el nodelist de links del menu y agrega un evento de click con una callbak encargada de ocultar el nav-menu
  navLinks.forEach( el => el.addEventListener('click', hiddeMenu()))
}