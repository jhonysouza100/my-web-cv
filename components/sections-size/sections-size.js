export default function sectionsSize(arg) {
  const educationContainer = document.querySelector('[education-container]')
  // educationContainer.innerHTML = ""
  for (var i = 0; i < 3; i++) {
    if (arg[i]) {
      educationContainer.appendChild(arg[i])
    }
  }
}