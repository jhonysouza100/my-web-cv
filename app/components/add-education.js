import hideLastTimeline from "../helpers/hide-last-timeline.js"


export default function addEducation(education) {
  // Funcion para agregar un nuevo education item con el event 'click'
  education.add.addEventListener('click', e => {
  const educationItem = document.createElement('div')
  e.preventDefault()
  educationItem.classList.add("item_content")
  educationItem.setAttribute('education-item', '')
  educationItem.innerHTML = `
  <div class="time_line">
      <span class="rounder"></span>
      <span class="line" line></span>
    </div>
    <div class="item_data bd-grid">
      <h3 class="item_title" user-title>${education.title.value}</h3>
      <span class="item_institute" user-institute>${education.institute.value}</span>
      <span class="education_year" user-year>${education.year.value}</span>
    </div>`
  const container = education.container
    // Agrega el item primero en la lista
  container.prepend(educationItem)
  // console.log(education.container.querySelectorAll('[education-item]'))
  
  
  
  orderItems(container)
  
  // Vuelvo a obtener los education item para ejecutar la funcion de ocultar la ultima timeline
  hideLastTimeline(education.container.querySelectorAll('[education-item]'))
})
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
  const educationItem = document.querySelectorAll('[education-item]')
  return educationItem
}
