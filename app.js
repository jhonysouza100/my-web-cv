import hideMenu from "./components/hide-menu/hide-menu.js";
import hideSections from "./components/hide-sections/hide-sections.js";
import scrollActive from "./components/scroll-active/scroll-active.js";
import scrollTop from "./components/scroll-top/scroll-top.js";
import setImage from "./components/set-image/set-image.js";
import showMenu from "./components/show-menu/show-menu.js";

const D = document,
$nav = D.querySelector('[data-nav-menu]'),
$toggle = D.querySelector(`[data-toggle-btn] *`),
$navLinks = D.querySelectorAll(`[data-nav-link] *`),
$sections = D.querySelectorAll(`[data-section-id][id]`),
$profileImg = D.querySelector(`[data-profile-img]`),
$scrolltop = D.querySelector(`[data-scrolltop-btn]`)

console.log($profileImg.tagName)
console.log($profileImg.className)
console.log($profileImg.classList)
console.log($profileImg.classList.value)

D.addEventListener("DOMContentLoaded", (e) => {
  console.log('hola desde el DOMcontentLoaded');
  /*==================== SHOW MENU ON CLICK ====================*/
  showMenu($nav, $toggle)
  /*==================== REMOVE MENU ON CLICK ====================*/
  hideMenu($nav, $navLinks)
  /*==================== SCROLL ACTIVE SECTIONS ====================*/
  scrollActive($sections, $nav)
  /*==================== SET PROFILE IMAGE ====================*/
  setImage($profileImg)
  /*==================== SHOW SCROLL TOP ====================*/
  scrollTop($scrolltop)
  /*==================== DARK LIGHT THEME ====================*/
  /*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
  /*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
  /*==================== GENERATE PDF ====================*/
  /*==================== HIDE SECTIONS ====================*/
  hideSections()
  // PDF generated area
  // Html2pdf options
  // Function to call areaCv and Html2Pdf options
  // When the button is clicked, it executes the three functions
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  // 2. The PDF is generated
  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
});
