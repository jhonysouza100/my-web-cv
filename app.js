import createSections from "./components/create-sections/createSections.js";
import darkTheme from "./components/dark-theme/dark-theme.js";
import formBtn from "./components/form-button/form-button.js";
import contactsValidations from "./components/form-panel/form-contacts.js";
import educationValidations from "./components/form-panel/form-education.js";
import homeValidations from "./components/form-panel/form-home.js";
import formInputMaxLenght from "./components/form-panel/form-input-max-lenght.js";
import formInputSpan from "./components/form-panel/form-input-span.js";
import profileValidations from "./components/form-panel/form-profile.js";
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

const home = {
  // ============ HOME USER DATA =============
  userName: D.querySelector('[user-name]'),
  userProfession: D.querySelector('[user-profession]'),
  menuName: D.querySelector('[menu-name]'),
  // ============ HOME FORM DATA =============
  inputName:D.querySelector('[input-name]'),
  inputLastname: D.querySelector('[input-lastname]'),
  inputProfession: D.querySelector('[input-profession]') 
}

const contacts = {
  // ============ USER CONTACTS =============
  userEmail: D.querySelector('[user-email]'),
  userPhone: D.querySelector('[user-phone]'),
  userLinkedin: D.querySelector('[user-linkedin]'),
  userGithub: D.querySelector('[user-github]'),
  userWebsite: D.querySelector('[user-website]'),
  // ============ FORM CONTACTS =============
  inputEmail: D.querySelector('[input-email]'),
  inputPhone: D.querySelector('[input-phone]'),
  inputLinkedin: D.querySelector('[input-linkedin]'),
  inputGithub: D.querySelector('[input-github]'),
  inputWebsite: D.querySelector('[input-website]')
}

const profile = {
  // ============ USER PROFILE =============
  userProfile: D.querySelector('[user-profile]'),
  // ============ FORM PROFILE =============
  textProfile: D.querySelector('[text-profile]')
}

const education = {
  // ============ USER EDUCATION =============
  userTitle: D.querySelector('[user-title]'),
  userInstitute: D.querySelector('[user-institute]'),
  userYear: D.querySelector('[user-year]'),
  // ============ FORM EDUCATION =============
  inputTitle: D.querySelector('[input-title]'),
  inputInstitute: D.querySelector('[input-institute]'),
  inputYear: D.querySelector('[input-year]'),
  // ============ EDUCATION ELEMENT =============
  container: D.querySelector('[education-container]'),
  item:  D.querySelector('[education-item]')
}

/*==================== FORM INPUT MAX-LENGHT ====================*/
const $inputs = D.querySelectorAll('input')
formInputMaxLenght($inputs)
/*==================== FORM INPUT SPAN ====================*/
formInputSpan(contacts)
/*==================== HOME VALIDATIONS ====================*/
homeValidations(home)
/*==================== CONTACTS VALIDATIONS ====================*/
contactsValidations(contacts)
/*==================== PROFILE VALIDATIONS ====================*/
profileValidations(profile)
/*==================== EDUCATION VALIDATIONS ====================*/
educationValidations(education)

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
