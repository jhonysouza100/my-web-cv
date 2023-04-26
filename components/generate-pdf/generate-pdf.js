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
  // Html2pdf options
  let opt = {
    margin: 0,
    filename: 'Jhon-Smith-CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
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