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
  homesection: d.querySelector('[home]'),
  socialSection: d.querySelector('[social]'),
  contactSection: d.querySelector('[contact]'),
  profileSection: d.querySelector('[profile]'),
  educationSection: d.querySelector('[education]'),
  skillsSection: d.querySelector('[skills]'),
  experienceSection: d.querySelector('[experience]'),
  certificatesSection: d.querySelector('[certificates]'),
  referencesSection: d.querySelectorAll('[references]'),
  languagesSection: d.querySelectorAll('[languages]'),
  interestsSection: d.querySelectorAll('[interests]')
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

/*==================== DISABLE FIELDS ====================*/
export function getDisables() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        label: d.querySelectorAll('.label_disable'),
        enable: d.querySelectorAll('.bx-undo'),
        disable: d.querySelectorAll('.bx-trash-alt'),
        input: d.querySelectorAll('.input_disable'),
        user: d.querySelectorAll('.info_disable')
      }
      return obj
    }
    resolve( get() )
  })
}

/*==================== OBJETOS CON REFERENCIAS DE GRUPOS HTML QUE INTERACTUAN CON EL FORMULARIO ====================*/
export function getContacts() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ USER CONTACTS =============
        userLocation: document.querySelector('[user-location]'),
        userEmail: document.querySelector('[user-email]'),
        userPhone: document.querySelector('[user-phone]'),
        userLinkedin: document.querySelector('[user-linkedin]'),
        userGithub: document.querySelector('[user-github]'),
        userWebsite: document.querySelector('[user-website]'),
        // ============ FORM CONTACTS =============
        inputLocation: document.querySelector('[input-location]'),
        inputEmail: document.querySelector('[input-email]'),
        inputPhone: document.querySelector('[input-phone]'),
        inputLinkedin: document.querySelector('[input-linkedin]'),
        inputGithub: document.querySelector('[input-github]'),
        inputWebsite: document.querySelector('[input-website]')
      }
      return obj
    }
    resolve( get() )
  })
}


export const home = {
  // ============ HOME USER DATA =============
  userName: d.querySelector('[user-name]'),
  userProfession: d.querySelector('[user-profession]'),
  menuName: d.querySelector('[menu-name]'),
  // ============ HOME FORM DATA =============
  inputName: d.querySelector('[input-name]'),
  inputLastname: d.querySelector('[input-lastname]'),
  inputProfession: d.querySelector('[input-profession]') 
}

export const profile = {
  // ============ USER PROFILE =============
  userProfile: d.querySelector('[user-profile]'),
  // ============ FORM PROFILE =============
  textProfile: d.querySelector('[text-profile]')
}

export const education = {
  // ============ USER EDUCATION =============
  userTitle: d.querySelector('[user-title]'),
  userInstitute: d.querySelector('[user-institute]'),
  userYear: d.querySelector('[user-year]'),
  // ============ FORM EDUCATION =============
  title: d.querySelector('[input-title]'),
  institute: d.querySelector('[input-institute]'),
  year: d.querySelector('[input-year]'),
  // ============ EDUCATION ELEMENT =============
  container: d.querySelector('[education-container]'),
  add: d.querySelector('[add-education]')
}
