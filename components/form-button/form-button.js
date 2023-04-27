export default function formBtn(btn, panel) {
  document.addEventListener('click', e => {
    if(e.target === btn) {
      const getCurrentIcon = () => btn.classList.contains('is-active') ? 'bx-chevron-right' : 'bx-chevron-left'
      panel.classList.toggle('is-active')
      btn.classList.toggle('is-active')
    
      if(getCurrentIcon() === 'bx-chevron-right') {
        btn.classList.remove('bx-chevron-left')
        btn.classList.add('bx-chevron-right')
      } else {
        btn.classList.add('bx-chevron-left')
        btn.classList.remove('bx-chevron-right')
      }
    }
  })
}