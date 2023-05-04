const d = document
export default function contactsValidations(obj) {

  d.addEventListener('keyup', e => {
    let $ = e.target.value.toLowerCase().trim() || e.target.value.trim()

    if(e.target === obj.formEmail) {
      const mensajeError = document.createElement("span");
      mensajeError.textContent = "Por favor ingrese un correo electrónico válido";
      mensajeError.classList.add("mensaje-error-email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(emailRegex.test(e.target.value)) {
        obj.profEmail.lastChild.data = $
        document.parentNode.insertBefore(mensajeError, obj.formEmail);
        localStorage.setItem('email', $)
      } else { 
        console.error('Email inválido');
        mensajeError.remove();
      }
    } 
    
    if(e.target === obj.formPhone) {
      obj.profPhone.lastChild.data = e.target.value.trim()
      localStorage.setItem('phone', e.target.value.trim())
    }
      
    if(e.target === obj.formLinkedin) {
      obj.profLinkedin.lastChild.data = $
      localStorage.setItem('linkedin', $)
    }
      
    if(e.target === obj.formGithub) {
      obj.profGithub.lastChild.data = e.target.value.trim()
      localStorage.setItem('github', e.target.value.trim())
    }

    if(e.target === obj.formWebsite) {
      localStorage.setItem('website', $)
    }
  
  })
  
  d.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email'),
          savedPhone = localStorage.getItem('phone'),
          savedLinkedin = localStorage.getItem('linkedin'),
          savedGithub = localStorage.getItem('github'),
          savedWebsite = localStorage.getItem('website')
    if(savedEmail) {
      obj.profEmail.lastChild.data = savedEmail
      obj.profEmail.href = `mailto:${savedEmail}`
      obj.formEmail.placeholder = savedEmail
    } 
    
    if(savedPhone) {
      obj.profPhone.lastChild.data = savedPhone
      obj.profPhone.href = `https://api.whatsapp.com/send?phone=${savedPhone}&text=Hello`
      obj.formPhone.placeholder = savedPhone
    }  

    if(savedLinkedin) {
      obj.profLinkedin.lastChild.data = savedLinkedin
      obj.profLinkedin.href = `https://linkedian.com/in/${savedLinkedin}`
      obj.formLinkedin.placeholder = savedLinkedin
    }

    if(savedGithub) {
      obj.profGithub.lastChild.data = savedGithub
      obj.profGithub.href = `https://github.com/${savedGithub}`
      obj.formGithub.placeholder = savedGithub
    }

    if(savedWebsite) {
      obj.profWebsite.href = savedWebsite
      obj.formWebsite.placeholder = savedWebsite
    }
  })
  
}