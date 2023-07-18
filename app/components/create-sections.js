export function createContacts(section) {
  return new Promise((resolve, reject) => {
    // Limpiar el contenido del elemento
    section.innerHTML = ``
    const contacts = {
      location: {
        type: 'location',
        icon: 'bx-map',
        text: 'Miami - California'
      },
      email: {
        href: 'mailto:user@gmail.com',
        type: 'email',
        icon: 'bx-envelope',
        text: 'user@email.com'   
      },
      phone: {
        href: `https://api.whatsapp.com/send?phone=541133604606&text=Hello World`,
        type: 'phone',
        icon: 'bx-phone',
        text: '54 999 777 666'      
      },
      linkedin: {
        href: 'https://linkedin.com/in/jhonatan-leon-souza-meza/',
        type: 'linkedin',
        icon: 'bxl-linkedin-square',
        text: 'jhon-smith',
        disable: true     
      },
      github: {
        href: 'https://github.com/WarDog1000/my-web-cv',
        type: 'github',
        icon: 'bxl-github',
        text: 'JhonSmith',
        disable: true  
      },
      web: {
        href: 'https://jhony-souza-portfolio.netlify.app/',
        type: 'website',
        icon: 'bxs-folder-open',
        text: 'My portfolio',
        disable: true
      }
    }
    const create = () => {
      for(let el in contacts) {
        let element
        if(contacts[el].type === 'location') {
          element = 'span'
        } else {
          element = 'a'
        }
        // Crea un nuevo elemento
        const newLink = document.createElement(`${element}`)
        // Establece las propiedades del elemento
        if(contacts[el].type === 'location') {
          newLink.setAttribute(`user-${contacts[el].type}`, '') 
          newLink.classList.add("home_information")
        } else if(contacts[el].disable === true) {
          newLink.classList.add("home_information", "info_disable")
          newLink.href = `${contacts[el].href}`
          newLink.target = "_blank"
          newLink.setAttribute(`user-${contacts[el].type}`, '')
        } else {
          newLink.classList.add("home_information")
          newLink.href = `${contacts[el].href}`
          newLink.target = "_blank"
          newLink.setAttribute(`user-${contacts[el].type}`, '')
          
        }
        
        // Crea el elemento <i> y establecer sus clases
        const newIcon = document.createElement("i")
        newIcon.classList.add("home_icon", "bx", `${contacts[el].icon}`)
        
        // Crea un elemento para el espacio
        const space = document.createElement('space')
        if(contacts[el].type === 'phone') {
          space.innerHTML = '&nbsp;+'      
        } else if(contacts[el].type === 'linkedin' || contacts[el].type === 'github') {
          space.innerHTML = '&nbsp;/'        
        } else {
          space.innerHTML = '&nbsp;'
        } 
  
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
  resolve(create())
  })
}
