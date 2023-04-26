import darkTheme from "./components/dark-theme/dark-theme.js";
import generatePdf from "./components/generate-pdf/generate-pdf.js";
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
$scrolltop = D.querySelector(`[data-scrolltop-btn]`),
$themeBtn = D.querySelector('[data-theme-btn]'),
$resumeBtn = D.querySelector('[data-resume-btn]'),
$areaCv = D.querySelector('[data-area-cv]'),

// ============ USER DATA =============
$userName = D.querySelector('.home_title').firstChild.textContent.trim(),
$userLastName = D.querySelector('.home_title').lastChild.textContent.trim(),
$userProfession = D.querySelector('.home_profession').textContent.trim()

// console.log($profileImg.tagName)
// console.log($profileImg.className)
// console.log($profileImg.classList)
// console.log($profileImg.classList.value)
console.log($userName)
console.log($userLastName)
console.log($userProfession)

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
  darkTheme($themeBtn)
  /*==================== HIDE SECTIONS ====================*/
  hideSections()
  /*==================== GENERATE PDF ====================*/
  generatePdf($resumeBtn, $areaCv)
});
