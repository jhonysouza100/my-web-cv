export default function addCertificates(certificate) {

  document.addEventListener('click', e => {
    
    if(e.target === certificate.add) {
      // Funcion para agregar un nuevo certificate item con el event 'click'
      add(certificate)
    } 
    
    if(e.target === certificate.undo) {
      // Funcion para "revertir" el ultimo cambio
      undo(certificate)
    }

  })
}
// Agrega un nuevo certificate item al certificate container
const add = (certificate) => {
  const certificateItem = document.createElement('div')
  certificateItem.classList.add("certificate_content")
  certificateItem.setAttribute('certificate-item', '')
  certificateItem.innerHTML = `
      <h3 class="certificate_title" certificate-title>${certificate.title.value}</h3>
      <p class="certificate_description" certificate-description>${certificate.description.value}</p>
    `
  const container = certificate.container
    // Agrega el item primero en la lista
  container.prepend(certificateItem)
 
  
  orderItems(container)
  
  // guarda el container en el local storage
  localStorage.setItem('certificateContainer', JSON.stringify(container.outerHTML))
}

// Elimina el primer item de certificate container
const undo = (certificate) => {
  const certificateItems = getItems()
  const container = certificate.container

  if (certificateItems.length > 0) {
    // Remove the first certificate item
    const firstItem = certificateItems[0]
    container.removeChild(firstItem)
  }

  // Si el certificate container se encontrara vacio, se vuelve a pintar su contenido por defecto
  if(certificateItems.length === 0) {
    container.innerHTML = `
    <div class="certificate_content" certificate-item>
        <h3 class="certificate_title">Certified for compliance in the work area (2012)</h3>
        <p class="certificate_description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p>
      </div>
      <div class="certificate_content" certificate-item>
        <h3 class="certificate_title">Certificate of attendance on computer technology.</h3>
        <p class="certificate_description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p>
      </div>
      <div class="certificate_content" certificate-item>
        <h3 class="certificate_title">Achievement medal for productivity excellence during the year(2019)</h3>
        <p class="certificate_description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p>
    </div>
    `
  }
  
  
  // Si el contenido de container esta vacio, no se guarda en el local storage
  if(container.children.length === 0) {
    return false
  } else {
    // guarda el container en el local storage
    localStorage.setItem('certificateContainer', JSON.stringify(container.outerHTML))
  }
}

// Ordena el contenido dentro del certificate container
const orderItems = (container) => {
  const newcertificateItems = getItems()
  // Crea un nuevo fragmento donde se escribiran los primeros 4 items del arreglo obtenido a trevez de getItems
  const fragment = document.createDocumentFragment()
  // Mientras el index sea menor a 4 elementos, se escribiran aparte los certificate items en el fragment
  newcertificateItems.forEach( (el, index) => {
    if(index === 4) return false
    fragment.appendChild(el)
    localStorage.setItem(`certificateItem-${index}`, el) // tambien se guarda en el local los ultimos 4 items
  })
  container.innerHTML = '' // se limpia el contenido del certificate container
  container.appendChild(fragment) // y se reeplaza por el fragment con los ultimos 4 items ingresados
}

// Retorna un array con nuevos certificate items creados por el usuario
const getItems = () => {
  const certificateItems = document.querySelectorAll('[certificate-item]')
  return certificateItems
}
