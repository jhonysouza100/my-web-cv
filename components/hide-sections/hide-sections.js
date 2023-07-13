export default function hideSections(...sections) {
  sections.forEach((el) => (el.style.display = "none"))
}
