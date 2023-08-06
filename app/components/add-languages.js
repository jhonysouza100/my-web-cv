export default function addLanguages(language) {

    document.addEventListener('click', e => {
      
      if(e.target === language.add) {
        // Funcion para agregar un nuevo language item con el event 'click'
        add(language)
      } 
      
      if(e.target === language.undo) {
        // Funcion para "revertir" el ultimo cambio
        undo(language)
      }
  
    })
  }
  // Agrega un nuevo language item al language container
  const add = (language) => {
    const languageItem = document.createElement('li')
    languageItem.classList.add("languages_name")
    languageItem.setAttribute('language-item', '')
    languageItem.innerHTML = `<span class="circle"></span><space>&nbsp</space>${language.name.value}`
    const container = language.container
      // Agrega el item primero en la lista
    container.prepend(languageItem)
   
    
    orderItems(container)
    
    // guarda el container en el local storage
    localStorage.setItem('languageContainer', JSON.stringify(container.outerHTML))
  }
  
  // Elimina el primer item de language container
  const undo = (language) => {
    const languageItems = getItems()
    const container = language.container
  
    if (languageItems.length > 0) {
      // Remove the first language item
      const firstItem = languageItems[0]
      container.removeChild(firstItem)
    }
  
    // Si el language container se encontrara vacio, se vuelve a pintar su contenido por defecto
    if(languageItems.length === 0) {
      container.innerHTML = `
      <li class="skills_name" language-item><span class="circle"></span><space>&nbsp</space>HTML</li>
      <li class="skills_name" language-item><span class="circle"></span><space>&nbsp</space>CSS</li>
      <li class="skills_name" language-item><span class="circle"></span><space>&nbsp</space>Sass</li>
      <li class="skills_name" language-item><span class="circle"></span><space>&nbsp</space>JavaScript</li>
      `
    }
    
    
    // Si el contenido de container esta vacio, no se guarda en el local storage
    if(container.children.length === 0) {
      return false
    } else {
      // guarda el container en el local storage
      localStorage.setItem('languageContainer', JSON.stringify(container.outerHTML))
    }
  }
  
  // Ordena el contenido dentro del language container
  const orderItems = (container) => {
    const newlanguageItems = getItems()
    // Crea un nuevo fragmento donde se escribiran los primeros 4 items del arreglo obtenido a trevez de getItems
    const fragment = document.createDocumentFragment()
    // Mientras el index sea menor a 5 elementos, se escribiran aparte los language items en el fragment
    newlanguageItems.forEach( (el, index) => {
      if(index === 5) return false
      fragment.appendChild(el)
      localStorage.setItem(`languageItem-${index}`, el) // tambien se guarda en el local los ultimos 4 items
    })
    container.innerHTML = '' // se limpia el contenido del language container
    container.appendChild(fragment) // y se reeplaza por el fragment con los ultimos 4 items ingresados
  }
  
  // Retorna un array con nuevos language items creados por el usuario
  const getItems = () => {
    const languageItems = document.querySelectorAll('[language-item]')
    return languageItems
  }
  