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
import createSections from "./helpers/create-sections.js";
import hideLastTimeline from "./helpers/hide-last-timeline.js";
import inputOptions from "./helpers/input-options.js";

// API DOM References
import { html, sections, form, items, contacts } from "../../api/api.js"

// Desestructuracion de la DOM
const { nav, toggle, navLinks, allSections, profileImg, scrolltop, themeBtn, areaCv, deskDownloadBtn, mobDownloadBtn, inputs } = html
const { socialSection, contactSection, referencesSection } = sections
const { educationItems, experienceItems } = items
const { userLinkedin } = contacts

export function App() {
  
  /*==================== CREATE SECTIONS(contacts) ====================*/
  createSections(contactSection)
  console.log(userLinkedin)
  
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
  })

  /*==================== HIDE TIME LINES ====================*/
  hideLastTimeline(educationItems, experienceItems)
}