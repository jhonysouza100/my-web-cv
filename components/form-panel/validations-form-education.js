const d = document
export default function educationValidations(obj) {
  d.addEventListener('keyup', e => {
    const $ = e.target.value
    localStorage.setItem('input', 'true')
    if(e.target === obj.title) {
      obj.userTitle.textContent = $.toUpperCase().trim()
      localStorage.setItem('title', $.toUpperCase().trim())
    }
    if(e.target === obj.institute) {
      let institute = $.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      obj.userInstitute.textContent = institute.trim()
      localStorage.setItem('institute', institute.trim())
    }
    if(e.target === obj.year) {
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
      obj.title.placeholder = savedTitle
    }
    if(savedInstitute) {
      obj.userInstitute.textContent = savedInstitute
      obj.institute.placeholder = savedInstitute
    }
    if(savedYear) {
      obj.userYear.textContent = savedYear
      obj.year.placeholder = savedYear
    }
  })
}