const D = document
export default function showMenu(navMenu, toggleBtn) {
    D.addEventListener('click', e => {
      if(e.target === toggleBtn) navMenu.classList.toggle('show-menu') 
    })
}