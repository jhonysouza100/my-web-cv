// $github.parentNode.style.display = "none" // Oculto el nodo padre de $github.lastChild
// $twitter.parentNode.style.display = "none"
// $web.parentNode.setAttribute('href', 'hola mundo')

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

// Funcion para completar los enlaces
function cambiarHref(elemento, nuevoHref) { // Recibe como parámetros el elemento y el nuevo valor para el atributo href, y luego asignarle el nuevo valor al elemento
  elemento.parentNode.setAttribute('href', nuevoHref);
}
cambiarHref($web, 'nuevo enlace') // $inputEnlace