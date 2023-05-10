export default function disable(arg) {
  const user = arg.user,
        label = arg.label,
        enable = arg.enable,
        disable = arg.disable,
        input = arg.input
        
  function ocultarUserEInput(label, disable, enable, user, input) {
    label.forEach((l, i) => {
      l.addEventListener('click', () => {
        if (enable[i].classList.contains('none')) {
          enable[i].classList.remove('none')
          disable[i].classList.add('none')
          localStorage.setItem('iconStatus', 'checked')
          user[i].style.display = 'none'
          
          input[i].disabled = true
          input[i].style.caretColor = "transparent"
          input[i].placeholder = ''
        } else {
          enable[i].classList.add('none')
          disable[i].classList.remove('none')
          localStorage.setItem('iconStatus', 'unchecked')
    
          user[i].style.display = 'block'
          input[i].disabled = false
          input[i].style.caretColor = "#fff"
          input[i].placeholder = localStorage.getItem('linkedin') || 'Your Linkedin'
        }
      })
    })
  }
  ocultarUserEInput(label, disable, enable, user, input)

    // Recuperar el estado del icono del localStorage al cargar la página
    // window.onload = () => {
    //   const iconStatus = localStorage.getItem('iconStatus')
    //   if (iconStatus === 'checked') {
    //     checkIcon.classList.remove('none')
    //     xIcon.classList.add('none');
    //     obj.userLinkedin.style.display = 'none'
    //     inputDisable.disabled = true
    //     inputDisable.style.caretColor = "transparent"
    //     inputDisable.placeholder = ''
    //   } else {
    //     checkIcon.classList.add('none')
    //     xIcon.classList.remove('none')
    //     obj.userLinkedin.style.display = 'block'
    //     inputDisable.disabled = false
    //     inputDisable.style.caretColor = "#fff"
    //     inputDisable.placeholder = localStorage.getItem('linkedin') || 'Your Linkedin'
    //   }
    // }
}