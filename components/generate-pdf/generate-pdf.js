export default function generatePdf(resumeBtn, areaCv) {
  // ======================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ========================
  function scaleCv() {
    document.body.classList.add('scale-cv')
  }

  // ======================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ========================
  function removeScaleCv() {
    document.body.classList.remove('scale-cv')
  }

  // Función para llamar a las opciones areaCv y Html2Pdf
  function generateResume() {
    html2pdf(areaCv, opt)
  }
  /*==================== GENERATE PDF ====================*/
  let savedName = `${localStorage.getItem('name').toLocaleLowerCase()}` || 'jhon',
      savedLastName = `${localStorage.getItem('lastname').toLocaleLowerCase()}` || 'smith'
  // Html2pdf options
  let opt = {
    margin: 0,
    filename: `${savedName}-${savedLastName}-resume.pdf`,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'A4', orientation: 'portrait' }
  }
  // When the button is clicked, it executes the three functions
  document.addEventListener('click', (e) => {
    if(e.target === resumeBtn) {
      // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
      scaleCv()
      // 2. The PDF is generated
      generateResume()
      // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
      setTimeout(removeScaleCv, 5000)
    }

  })
  
}