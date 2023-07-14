export default function scrollActiveLinks(sections, navMenu) {
  navMenu.querySelector('a').classList.add('active-link')
  function cb() {
    const scrollY = window.pageYOffset
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50,
        sectionId = section.getAttribute("id")
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.add('active-link')
      } else {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.remove('active-link')
      }
    })
  }
  window.addEventListener("scroll", cb)
}