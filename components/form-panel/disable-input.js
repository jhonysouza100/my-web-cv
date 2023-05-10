export default function disable(obj, input) {
  const linkedin = obj.user.linkedin,
        github = obj.userGithub,
        website = obj.userWebsite,
        label = input.label,
        enabled = input.enabled,
        disable = input.disable
  function cb(label, disable, enable, user, input) {
    label.forEach(el => {
        el.addEventListener('click', () => {
          if (enable.classList.contains('none')) {
            enable.classList.remove('none')
            disable.classList.add('none')
            localStorage.setItem('iconStatus', 'checked')
            obj.userLinkedin.style.display = 'none'
            
            inputDisable.disabled = true
            inputDisable.style.caretColor = "transparent"
            inputDisable.placeholder = ''
          } else {
            enable.classList.add('none')
            disable.classList.remove('none')
            localStorage.setItem('iconStatus', 'unchecked')
    
            obj.userLinkedin.classList.remove('none')
            obj.userLinkedin.style.display = 'block'
            inputDisable.disabled = false
            inputDisable.style.caretColor = "#fff"
            inputDisable.placeholder = localStorage.getItem('linkedin') || 'Your Linkedin'
          }
        });
      })
  }
  
}