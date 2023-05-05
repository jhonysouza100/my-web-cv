const d = document
export default function educationValidations(obj) {
  d.addEventListener('keyup', e => {
    const $ = e.target.value
    localStorage.setItem('input', 'true')
    if(e.target === obj.inputTitle) {
      obj.userTitle.textContent = $.toUpperCase().trim()
      localStorage.setItem('title', $.toUpperCase().trim())
    }
    if(e.target === obj.inputInstitute) {
      let institute = $.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      obj.userInstitute.textContent = institute.trim()
      localStorage.setItem('institute', institute.trim())
    }
    if(e.target === obj.inputYear) {
      obj.userYear.textContent = $
      localStorage.setItem('year', $)
    } 
  })
  d.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('title'),
          savedInstitute = localStorage.getItem('institute'),
          savedYear = localStorage.getItem('year'),
          input = localStorage.getItem('input')
    if(input) {
      
    }
    if(savedTitle) {
      obj.userTitle.textContent = savedTitle
      obj.inputTitle.placeholder = savedTitle
    }
    if(savedInstitute) {
      obj.userInstitute.textContent = savedInstitute
      obj.inputInstitute.placeholder = savedInstitute
    }
    if(savedYear) {
      obj.userYear.textContent = savedYear
      obj.inputYear.placeholder = savedYear
    }
  })
}