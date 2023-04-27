export default function darkTheme(themeBtn) {
  
  const darkTheme = 'dark-theme',
        iconTheme = 'bx-sun'
  
  // Tema previamente seleccionado (si el usuario lo seleccionó)
  const selectedTheme = localStorage.getItem('selected-theme'),
        selectedIcon = localStorage.getItem('selected-icon')
  
  // Validamos si el usuario eligió previamente un tema
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
  
  // Validamos, preguntamos el tema para saber si activamos el tema oscuro
  if(selectedTheme) {
    // si se cumple la validacion le preguntamos al tema si activamos o desactivamos el tema oscuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
  }
  
  // Activar/Desactivar el tema manualmente con el botón
  document.addEventListener('click', (e) => {
    if(e.target === themeBtn) {
      // Agregar o eliminar el tema oscuro /icono
      document.body.classList.toggle(darkTheme)
      themeBtn.classList.toggle(iconTheme)
      // Guardamos el tema y el icono actual que eligió el usuario
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    }
  })
}