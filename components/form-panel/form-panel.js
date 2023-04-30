const d = document
export default function formValidations(profName, profProfession, formName, formLastname, formProfession) {

  console.log(profName.firstChild.textContent)
  console.log(profProfession.textContent)
  console.log(formName)
  console.log(formLastname)
  console.log(formProfession)
  d.addEventListener('keyup', e => {
    let $ = e.target.value
    if(e.target === formName) {
      profName.firstChild.textContent = $.toUpperCase().trim()
      localStorage.setItem('name', $.toUpperCase().trim())
    }
    if(e.target === formLastname) {
      profName.lastChild.textContent = $.toUpperCase().trim()
      localStorage.setItem('lastname', $.toUpperCase().trim())
    }
    if(e.target === formProfession) {
      let profession = $.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      profProfession.textContent = profession.trim()
      localStorage.setItem('profession', profession.trim())
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