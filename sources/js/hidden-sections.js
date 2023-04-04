// Funcion para ocultar seciones del documento
export default function hiddenSections(...e) {
  // Recibe x cantidad de secciones que se quieran ocultar
  e.forEach((e) => (e.style.display = "none"))
}
