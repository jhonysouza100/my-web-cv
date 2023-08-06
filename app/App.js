// API DOM References
import { html, sections, form, home, profile } from "../../api/api.js"
import actionInputDisable from "./functions/action-input-disable.js";

// Async API DOM References
import { getContacts, getDisables, getItems, getEducation, getExperience, getCertificates, getLanguages, getSkills } from "../../api/api.js";

// Functions
import { hideMenu, showMenu } from "./functions/action-menu-click.js";
import actionSetImage from "./functions/action-set-image.js";
import actionSetTheme from "./functions/action-set-theme.js";
import { actionDeskDownload, actionMobDownload } from "./functions/action-download-resume.js";
import actionToggleForm from "./functions/action-toggle-form.js";

// Helpers
import scrollActiveLinks from "./helpers/scroll-active-links.js";
import showScrollTop from "./helpers/show-scroll-top.js";
import hideSections from "./helpers/hide-sections.js";
import swiperOptions from "./helpers/swiper-options.js";
import hideLastTimeline from "./helpers/hide-last-timeline.js";
import inputOptions from "./helpers/input-options.js";
import loadSections from "./helpers/load-sections.js";

// Components
import { createContacts } from "./components/create-sections.js";
import createInputAlertMessage from "./components/create-input-alert-message.js";
import addHome from "./components/add-home.js";
import addContacts from "./components/add-contacts.js";
import addProfile from "./components/add-profile.js";
import addEducation from "./components/add-education.js";
import addExperience from "./components/add-experince.js";
import addCertificates from "./components/add-certificates.js";
import addLanguages from "./components/add-languages.js";
import addSkills from "./components/add-skills.js";


// Desestructuracion de la DOM
const { nav, toggle, navLinks, allSections, profileImg, scrolltop, themeBtn, areaCv, deskDownloadBtn, mobDownloadBtn, inputs } = html
const { socialSection, contactSection, educationSection, experienceSection, referencesSection } = sections

export async function App() {
  
  await createContacts(contactSection)
  // El loadSections se encarga de renderizar el DOM original y cargar los datos almacenados en el local storage
  await loadSections(educationSection)
  const education = await getEducation()
  const experience = await getExperience()
  const certificates = await getCertificates()
  const languages = await getLanguages()
  const skills = await getSkills()
  const {educationItems, experienceItems} = await getItems()
  const contacts = await getContacts()
  const disables = await getDisables()
  await createInputAlertMessage(contacts)

  document.addEventListener('DOMContentLoaded', e => {
    /*==================== SHOW MENU ON CLICK ====================*/
    showMenu(nav, toggle)
    // /*==================== HIDE MENU ON CLICK ====================*/
    hideMenu(nav, navLinks)
    /*==================== SCROLL INDICATE ACTIVE SECTIONS ====================*/
    scrollActiveLinks(allSections, nav)
    /*==================== SET PROFILE IMAGE ====================*/
    actionSetImage(profileImg)
    /*==================== SHOW SCROLL TOP ====================*/
    showScrollTop(scrolltop)
    /*==================== DARK LIGHT THEME ====================*/
    actionSetTheme(themeBtn)
    /*==================== DOWNLOAD RESUME DESKTOP ====================*/
    actionDeskDownload(deskDownloadBtn, areaCv)
    /*==================== DOWNLOAD RESUME MOBILE ====================*/
    actionMobDownload(mobDownloadBtn, areaCv)
    /*==================== SWIPER OPTIONS ====================*/
    swiperOptions()
    /*==================== INPUT OPTIONS ====================*/
    inputOptions(inputs)
    /*==================== FORM BUTTON ====================*/
    actionToggleForm(form)
    /*==================== HIDE SECTIONS ====================*/
    hideSections(socialSection, ...referencesSection)
    /*==================== HIDE TIME LINES ====================*/
    hideLastTimeline(educationItems, experienceItems)
  })
  
  /*==================== DISABLE INPUT FIELDS ====================*/
  actionInputDisable(disables)
  /*==================== ADD HOME ====================*/
  addHome(home)
  /*==================== ADD CONTACTS ====================*/
  addContacts(contacts)
  /*==================== ADD PROFILE ====================*/
  addProfile(profile)
  /*==================== ADD EDUCATION ====================*/
  addEducation(education)
  /*==================== ADD EXPERIENCE ====================*/
  addExperience(experience)
  /*==================== ADD CERTIFICATES ====================*/
  addCertificates(certificates)
  /*==================== ADD LANGUAGES ====================*/
  addLanguages(languages)
  /*==================== ADD SKILLS ====================*/
  addSkills(skills)
}

