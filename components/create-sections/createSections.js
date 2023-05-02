export default function createSections(section) {
  // Limpiar el contenido del elemento
  section.innerHTML = ``
  const contacts = {
    email: {
      href: 'mailto:jhonatansouzameza100@gmail.com',
      type: 'email',
      icon: 'bx-envelope',
      text: 'jhonatansouzameza@gmail.com'   
    },
    phone: {
      href: `https://api.whatsapp.com/send?phone=541133604606&text=Hello, let's go to work`,
      type: 'phone',
      icon: 'bx-phone',
      text: '+54 1133604606'      
    },
    linkedin: {
      href: 'https://linkedian.com/in/jhonatan-leon-souza-meza/',
      type: 'linkedin',
      icon: 'bxl-linkedin-square',
      text: '/jhonatan-leon-souza-meza'      
    },
    github: {
      href: 'https://github.com/WarDog1000',
      type: 'github',
      icon: 'bxl-github',
      text: '/WarDog1000'      
    },
    web: {
      href: 'https://jhony-souza-portfolio.netlify.app/',
      type: 'website',
      icon: 'bxs-folder-open',
      text: 'My portfolio'
    }
  }
  const createContacts = () => {
    for(let el in contacts) {
      // Crea un nuevo elemento <a>
      const newLink = document.createElement("a")
      
      // Establece las propiedades del elemento <a>
      newLink.classList.add("home_information")
      newLink.href = `${contacts[el].href}`
      newLink.target = "_blank"
      newLink.setAttribute(`user-${contacts[el].type}`, '')    
      
      // Crea el elemento <i> y establecer sus clases
      const newIcon = document.createElement("i")
      newIcon.classList.add("home_icon", "bx", `${contacts[el].icon}`)
      
      // Crea un elemento para el espacio
      const space = document.createElement('space')
      space.innerHTML = '&nbsp;'
      
      // Crea el nodo de texto con el correo electrónico
      const newText = document.createTextNode(`${contacts[el].text}`)
      
      // Agregar el icono y el correo electrónico como hijos del elemento <a>
      newLink.appendChild(newIcon)
      newLink.appendChild(space)
      newLink.appendChild(newText)
      
      // Agrega el nuevo <a> al section
      section.appendChild(newLink)
    }
  }
  
  createContacts()
  
}
