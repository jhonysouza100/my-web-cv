const d = document
export default function homeValidations(obj) {
  
  d.addEventListener('keyup', e => {
    let $ = e.target.value
    if(e.target === obj.formName) {
      obj.profName.firstChild.textContent = $.toUpperCase().trim()
      localStorage.setItem('name', $.toUpperCase().trim())
    }
    if(e.target === obj.formLastname) {
      obj.profName.lastChild.textContent = $.toUpperCase().trim()
      obj.menuName.textContent = $.toUpperCase().trim()
      localStorage.setItem('lastname', $.toUpperCase().trim())
    }
    if(e.target === obj.formProfession) {
      let profession = $.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      obj.profProfession.textContent = profession.trim()
      localStorage.setItem('profession', profession.trim())
    }
  })
  
  d.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('name'),
          savedLastname = localStorage.getItem('lastname'),
          savedProfession = localStorage.getItem('profession')
    if(savedName) {
      obj.profName.firstChild.textContent = savedName
      obj.formName.placeholder = savedName
    }
    if(savedLastname) {
      obj.profName.lastChild.textContent = savedLastname
      obj.menuName.textContent = savedLastname
      obj.formLastname.placeholder = savedLastname
    }
    if(savedProfession) {
      obj.profProfession.textContent = savedProfession
      obj.formProfession.placeholder = savedProfession
    }
  })
  
  // if(e.key === 'Escape') {} // restaura cundo se presiona esc
  // Falta agregar validaciones de length y demas campos del documento...
}