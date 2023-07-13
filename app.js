// IMPORTACIONES

// ============ ACTIVAS DEL FORMULARIO ============
import actionInputDisable from "./components/form-panel/action-input-disable.js";
import actionFormButtonClick from "./components/action-form-button-click/action-form-button-click.js";
// ============ PASIVAS DEL FORMULARIO ============
import createInputSpanMessage from "./components/form-panel/create-input-span-message.js";
import setInputOptions from "./components/form-panel/set-input-options.js";
import swiperOptions from "./components/swiper-options/swiper-options.js";
// ============ VALIDACIONES DEL FORMULARIO ============
import contactsValidations from "./components/form-panel/validations-form-contacts.js";
import educationValidations from "./components/form-panel/validations-form-education.js";
import homeValidations from "./components/form-panel/validations-form-home.js";
import profileValidations from "./components/form-panel/validations-form-profile.js";
// ============ FUNCIONES MOBILE ============
import actionMobDownload from "./components/action-mob-download/action-mob-download.js";
import {actionHideMenu, actionShowMenu} from "./components/action-menu-click/action-menu-click.js";
import scrollActiveLinks from "./components/scroll-active-links/scroll-active-links.js";
// ============ ACTIVAS DEL DOCUMENTO HTML ============
import actionSetImage from "./components/action-set-image/action-set-image.js";
import actionSetTheme from "./components/action-set-theme/action-set-theme.js";
import actionDeskdownload from "./components/action-desk-download/action-desk-download.js";
import showScrollTop from "./components/show-scroll-top/show-scroll-top.js";
// ============ PASIVAS DEL DOCUMENTO HTML ============
import createSections from "./components/create-sections/createSections.js";
import hideSections from "./components/hide-sections/hide-sections.js";
import hideLastLine from "./components/time-line/hide-last-line.js";
import sectionsSize from "./components/sections-size/sections-size.js";
import addEducationItem from "./components/form-panel/add-education-item.js";

// ============ REFERENCIAS A LOS ELEMENTOS HTML ============
const D = document,
$nav = D.querySelector('[data-nav-menu]'),
$toggle = D.querySelector(`[data-toggle-btn] *`),
$navLinks = D.querySelectorAll(`[data-nav-link] *`),
$sections = D.querySelectorAll(`[data-section-id][id]`),
$profileImg = D.querySelector(`[user-img]`),
$scrolltop = D.querySelector(`[data-scrolltop-btn]`),
$themeBtn = D.querySelector('[data-theme-btn]'),
$resumeBtn = D.querySelector('[data-resume-btn]'),
$downloadBtn = D.querySelector('[data-download-btn]'),
$areaCv = D.querySelector('[data-area-cv]'),
$inputs = D.querySelectorAll('input'),
// ============ SECTIONS =============
$socialSection = D.querySelector('[social]'),
$referencesSection = D.querySelectorAll('[references]'),
$contactSection = D.querySelector('[contact]'),
// ============ ITEMS =============
educationItems =  D.querySelectorAll('[education-item]'),
experienceItems =  D.querySelectorAll('[experience-item]')

/*==================== CREATE SECTIONS(contacts) ====================*/
createSections($contactSection)

/*==================== OBJETOS CON REFERENCIAS DE GRUPOS HTML QUE INTERACTUAN CON EL FORMULARIO ====================*/
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
  userLocation: D.querySelector('[user-location]'),
  userEmail: D.querySelector('[user-email]'),
  userPhone: D.querySelector('[user-phone]'),
  userLinkedin: D.querySelector('[user-linkedin]'),
  userGithub: D.querySelector('[user-github]'),
  userWebsite: D.querySelector('[user-website]'),
  // ============ FORM CONTACTS =============
  inputLocation: D.querySelector('[input-location]'),
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
  title: D.querySelector('[input-title]'),
  institute: D.querySelector('[input-institute]'),
  year: D.querySelector('[input-year]'),
  // ============ EDUCATION ELEMENT =============
  container: D.querySelector('[education-container]'),
  add: D.querySelector('[add-education]')
}

/*==================== FORM ELEMENTS ====================*/
const form = {
  btn: D.querySelector('[data-form-btn]'),
  panel: D.querySelector('[data-form-panel]'),
  bg: D.querySelector('[data-bg-panel]'),
}

/*==================== DISABLE FIELDS ====================*/
const disables = {
  label: D.querySelectorAll('.label_disable'),
  enable: D.querySelectorAll('.bx-undo'),
  disable: D.querySelectorAll('.bx-trash-alt'),
  input: D.querySelectorAll('.input_disable'),
  user: D.querySelectorAll('.info_disable')
}

D.addEventListener("DOMContentLoaded", (e) => {
  /*==================== SHOW MENU ON CLICK ====================*/
  actionShowMenu($nav, $toggle)
  /*==================== REMOVE MENU ON CLICK ====================*/
  actionHideMenu($nav, $navLinks)
  /*==================== SCROLL ACTIVE SECTIONS ====================*/
  scrollActiveLinks($sections, $nav)
  /*==================== SET PROFILE IMAGE ====================*/
  actionSetImage($profileImg)
  /*==================== SHOW SCROLL TOP ====================*/
  showScrollTop($scrolltop)
  /*==================== DARK LIGHT THEME ====================*/
  actionSetTheme($themeBtn)
  /*==================== GENERATE PDF ====================*/
  actionDeskdownload($resumeBtn, $areaCv)
  /*==================== DOWNLOAD RESUME MOBILE ====================*/
  actionMobDownload($downloadBtn, $areaCv)
  /*==================== GENERATE PDF ====================*/
  swiperOptions()
  /*==================== FORM BUTTON ====================*/
  actionFormButtonClick(form)
  /*==================== HIDE SECTIONS ====================*/
  hideSections($socialSection, ...$referencesSection)
});

/*==================== FORM INPUT OPTIONS ====================*/
setInputOptions($inputs)
/*==================== FORM INPUT SPAN MESSAGES ====================*/
createInputSpanMessage(contacts)
/*==================== DISABLE INPUT FIELDS ====================*/
actionInputDisable(disables)
/*==================== SECTIONS SIZE ====================*/
// sectionsSize(educationItems)

/*==================== HOME VALIDATIONS ====================*/
homeValidations(home)
/*==================== CONTACTS VALIDATIONS ====================*/
contactsValidations(contacts)
/*==================== PROFILE VALIDATIONS ====================*/
profileValidations(profile)
/*==================== EDUCATION VALIDATIONS ====================*/
addEducationItem(education)
// educationValidations(education)

/*==================== HIDE TIME LINES ====================*/
hideLastLine(educationItems, experienceItems)