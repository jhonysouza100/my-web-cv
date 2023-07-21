export default function actionToggleForm(form) {
  form.btn.addEventListener('click', e => {
    // console.log('form button clicked')
    e.preventDefault()
    click(form)
  })

  document.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault()
      click(form)
    }
  })
}

const click = (form) => {
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