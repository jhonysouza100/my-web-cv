// API DOM References
import { html, sections, form, items, home, profile, education } from "../../api/api.js"
import actionInputDisable from "./functions/action-input-disable.js";

// Async API DOM References
import { getContacts, getDisables } from "../../api/api.js";

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


// Desestructuracion de la DOM
const { nav, toggle, navLinks, allSections, profileImg, scrolltop, themeBtn, areaCv, deskDownloadBtn, mobDownloadBtn, inputs } = html
const { socialSection, contactSection, referencesSection } = sections
const { educationItems, experienceItems } = items

export async function App() {
  
  /*==================== CREATE SECTIONS(contacts) ====================*/
  await createContacts(contactSection)
  await loadSections(education)
  const contacts = await getContacts()
  const disables = await getDisables()
  /*==================== FORM INPUT SPAN MESSAGES ====================*/
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
  
}