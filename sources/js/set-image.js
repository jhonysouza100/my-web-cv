// Funcion para Cambiar la foto de perfil a eleccion del usuario
function setImage(img, inputImg, doc) {
  doc.addEventListener('click', e => {
     if(e.target.matches(`.${img.classList.value}`)) {
      inputImg.click();
     }
  })

  inputImg.addEventListener('change',() => {
  const file = inputImg.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    img.setAttribute('src', reader.result);
  });
  reader.readAsDataURL(file);
  })
}

export default setImage;