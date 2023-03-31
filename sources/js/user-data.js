const $nombre = document.querySelectorAll('.user-nombre'),
      $apellido = document.querySelector('.user-apellido').firstChild,
      $profesion = document.querySelector('.user-profesion').firstChild,
      $direccion = document.querySelector('.user-direccion').lastChild,
      $email = document.querySelector('.user-email').lastChild,
      $telefono = document.querySelector('.user-telefono').lastChild,
      $web = document.querySelector('.user-web').lastChild,
      // Sociales
      $linkedin = document.querySelector('.user-linkedin').lastChild,
      $github = document.querySelector('.user-github').lastChild,
      $facebook = document.querySelector('.user-facebook').lastChild,
      $instagram = document.querySelector('.user-instagram').lastChild,
      $twitter = document.querySelector('.user-twitter').lastChild,
      // Perfil
      $perfil = document.querySelector('.user-perfil').firstChild,
      // Educacion
      $educacionTitulo = document.querySelectorAll('.user-educacion-titulo'),
      $educacionInstituto = document.querySelectorAll('.user-educacion-instituto'),
      $educacionFecha = document.querySelectorAll('.user-educacion-fecha'),
      // Lenguajes
      $lenguajes = document.querySelectorAll('.user-lenguajes'),
      //Experiencia
      $experienciaArea = document.querySelectorAll('.user-experiencia-area'),
      $experienciaFecha = document.querySelectorAll('.user-experiencia-fecha'),
      $experienciaCompania = document.querySelectorAll('.user-experiencia-compania'),
      $experienciaDescripcion = document.querySelectorAll('.user-experiencia-descripcion'),
      // Certificados
      $certificado = document.querySelectorAll('.user-certificado'),
      $certificadoDescripcion = document.querySelectorAll('.user-certificado-descripcion'),
      // Referencias
      $referenciaCargo = document.querySelectorAll('.user-referencia-cargo'),
      $referenciaNombre = document.querySelectorAll('.user-referencia-nombre'),
      $referenciaTelefono = document.querySelectorAll('.user-referencia-telefono'),
      $referenciaEmail = document.querySelectorAll('.user-referencia-email'),
      // Idiomas
      $idiomas = document.querySelectorAll('.user-idiomas'),
      // Foto de pefil
      $foto = document.querySelector('.user-foto ')

// Funcion para Cambiar la foto de perfil a eleccion del usuario
const $inputFoto = document.querySelector('#input-foto');
$foto.addEventListener('click', () => {
  $inputFoto.click();
});
$inputFoto.addEventListener('change', () => {
  const file = $inputFoto.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    $foto.setAttribute('src', reader.result);
  });
  reader.readAsDataURL(file);
});

// Funcion para completar los formularios
function actualizarTexto(elemento, input) {
  input.addEventListener('input', (event) => {
    // Si el elemento es un $nombre NodeList de elementos con la clase .user-nombre
    if($nombre) { // recorre el elemento apuntando al primer nodo hijo de este y asignandole el event.target.value
      elemento.forEach( e => e.firstChild.textContent = event.target.value )
    } else {
      elemento.textContent = event.target.value;
    }
  });
}

// Elemento input nombre
const $inputNombre = document.querySelector('#input-nombre');
actualizarTexto($nombre, $inputNombre);

/*
console.log($nombre)
$nombre.forEach( e =>  e.firstChild.textContent = 'Jaki')

$apellido.textContent = 'Pereira'
$profesion.textContent = 'Diseñadora Grafica'
$direccion.textContent = 'Misiones - Argentina'
$email.textContent = 'tuturrita2023@gmail.com'
$telefono.textContent = '+54 12345678'
$linkedin.textContent = '@JakiPereira'
$github.textContent = 'tuturrita100'
$facebook.textContent = 'Jaki Pereira'
$instagram.textContent = 'tuturrita'
$twitter.textContent = 'tuturrita'
// Perfil
$perfil.textContent = `Soy creativa y apasionada con habilidades en el diseño de logotipos, folletos, carteles, anuncios publicitarios y sitios web. Siempre estoy al tanto de las últimas tendencias en diseño. Soy organizada, eficiente y capaz de manejar múltiples proyectos a la vez mientras mantengo altos estándares de calidad. Me encanta colaborar con clientes y colegas para asegurarme de que el trabajo final cumpla con sus expectativas y necesidades.`
*/
$github.parentNode.style.display = "none" // Oculto el nodo padre de $github.lastChild
$twitter.parentNode.style.display = "none"
$web.parentNode.setAttribute('href', 'hola mundo')


// Funcion para completar los enlaces
function cambiarHref(elemento, nuevoHref) { // Recibe como parámetros el elemento y el nuevo valor para el atributo href, y luego asignarle el nuevo valor al elemento
  elemento.parentNode.setAttribute('href', nuevoHref);
}
cambiarHref($web, 'nuevo enlace') // $inputEnlace