const d = document
export default function contactsValidations(profEmail, profPhone, proflinkedin, profGithub, profWebsite, formEmail, formPhone, formLinkedin, formGithub, formWwebsite) {
  d.addEventListener('keyup', e => {
    let $ = e.target.value.toLowerCase().trim()
    console.log($)
    if(e.target === formEmail) {
      profEmail.lastChild.data = $
      localStorage.setItem('email', $)
    } 
    
    if(e.target === formPhone) {
      profPhone.lastChild.data = e.target.value.trim()
      localStorage.setItem('phone', e.target.value.trim())
    } 
      
    if(e.target === formLinkedin) {
      proflinkedin.lastChild.data = $
      localStorage.setItem('linkedin', $)
    }
      
    if(e.target === formGithub) {
      profGithub.lastChild.data = e.target.value.trim()
      localStorage.setItem('github', e.target.value.trim())
    }

    if(e.target === formWwebsite) {
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
      profEmail.lastChild.data = savedEmail
      profEmail.href = `mailto:${savedEmail}`
      formEmail.placeholder = savedEmail
    } 
    
    if(savedPhone) {
      profPhone.lastChild.data = savedPhone
      profPhone.href = `https://api.whatsapp.com/send?phone=${savedPhone}&text=Hello`
      formPhone.placeholder = savedPhone
    }  

    if(savedLinkedin) {
      proflinkedin.lastChild.data = savedLinkedin
      proflinkedin.href = `https://linkedian.com/in/${savedLinkedin}`
      formLinkedin.placeholder = savedLinkedin
    }

    if(savedGithub) {
      profGithub.lastChild.data = savedGithub
      profGithub.href = `https://github.com/${savedGithub}`
      formGithub.placeholder = savedGithub
    }

    if(savedWebsite) {
      profWebsite.href = savedWebsite
      formWwebsite.placeholder = savedWebsite
    }
  })
  
}