export default function loadSections(arg) {
  return new Promise((resolve, reject) => {
    const load = () => {
      const savedContainer = localStorage.getItem('educationContainer')
      if (savedContainer) {
        const savedContainerObject = JSON.parse(savedContainer)
        // console.log(savedContainerObject)
        // console.log(arg[1].children[1])
        // Create a temporary container element
        const tempContainer = document.createElement('div')
        // Set the innerHTML of the temporary container with the given text
        tempContainer.innerHTML = savedContainerObject
        // The temporary container now contains the parsed DOM elements
        // Access the first child of the temporary container (the root element) to get the entire DOM structure
        const domElement = tempContainer.firstElementChild
        arg[1].children[1].replaceWith(domElement)
      }
    }

  resolve( load() )

  })

}