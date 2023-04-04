// Funcion para Cambiar la foto de perfil a eleccion del usuario
export default function setImage(img, inputImg, doc) {
  doc.addEventListener('click', e => {
     if(e.target.matches(`.${img.classList.value}`)) {
      inputImg.click();
     }
  })

  inputImg.addEventListener('change',() => {
  const file = inputImg.files[0],
        reader = new FileReader()
        .addEventListener('load', () => img.setAttribute('src', reader.result))
        .readAsDataURL(file)
  })
}