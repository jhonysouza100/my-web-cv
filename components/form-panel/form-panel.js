const d = document
export default function formValidations(profName, profProfession, formName, formLastname, formProfession) {

  console.log(profName.firstChild.textContent)
  console.log(profProfession.textContent)
  console.log(formName)
  console.log(formLastname)
  console.log(formProfession)
  d.addEventListener('keyup', e => {
    if(e.target === formName) {
      profName.firstChild.textContent = e.target.value.toUpperCase()
      localStorage.setItem('name', e.target.value.toUpperCase())
    }
    if(e.target === formLastname) {
      profName.lastChild.textContent = e.target.value.toUpperCase()
      localStorage.setItem('lastname', e.target.value.toUpperCase())
    }
    if(e.target === formProfession) {
      profProfession.textContent = e.target.value
      localStorage.setItem('profession', e.target.value)
    }
  })
  
  d.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('name'),
          savedLastname = localStorage.getItem('lastname'),
          savedProfession = localStorage.getItem('profession')
    if(savedName) {
      profName.firstChild.textContent = savedName
      formName.placeholder = savedName
    }
    if(savedLastname) {
      profName.lastChild.textContent = savedLastname
      formLastname.placeholder = savedLastname
    }
    if(savedProfession) {
      profProfession.textContent = savedProfession
      formProfession.placeholder = savedProfession
    }
  })
  
  // if(e.key === 'Escape') {} // restaura cundo se presiona esc
}