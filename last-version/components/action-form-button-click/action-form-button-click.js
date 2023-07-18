export default function actionFormButtonClick(form) {
  document.addEventListener('click', e => {
    // console.log('form button clicked')
    if(e.target === form.btn) {
      const getCurrentIcon = () => form.btn.classList.contains('is-active') ? 'bx-chevron-right' : 'bx-chevron-left'
      form.panel.classList.toggle('is-active')
      form.btn.classList.toggle('is-active')
      form.bg.classList.toggle('is-active')
    
      if(getCurrentIcon() === 'bx-chevron-right') {
        form.btn.classList.remove('bx-chevron-left')
        form.btn.classList.add('bx-chevron-right')
      } else {
        form.btn.classList.add('bx-chevron-left')
        form.btn.classList.remove('bx-chevron-right')
      }
    }
  })
}