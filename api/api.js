const d = document
export const html = {
  nav: d.querySelector('[data-nav-menu]'),
  toggle: d.querySelector(`[data-toggle-btn] *`),
  navLinks: d.querySelectorAll(`[data-nav-link] *`),
  allSections: d.querySelectorAll(`[data-section-id][id]`),
  profileImg: d.querySelector(`[user-img]`),
  scrolltop: d.querySelector(`[data-scrolltop-btn]`),
  themeBtn: d.querySelector('[data-theme-btn]'),
  deskDownloadBtn: d.querySelector('[desk-download-btn]'),
  mobDownloadBtn: d.querySelector('[mob-download-btn]'),
  areaCv: d.querySelector('[data-area-cv]'),
  inputs: d.querySelectorAll('input'),
}

export const sections = {
  socialSection: d.querySelector('[social]'),
  contactSection: d.querySelector('[contact]'),
  referencesSection: d.querySelectorAll('[references]')
}

export const items = {
  educationItems: d.querySelectorAll('[education-item]'),
  experienceItems: d.querySelectorAll('[experience-item]')
}

export const form = {
  btn: d.querySelector('[data-form-btn]'),
  panel: d.querySelector('[data-form-panel]'),
  bg: d.querySelector('[data-bg-panel]')
}

export const contacts = {
  // ============ USER CONTACTS =============
  userLocation: d.querySelector('[user-location]'),
  userEmail: d.querySelector('[user-email]'),
  userPhone: d.querySelector('[user-phone]'),
  userLinkedin: d.querySelector('[user-linkedin]'),
  userGithub: d.querySelector('[user-github]'),
  userWebsite: d.querySelector('[user-website]'),
  // ============ FORM CONTACTS =============
  inputLocation: d.querySelector('[input-location]'),
  inputEmail: d.querySelector('[input-email]'),
  inputPhone: d.querySelector('[input-phone]'),
  inputLinkedin: d.querySelector('[input-linkedin]'),
  inputGithub: d.querySelector('[input-github]'),
  inputWebsite: d.querySelector('[input-website]')
}