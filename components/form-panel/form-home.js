const d = document
export default function homeValidations(obj) {
  
  d.addEventListener('keyup', e => {
    let $ = e.target.value
    if(e.target === obj.inputName) {
      obj.userName.firstChild.textContent = $.toUpperCase().trim()
      localStorage.setItem('name', $.toUpperCase().trim())
    }
    if(e.target === obj.inputLastname) {
      obj.userName.lastChild.textContent = $.toUpperCase().trim()
      obj.menuName.textContent = $.toUpperCase().trim()
      localStorage.setItem('lastname', $.toUpperCase().trim())
    }
    if(e.target === obj.inputProfession) {
      let profession = $.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      obj.userProfession.textContent = profession.trim()
      localStorage.setItem('profession', profession.trim())
    }
  })
  
  d.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('name'),
          savedLastname = localStorage.getItem('lastname'),
          savedProfession = localStorage.getItem('profession')
    if(savedName) {
      obj.userName.firstChild.textContent = savedName
      obj.inputName.placeholder = savedName
    }
    if(savedLastname) {
      obj.userName.lastChild.textContent = savedLastname
      obj.menuName.textContent = savedLastname
      obj.inputLastname.placeholder = savedLastname
    }
    if(savedProfession) {
      obj.userProfession.textContent = savedProfession
      obj.inputProfession.placeholder = savedProfession
    }
  })
}