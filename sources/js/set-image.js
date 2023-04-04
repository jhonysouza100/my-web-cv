// Funcion para Cambiar la foto de perfil a eleccion del usuario
function setImage(img, inputImg, doc) {
  console.log('Dentro de la funcion setImage')
  console.log(doc)
  console.log(img)
  doc.addEventListener('click', e => {
     if(e.target.matches('.user-image')) {
      inputImg.click();
      console.log('Cice click')
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