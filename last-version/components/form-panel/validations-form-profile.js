const d = document
export default function profileValidations(obj) {
  d.addEventListener('keyup', e => {
    const $ = e.target.value
    if(e.target === obj.textProfile) {
      obj.userProfile.textContent = $
      localStorage.setItem('profile', $)
    }
  })
  d.addEventListener('DOMContentLoaded', () => {
    const savedProfile = localStorage.getItem('profile')
    if(savedProfile) {
      obj.userProfile.textContent = savedProfile
      obj.textProfile.placeholder = savedProfile
    }
  })
}