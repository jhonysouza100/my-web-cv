export default function actionSetImage(img) {
  document.addEventListener('click', e => {

    if(e.target.matches(`.${img.classList.value}`)) {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.addEventListener('change', (event) => {
       const file = event.target.files[0]
       const reader = new FileReader()
       reader.addEventListener('load', () => {
         img.setAttribute('src', reader.result)
         localStorage.setItem('profileImage', reader.result)
       })
       reader.readAsDataURL(file)
      })  
      input.click();
    }

  })

  const savedImage = localStorage.getItem('profileImage');
  if (savedImage) {
    img.setAttribute('src', savedImage);
  }

}