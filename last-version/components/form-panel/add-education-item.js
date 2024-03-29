import hideLastLine from "../time-line/hide-last-line.js"

export default function addEducationItem(education) {
  education.add.addEventListener('click', e => {
    const educationItem = document.createElement('div')
    e.preventDefault()
    educationItem.classList.add("item_content")
    educationItem.setAttribute('education-item', '')
    educationItem.innerHTML = `
    <div class="time_line">
        <span class="rounder"></span>
        <span class="line" line></span>
      </div>
      <div class="item_data bd-grid">
        <h3 class="item_title" education-title>${education.title.value}</h3>
        <span class="item_institute" education-institute>${education.institute.value}</span>
        <span class="education_year" education-year>${education.year.value}</span>
      </div>`
      // Agrega el item primero en la lista
    education.container.prepend(educationItem)
    // console.log(education.container.querySelectorAll('[education-item]'))
    hideLastLine(education.container.querySelectorAll('[education-item]'))
  })
}