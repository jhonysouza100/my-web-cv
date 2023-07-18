export default function actionInputDisable(arg) {
  const user = arg.user,
        label = arg.label,
        enable = arg.enable,
        disable = arg.disable,
        input = arg.input
        
  function ocultarUserEInput(label, disable, enable, user, input) {
    label.forEach((l, i) => {
      // Verificar si el estado del elemento se guardó previamente en el objeto localStorage
      const iconStatus = localStorage.getItem(`iconStatus-${i}`)
      if (iconStatus === 'checked') {
        enable[i].classList.remove('none')
        disable[i].classList.add('none')
        user[i].style.display = 'none'
        input[i].disabled = true
        input[i].style.caretColor = 'transparent'
        input[i].placeholder = 'disabled'
      }

      l.addEventListener('click', () => {
        if (enable[i].classList.contains('none')) {
          enable[i].classList.remove('none')
          disable[i].classList.add('none')
          localStorage.setItem(`iconStatus-${i}`, 'checked')
          user[i].style.display = 'none'
          
          input[i].disabled = true
          input[i].style.caretColor = "transparent"
          input[i].placeholder = 'disabled'
        } else {
          enable[i].classList.add('none')
          disable[i].classList.remove('none')
          localStorage.setItem(`iconStatus-${i}`, 'unchecked')
    
          let getSpan = input[i].getAttribute('span')
          let savedInput = localStorage.getItem(getSpan)
          user[i].style.display = 'block'
          input[i].disabled = false
          input[i].style.caretColor = "#fff"
          input[i].placeholder = savedInput || `Your ${getSpan}`
        }
      })
    })
  }
  ocultarUserEInput(label, disable, enable, user, input)

  window.onload = () => {
    // Si el objeto localStorage está vacío, no se hace nada
    Object.keys(localStorage).length === 0
    ? null
    :
    // Si el objeto localStorage tiene elementos, se recorren y se actualizan los estados correspondientes
    user.forEach((el, i) => {
    const iconStatus = localStorage.getItem(`iconStatus-${i}`);
    if (iconStatus === 'checked') {
      enable[i].classList.remove('none');
      disable[i].classList.add('none');
      user[i].style.display = 'none';
      input[i].disabled = true;
      input[i].style.caretColor = 'transparent';
      input[i].placeholder = 'disabled';
      }
    })
  }
}
// En este ejemplo, se utiliza localStorage.getItem() para obtener el estado de cada elemento guardado previamente en el objeto localStorage. Si un elemento ya está marcado como oculto, se actualizan las clases de CSS correspondientes para mostrar el botón de confirmación y ocultar el campo de entrada. Además, se utiliza localStorage.setItem() para guardar el estado actual del elemento en el objeto localStorage.

// En la función window.onload, se verifica si el objeto localStorage está vacío o no. Si hay elementos guardados previamente, se recorren y se actualizan los estados correspondientes para cada uno de ellos.