export default function addEducationItem(education) {
  education.add.addEventListener('click', e => {
    const educationItem = document.createElement('div')
    e.preventDefault()
    educationItem.innerHTML = `
    <div class="item_content" education-item>
    <div class="time_line">
        <span class="rounder"></span>
        <span class="line" line></span>
      </div>
      <div class="item_data bd-grid">
        <h3 class="item_title" user-title>${education.title.value}</h3>
        <span class="item_institute" user-institute>${education.institute.value}</span>
        <span class="education_year" user-year>${education.year.value}</span>
      </div>
      </div>`
    education.container.prepend(educationItem)
  })
}