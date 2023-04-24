const D = document
export default function showMenu(navMenu, toggleBtn) {
    D.addEventListener('click', e => { 
      // corta el comportamiento por defecto del elemento
      e.preventDefault()
      // si el evento se origino en toggleBtn, entonces...
      if(e.target === toggleBtn) navMenu.classList.toggle('show-menu') 
      // toogle() se utiliza para alternar una clase en un elemento HTML. Si la clase ya está presente en el elemento, entonces se elimina, de lo contrario se agrega al elemento.
    })
}