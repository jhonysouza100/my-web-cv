import createSections from "./components/create-sections/createSections.js";
import darkTheme from "./components/dark-theme/dark-theme.js";
import formBtn from "./components/form-button/form-button.js";
import contactsValidations from "./components/form-panel/form-contacts.js";
import homeValidations from "./components/form-panel/form-home.js";
import generatePdf from "./components/generate-pdf/generate-pdf.js";
import hideMenu from "./components/hide-menu/hide-menu.js";
import hideSections from "./components/hide-sections/hide-sections.js";
import scrollActive from "./components/scroll-active/scroll-active.js";
import scrollTop from "./components/scroll-top/scroll-top.js";
import setImage from "./components/set-image/set-image.js";
import showMenu from "./components/show-menu/show-menu.js";
import swiper from "./components/swiper-js/swiper.js";

const D = document,
$nav = D.querySelector('[data-nav-menu]'),
$toggle = D.querySelector(`[data-toggle-btn] *`),
$navLinks = D.querySelectorAll(`[data-nav-link] *`),
$sections = D.querySelectorAll(`[data-section-id][id]`),
$profileImg = D.querySelector(`[user-img]`),
$scrolltop = D.querySelector(`[data-scrolltop-btn]`),
$themeBtn = D.querySelector('[data-theme-btn]'),
$resumeBtn = D.querySelector('[data-resume-btn]'),
$areaCv = D.querySelector('[data-area-cv]'),
$formBtn = D.querySelector('[data-form-btn]'),
$formPanel = D.querySelector('[data-form-panel]'),
$bgPanel = D.querySelector('[data-bg-panel]'),
// ============ SECTIONS =============
$socialSection = D.querySelector('[social]'),
$referencesSection = D.querySelectorAll('[references]'),
$contactSection = D.querySelector('[contact]')


D.addEventListener("DOMContentLoaded", (e) => {
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
  /*==================== GENERATE PDF ====================*/
  generatePdf($resumeBtn, $areaCv)
  /*==================== GENERATE PDF ====================*/
  swiper()
  /*==================== FORM BUTTON ====================*/
  formBtn($formBtn, $formPanel, $bgPanel)
  /*==================== HIDE SECTIONS ====================*/
  hideSections($socialSection, ...$referencesSection)
});

/*==================== CREATE SECTIONS ====================*/
createSections($contactSection)

// ============ PROFILE USER DATA =============
const $profileName = D.querySelector('[user-name]'),
$profileProfession = D.querySelector('[user-profession]'),
$menuName = D.querySelector('[menu-name]'),
// ============ PROFILE FORM DATA =============
$formUserName = D.querySelector('[form-name]'),
$formUserLastname = D.querySelector('[form-lastname]'),
$formUserProfession = D.querySelector('[form-profession]'),
// ============ USER CONTACTS =============
$profileEmail = D.querySelector('[user-email]'),
$profilePhone = D.querySelector('[user-phone]'),
$profileLinkedin = D.querySelector('[user-linkedin]'),
$profileGithub = D.querySelector('[user-github]'),
$profileWebsite = D.querySelector('[user-website]'),
// ============ FORM CONTACTS =============
$formEmail = D.querySelector('[form-email]'),
$formPhone = D.querySelector('[form-phone]'),
$formLinkedin = D.querySelector('[form-linkedin]'),
$formGithub = D.querySelector('[form-github]'),
$formWebsite = D.querySelector('[form-website]')

/*==================== HOME VALIDATIONS ====================*/
homeValidations($profileName, $profileProfession, $formUserName, $formUserLastname, $formUserProfession, $menuName)
/*==================== CONTACTS VALIDATIONS ====================*/
contactsValidations($profileEmail, $profilePhone, $profileLinkedin, $profileGithub, $profileWebsite, $formEmail, $formPhone, $formLinkedin, $formGithub, $formWebsite)

async function asincroFunction() {
  // Espera a que el documento se cargue completamente
  await new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });

  console.log('El documento se ha cargado completamente.')
}
// Llama a la función
asincroFunction();
