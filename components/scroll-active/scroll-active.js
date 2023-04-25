const W = window
export default function scrollActive(sections, navMenu) {

  // inicializa el primer elemnto <a> del navMenu con la clase 'active-link'
  navMenu.querySelector('a').classList.add('active-link')
  function cb() {
    const scrollY = W.pageYOffset
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50,
        sectionId = section.getAttribute("id")
        // const testId = D.querySelector(`.${navMenu.className} a[href*="${sectionId}"]`)
        // console.log(navMenu.querySelector(`a[href*="${sectionId}"]`))

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.add('active-link')
      } else {
        navMenu.querySelector(`a[href*="${sectionId}"]`).classList.remove('active-link')
      }
    })
  }
  W.addEventListener("scroll", cb)
}
