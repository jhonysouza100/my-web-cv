export default function loadSections(arg) {
  return new Promise((resolve, reject) => {
    const load = () => {
      const fragment = document.createDocumentFragment()
      for(let i = 0; i < 4; i++) {
        // fragment.appendChild(localStorage.getItem(`educationItem-${i}`))
        console.log(localStorage.getItem(`educationItem-${i}`))
      }
      arg.container.innerHTML = ''
      arg.container.appendChild(fragment)
    }
    resolve( load() )
  })
}