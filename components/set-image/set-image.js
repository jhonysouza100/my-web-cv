// Funcion para Cambiar la foto de perfil a eleccion del usuario
const D = document
export default function setImage(img) {
  D.addEventListener('click', e => {
    if(e.target.matches(`.${img.classList.value}`)) {

     const input = document.createElement('input')
     input.type = 'file'
     input.accept = 'image/*'
     input.addEventListener('change', (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
     })
     input.click();
      


    //   console.log('hola desde img.click()')
    //   inputImg.addEventListener('change',() => {
    //     console.log('hola desde el evento "change"')
    //     const file = inputImg.files[0],
    //           reader = new FileReader()
    //           .addEventListener('load', () => img.setAttribute('src', reader.result))
    //           .readAsDataURL(file)
    //   })
    }
  })
}