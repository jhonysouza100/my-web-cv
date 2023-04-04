import hiddenSections from "./sources/js/hidden-sections.js";
import setImage from "./sources/js/set-image.js";
import showMenu  from "./sources/js/show-menu.js";
import removeMenu from "./sources/js/remove-menu.js";
import linkActive from "./sources/js/link-active.js";

const $nombre = document.querySelectorAll('.user-nombre'),
      $apellido = document.querySelector('.user-apellido').firstChild,
      $profesion = document.querySelector('.user-profesion').firstChild,
      $direccion = document.querySelector('.user-direccion').lastChild,
      $email = document.querySelector('.user-email').lastChild,
      $telefono = document.querySelector('.user-telefono').lastChild,
      $web = document.querySelector('.user-web').lastChild,
      // Sociales
      $linkedin = document.querySelector('.user-linkedin').lastChild,
      $github = document.querySelector('.user-github').lastChild,
      $facebook = document.querySelector('.user-facebook').lastChild,
      $instagram = document.querySelector('.user-instagram').lastChild,
      $twitter = document.querySelector('.user-twitter').lastChild,
      // Perfil
      $perfil = document.querySelector('.user-perfil').firstChild,
      // Educacion
      $educacionTitulo = document.querySelectorAll('.user-educacion-titulo'),
      $educacionInstituto = document.querySelectorAll('.user-educacion-instituto'),
      $educacionFecha = document.querySelectorAll('.user-educacion-fecha'),
      // Lenguajes
      $lenguajes = document.querySelectorAll('.user-lenguajes'),
      //Experiencia
      $experienciaArea = document.querySelectorAll('.user-experiencia-area'),
      $experienciaFecha = document.querySelectorAll('.user-experiencia-fecha'),
      $experienciaCompania = document.querySelectorAll('.user-experiencia-compania'),
      $experienciaDescripcion = document.querySelectorAll('.user-experiencia-descripcion'),
      // Certificados
      $certificado = document.querySelectorAll('.user-certificado'),
      $certificadoDescripcion = document.querySelectorAll('.user-certificado-descripcion'),
      // Referencias
      $referenciaCargo = document.querySelectorAll('.user-referencia-cargo'),
      $referenciaNombre = document.querySelectorAll('.user-referencia-nombre'),
      $referenciaTelefono = document.querySelectorAll('.user-referencia-telefono'),
      $referenciaEmail = document.querySelectorAll('.user-referencia-email'),
      // Idiomas
      $idiomas = document.querySelectorAll('.user-idiomas'),
      // Foto de pefil
      $foto = document.querySelector('.user-image'),
      $inputFoto = document.querySelector('#input-image')

      // ======================== SECTIONS ========================
      const $contacts = document.querySelectorAll('.contacts'),
      $social = document.querySelectorAll('.social'),
      $profile = document.querySelectorAll('.profile'),
      $education = document.querySelectorAll('.education'),
      $skills = document.querySelectorAll('.skills'),
      $experience = document.querySelectorAll('.experience'),
      $certificates = document.querySelectorAll('.certificates'),
      $references = document.querySelectorAll('.references'),
      $languages = document.querySelectorAll('.languages'),
      $interests = document.querySelectorAll('.interests')

      // ======================== ELEMENTS ========================
      const $toggleNav = document.getElementById('nav-toggle'),
      $navMenu = document.getElementById('nav-menu'),
      $navLinks = document.querySelectorAll('.nav_link'),
      $sections = document.querySelectorAll('section[id]'),
      $scrollTop = document.getElementById('scroll-top'),
      $themeButton = document.getElementById('theme-button'),
      $resumeButton = document.getElementById('resume-button')

const $doc = document
$doc.addEventListener("DOMContentLoaded", e => {
  console.log('Carga DOM content loaded');
  showMenu($toggleNav, $navMenu)
  linkActive($sections)
  removeMenu($navMenu, $navLinks)
  setImage($foto, $inputFoto, $doc)
  hiddenSections(...$social, ...$references)
} )
