export default function addSkills(skill) {

    document.addEventListener('click', e => {
      
      if(e.target === skill.add) {
        // Funcion para agregar un nuevo skill item con el event 'click'
        add(skill)
      } 
      
      if(e.target === skill.undo) {
        // Funcion para "revertir" el ultimo cambio
        undo(skill)
      }
  
    })
  }
  // Agrega un nuevo skill item al skill container
  const add = (skill) => {
    const skillItem = document.createElement('li')
    skillItem.classList.add("skills_name")
    skillItem.setAttribute('skill-item', '')
    skillItem.innerHTML = `<span class="circle"></span><space>&nbsp</space>${skill.name.value}`
    const container = skill.container
      // Agrega el item primero en la lista
    container.prepend(skillItem)
   
    
    orderItems(container)
    
    // guarda el container en el local storage
    localStorage.setItem('skillContainer', JSON.stringify(container.outerHTML))
  }
  
  // Elimina el primer item de skill container
  const undo = (skill) => {
    const skillItems = getItems()
    const container = skill.container
  
    if (skillItems.length > 0) {
      // Remove the first skill item
      const firstItem = skillItems[0]
      container.removeChild(firstItem)
    }
  
    // Si el skill container se encontrara vacio, se vuelve a pintar su contenido por defecto
    if(skillItems.length === 0) {
      container.innerHTML = `
          <li class="skills_name" skill-item><span class="circle"></span><space>&nbsp</space>Spanish</li>
          <li class="skills_name" skill-item><span class="circle"></span><space>&nbsp</space>English</li>
          <li class="skills_name" skill-item><span class="circle"></span><space>&nbsp</space>Portuguese</li>
      `
    }
    
    
    // Si el contenido de container esta vacio, no se guarda en el local storage
    if(container.children.length === 0) {
      return false
    } else {
      // guarda el container en el local storage
      localStorage.setItem('skillContainer', JSON.stringify(container.outerHTML))
    }
  }
  
  // Ordena el contenido dentro del skill container
  const orderItems = (container) => {
    const newskillItems = getItems()
    // Crea un nuevo fragmento donde se escribiran los primeros 4 items del arreglo obtenido a trevez de getItems
    const fragment = document.createDocumentFragment()
    // Mientras el index sea menor a 5 elementos, se escribiran aparte los skill items en el fragment
    newskillItems.forEach( (el, index) => {
      if(index === 5) return false
      fragment.appendChild(el)
      localStorage.setItem(`skillItem-${index}`, el) // tambien se guarda en el local los ultimos 4 items
    })
    container.innerHTML = '' // se limpia el contenido del skill container
    container.appendChild(fragment) // y se reeplaza por el fragment con los ultimos 4 items ingresados
  }
  
  // Retorna un array con nuevos skill items creados por el usuario
  const getItems = () => {
    const skillItems = document.querySelectorAll('[skill-item]')
    return skillItems
  }
  