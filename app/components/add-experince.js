import hideLastTimeline from "../helpers/hide-last-timeline.js"


export default function addExperience(experience) {

  document.addEventListener('click', e => {
    
    if(e.target === experience.add) {
      // Funcion para agregar un nuevo experience item con el event 'click'
      add(experience)
    } 
    
    if(e.target === experience.undo) {
      // Funcion para "revertir" el ultimo cambio
      undo(experience)
    }

  })
}
// Agrega un nuevo experience item al experience container
const add = (experience) => {
  const experienceItem = document.createElement('div')
  experienceItem.classList.add("item_content")
  experienceItem.setAttribute('experience-item', '')
  experienceItem.innerHTML = `
  <div class="time_line">
      <span class="rounder"></span>
      <span class="line" line></span>
    </div>
    <div class="item_data bd-grid">
      <h3 class="experience_title">${experience.title.value}</h3>
      <span class="item_institute">${experience.institute.value}</span>
      <span class="experience_description">${experience.description.value}</span>
    </div>`
  const container = experience.container
    // Agrega el item primero en la lista
  container.prepend(experienceItem)
 
  
  orderItems(container)
  
  // Vuelvo a obtener los experience item para ejecutar la funcion de ocultar la ultima timeline
  hideLastTimeline(getItems())
  
  // guarda el container en el local storage
  localStorage.setItem('experienceContainer', JSON.stringify(container.outerHTML))
}

// Elimina el primer item de experience container
const undo = (experience) => {
  const experienceItems = getItems()
  const container = experience.container

  if (experienceItems.length > 0) {
    // Remove the first experience item
    const firstItem = experienceItems[0]
    container.removeChild(firstItem)
  }

  // Si el experience container se encontrara vacio, se vuelve a pintar su contenido por defecto
  if(experienceItems.length === 0) {
    container.innerHTML = `
    <div class="item_content" experience-item>
      <div class="time_line">
        <span class="rounder"></span>
        <span class="line"></span>
      </div>
      <div class="item_data bd-grid">
        <h3 class="experience_title">MASTER OF DESIGN</h3>
        <span class="item_institute">From 2013 to 2015 | Tech Soft</span>
        <p class="experience_description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
      </div>
    </div>
    <div class="item_content" experience-item>
      <div class="time_line">
        <span class="rounder"></span>
        <span class="line"></span>
      </div>
      <div class="item_data bd-grid">
        <h3 class="experience_title">UI/UX DESIGN AREA</h3>
        <span class="item_institute">From 2017 to 2019 | Adobe Inc</span>
        <p class="experience_description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
      </div>
    </div>
    <div class="item_content" experience-item>
      <div class="time_line">
        <span class="rounder"></span>
        <span class="line"></span>
      </div>
      <div class="item_data bd-grid">
      <h3 class="experience_title">MOBILE APPLICATION DEVELOPER</h3>
        <span class="item_institute" experience-institute>From 2019 to 20121 | App Tech</span>
        <p class="experience_description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
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
    localStorage.setItem('experienceContainer', JSON.stringify(container.outerHTML))
  }
}

// Ordena el contenido dentro del experience container
const orderItems = (container) => {
  const newexperienceItems = getItems()
  // Crea un nuevo fragmento donde se escribiran los primeros 4 items del arreglo obtenido a trevez de getItems
  const fragment = document.createDocumentFragment()
  // Mientras el index sea menor a 4 elementos, se escribiran aparte los experience items en el fragment
  newexperienceItems.forEach( (el, index) => {
    if(index === 4) return false
    fragment.appendChild(el)
    localStorage.setItem(`experienceItem-${index}`, el) // tambien se guarda en el local los ultimos 4 items
  })
  container.innerHTML = '' // se limpia el contenido del experience container
  container.appendChild(fragment) // y se reeplaza por el fragment con los ultimos 4 items ingresados
}

// Retorna un array con nuevos experience items creados por el usuario
const getItems = () => {
  const experienceItems = document.querySelectorAll('[experience-item]')
  return experienceItems
}
