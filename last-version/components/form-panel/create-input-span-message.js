export default function createInputSpanMessage(...objs) {
  for (let obj of objs) {
    // Crea elementos <span> por cada input que recibe del parametro obj, y los agrega despues de estos
    for(let el in obj){
      if(obj[el].tagName === 'INPUT'){
        const errorSpan = document.createElement('span')
        errorSpan.classList.add('span_error')
        // El nuevo <span> resibe un atributo vacio igual al contenido del atributo 'span' del input
        errorSpan.setAttribute(`${obj[el].getAttribute('span')}`, '')
        // Es necesario agregar el atributo span="email", por ejemplo, a cada input en el html
        errorSpan.innerText = `Invalid ${obj[el].getAttribute('span')}`
        obj[el].insertAdjacentElement('afterend', errorSpan)
      }
    }
  }
}