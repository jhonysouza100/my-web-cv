import hideMenu from "./components/hide-menu/hide-menu.js";
import showMenu from "./components/show-menu/show-menu.js";

const D = document,
$nav = D.querySelector('[data-nav-menu]'),
$toggle = D.querySelector(`[data-toggle-btn] *`),
$navLinks = D.querySelectorAll(`[data-nav-link] *`)

D.addEventListener("DOMContentLoaded", (e) => {
  console.log('hola desde el DOMcontentLoaded');
  /*==================== SHOW MENU ====================*/
  showMenu($nav, $toggle)
  /*==================== REMOVE MENU MOBILE ====================*/
  hideMenu($nav, $navLinks)
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  /*==================== SHOW SCROLL TOP ====================*/
  /*==================== DARK LIGHT THEME ====================*/
  /*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
  /*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
  /*==================== GENERATE PDF ====================*/
  // PDF generated area
  // Html2pdf options
  // Function to call areaCv and Html2Pdf options
  // When the button is clicked, it executes the three functions
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  // 2. The PDF is generated
  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
});
