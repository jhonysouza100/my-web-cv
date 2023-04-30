const D = document
export default function contactSection(section) {
  // Limpiar el contenido del elemento
  section.innerHTML = `
  <span class="home_information user-direccion"><i class="home_icon bx bx-map"></i><space>&nbsp</space>Miami - California</span>
  <a class="home_information user-email" href="mailto:jhonatansouzameza100@gmail.com" target="_blank"><i class="home_icon bx bx-envelope"></i><space>&nbsp</space>jhonsmith100@gmail.com</a>
  <a class="home_information user-telefono" href="https://api.whatsapp.com/send?phone=54999111000&text=Hello, let's go to work" target="_blank"><i class="home_icon bx bx-phone"></i><space>&nbsp</space>+54 999-000-111</a>
  <a class="home_information user-linkedin" href="https://linkedian.com/in/jhonatan-leon-souza-meza/" trget="_blank"><i class="social_icon bx bxl-linkedin-square"></i><space>&nbsp</space>@jhonsmith</a>
  <a class="home_information user-github" href="https://github.com/WarDog1000" target="_blank"><i class="social_icon bx bxl-github"></i><space>&nbsp</space>jhonsmith100</a>
  <a class="home_information user-web" href="https://jhony-souza-portfolio.netlify.app/" target="_blank"><i class="home_icon bx bxs-folder-open"></i><space>&nbsp</space>My Portfolio</a>
  `

  const newLink = D.createElement("a");

// Establecer las propiedades del elemento <a>
newLink.classList.add("home_information", "user-email");
newLink.href = "mailto:user@gmail.com";
newLink.target = "_blank";

// Crear el elemento <i> y establecer sus clases
const newIcon = D.createElement("i");
newIcon.classList.add("home_icon", "bx", "bx-envelope");

// Crear el nodo de texto con el correo electrónico
const newEmail = D.createTextNode("jhonsmith100@gmail.com");

// Agregar el icono y el correo electrónico como hijos del elemento <a>
newLink.appendChild(newIcon);
newLink.appendChild(D.createTextNode("\u00A0"));
newLink.appendChild(newEmail);

section.appendChild(newLink)
}
