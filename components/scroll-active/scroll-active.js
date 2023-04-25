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
        // const testId = document.querySelector(`${navMenu.classList.value}`)
        console.log(document.querySelector(`.${navMenu.classList.value} a[href*="${sectionId}"]`)) // retorna null

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // navMenu.querySelector(`a[href*="${sectionId}"]`).classList.add('active-link')
      } else {
        // navMenu.querySelector(`a[href*="${sectionId}"]`).classList.remove('active-link')
      }
    })
  }
  W.addEventListener("scroll", cb)
}
