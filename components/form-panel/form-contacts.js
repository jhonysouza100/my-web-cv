const d = document
export default function contactsValidations(obj) {
  
  // REGEX
  const 
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex = /^[\d\s]+$/

  // SPAN ELEMENTS
  const $spanEmail = d.querySelector('[email]'),
        $spanPhone = d.querySelector('[phone]')
        
  d.addEventListener('keyup', e => {
    
    // Guarda las teclas pulsadas y las pasa a minuscula || sino, solo las teclas pulsadas
    let $ = e.target.value.toLowerCase().trim() || e.target.value.trim()
      
      if(e.target === obj.inputEmail) {
        if(emailRegex.test(e.target.value)) {
          obj.userEmail.lastChild.data = $
          localStorage.setItem('email', $)
          $spanEmail.classList.remove('is-active')
        } else {
          $spanEmail.classList.add('is-active')
        }
      } 
      
      if(e.target === obj.inputPhone) {
        if(phoneRegex.test(e.target.value)) {
          obj.userPhone.lastChild.data = e.target.value.trim()
          localStorage.setItem('phone', e.target.value.trim())
          $spanPhone.classList.remove('is-active')
        } else {
          $spanPhone.classList.add('is-active')
        }
      }
        
      if(e.target === obj.inputLinkedin) {
        obj.userLinkedin.lastChild.data = $
        localStorage.setItem('linkedin', $)
      }
        
      if(e.target === obj.inputGithub) {
        obj.userGithub.lastChild.data = e.target.value.trim()
        localStorage.setItem('github', e.target.value.trim())
      }
  
      if(e.target === obj.inputWebsite) {
        localStorage.setItem('website', $)
      }
      
    })
    
  const labelDisable = document.querySelector('.label_disable')
  const checkIcon = labelDisable.querySelector('.bx-check')
  const xIcon = labelDisable.querySelector('.bx-x')
  
  labelDisable.addEventListener('click', () => {
    if (checkIcon.classList.contains('none')) {
      checkIcon.classList.remove('none')
      xIcon.classList.add('none')
      localStorage.setItem('iconStatus', 'checked')
      obj.userLinkedin.style.display = 'none'
      console.log('none')
    } else {
      checkIcon.classList.add('none')
      xIcon.classList.remove('none')
      obj.userLinkedin.classList.remove('none')
      localStorage.setItem('iconStatus', 'unchecked')
      console.log('block')
    }
  });
  
  // Recuperar el estado del icono del localStorage al cargar la página
  window.onload = () => {
    const iconStatus = localStorage.getItem('iconStatus')
    if (iconStatus === 'checked') {
      checkIcon.classList.remove('none')
      xIcon.classList.add('none');
    } else {
      checkIcon.classList.add('none')
      xIcon.classList.remove('none')
    }
  }
    
  
  d.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email'),
          savedPhone = localStorage.getItem('phone'),
          savedLinkedin = localStorage.getItem('linkedin'),
          savedGithub = localStorage.getItem('github'),
          savedWebsite = localStorage.getItem('website')
    if(savedEmail) {
      obj.userEmail.lastChild.data = savedEmail
      obj.userEmail.href = `mailto:${savedEmail}`
      obj.inputEmail.placeholder = savedEmail
    } 
    
    if(savedPhone) {
      obj.userPhone.lastChild.data = savedPhone
      obj.userPhone.href = `https://api.whatsapp.com/send?phone=${savedPhone}&text=Hello`
      obj.inputPhone.placeholder = savedPhone
    }  

    if(savedLinkedin) {
      obj.userLinkedin.lastChild.data = savedLinkedin
      obj.userLinkedin.href = `https://linkedian.com/in/${savedLinkedin}`
      obj.inputLinkedin.placeholder = savedLinkedin
    }

    if(savedGithub) {
      obj.userGithub.lastChild.data = savedGithub
      obj.userGithub.href = `https://github.com/${savedGithub}`
      obj.inputGithub.placeholder = savedGithub
    }

    if(savedWebsite) {
      obj.userWebsite.href = savedWebsite
      obj.inputWebsite.placeholder = savedWebsite
    }
  })
  
}