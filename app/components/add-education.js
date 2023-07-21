import hideLastTimeline from "../helpers/hide-last-timeline.js"


export default function addEducation(education) {

  document.addEventListener('click', e => {
    
    if(e.target === education.add) {
      // Funcion para agregar un nuevo education item con el event 'click'
      add(education)
    } 
    
    if(e.target === education.undo) {
      // Funcion para "revertir" el ultimo cambio
      undo(education)
    }

  })
}
// Agrega un nuevo education item al education container
const add = (education) => {
  const educationItem = document.createElement('div')
  educationItem.classList.add("item_content")
  educationItem.setAttribute('education-item', '')
  educationItem.innerHTML = `
  <div class="time_line">
      <span class="rounder"></span>
      <span class="line" line></span>
    </div>
    <div class="item_data bd-grid">
      <h3 class="item_title" education-title>${education.title.value}</h3>
      <span class="item_institute" education-institute>${education.institute.value}</span>
      <span class="education_year" education-year>${education.year.value}</span>
    </div>`
  const container = education.container
    // Agrega el item primero en la lista
  container.prepend(educationItem)
 
  
  orderItems(container)
  
  // Vuelvo a obtener los education item para ejecutar la funcion de ocultar la ultima timeline
  hideLastTimeline(getItems())
  
  // guarda el container en el local storage
  localStorage.setItem('educationContainer', JSON.stringify(container.outerHTML))
}

// Elimina el primer item de education container
const undo = (education) => {
  const educationItems = getItems()
  const container = education.container

  if (educationItems.length > 0) {
    // Remove the first education item
    const firstItem = educationItems[0]
    container.removeChild(firstItem)
  }

  // Si el education container se encontrara vacio, se vuelve a pintar su contenido por defecto
  if(educationItems.length === 0) {
    container.innerHTML = `
    <div class="item_content" education-item>
                <div class="time_line">
                  <span class="rounder"></span>
                  <span class="line" line></span>
                </div>
                <div class="item_data bd-grid">
                  <h3 class="item_title" education-title>MASTER OF DESIGN</h3>
                  <span class="item_institute" education-institute>University od Studies</span>
                  <span class="education_year" education-year>2010 - 2015</span>
                </div>
              </div>
              <div class="item_content" education-item>
                <div class="time_line">
                  <span class="rounder"></span>
                  <span class="line"></span>
                </div>
                <div class="item_data bd-grid">
                  <h3 class="item_title">WEB DEVELOPER</h3>
                  <span class="item_institute">Institute Studies</span>
                  <span class="education_year">2016 - 2019</span>
                </div>
              </div>
              <div class="item_content" education-item>
                <div class="time_line">
                  <span class="rounder"></span>
                  <span class="line"></span>
                </div>
                <div class="item_data bd-grid">
                  <h3 class="item_title">MASTER IN UI/UX</h3>
                  <span class="item_institute">Institute Studies</span>
                  <span class="education_year">2019 - 2021</span>
                </div>
              </div>
    `
  }
  
  // After removing the item, you may want to update the timeline display
  hideLastTimeline(getItems())
  
  // Si el contenido de container esta vacio, no se guarda en el local storage
  if(container.children.length === 0) {
    return false
  } else {
    // guarda el container en el local storage
    localStorage.setItem('educationContainer', JSON.stringify(container.outerHTML))
  }
}

// Ordena el contenido dentro del education container
const orderItems = (container) => {
  const newEducationItems = getItems()
  // Crea un nuevo fragmento donde se escribiran los primeros 4 items del arreglo obtenido a trevez de getItems
  const fragment = document.createDocumentFragment()
  // Mientras el index sea menor a 4 elementos, se escribiran aparte los education items en el fragment
  newEducationItems.forEach( (el, index) => {
    if(index === 4) return false
    fragment.appendChild(el)
    localStorage.setItem(`educationItem-${index}`, el) // tambien se guarda en el local los ultimos 4 items
  })
  container.innerHTML = '' // se limpia el contenido del education container
  container.appendChild(fragment) // y se reeplaza por el fragment con los ultimos 4 items ingresados
}

// Retorna un array con nuevos education items creados por el usuario
const getItems = () => {
  const educationItems = document.querySelectorAll('[education-item]')
  return educationItems
}
