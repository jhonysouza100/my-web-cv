import darkTheme from "./components/dark-theme/dark-theme.js";
import formBtn from "./components/form-button/form-button.js";
import formValidations from "./components/form-panel/form-panel.js";
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
$formBtn = D.querySelector('[data-form-btn]'),
$formPanel = D.querySelector('[data-form-panel]'),
$bgPanel = D.querySelector('[data-bg-panel]'),
// ============ PROFILE DATA =============
$profileName = D.querySelector('[data-profile-name]'),
$profileProfession = D.querySelector('[data-profile-profession]'),
// ============ FORM DATA =============
$formUserName = D.querySelector('[form-user-name]'),
$formUserLastname = D.querySelector('[form-user-lastname]'),
$formUserProfession = D.querySelector('[form-user-profession]'),



// ============ USER DATA =============
$userName = D.querySelector('.home_title').firstChild.textContent.trim(),
$userLastName = D.querySelector('.home_title').lastChild.textContent.trim()
// $userProfession = D.querySelector('.home_profession').textContent.trim()
// console.log($profileImg.tagName)
// console.log($profileImg.className)
// console.log($profileImg.classList)
// console.log($profileImg.classList.value)
// console.log($userProfession)

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
  /*==================== FORM BUTTON ====================*/
  formBtn($formBtn, $formPanel, $bgPanel)
  /*==================== FORM VALIDATIONS ====================*/
});

formValidations($profileName, $profileProfession, $formUserName, $formUserLastname, $formUserProfession)
