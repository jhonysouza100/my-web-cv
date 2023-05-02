# generatePdf()

Esta función se encarga de generar un archivo PDF a partir del contenido de un área específica del HTML, cuando se hace clic en un botón específico (resumeBtn).

La función contiene tres funciones internas:

scaleCv(): que agrega la clase `.scale-cv` al body del documento, lo que reduce el tamaño de los elementos.
removeScaleCv(): que elimina la clase .scale-cv del body del documento, lo que restaura el tamaño original de los elementos.
generateResume(): que llama a la biblioteca `html2pdf` para generar un archivo PDF a partir del contenido del área especificada (areaCv), utilizando las opciones definidas en el objeto `opt`.
La función espera a que se haga clic en el botón especificado (resumeBtn). Cuando se hace clic en el botón, se ejecutan las siguientes acciones:

Se agrega la clase .scale-cv al body para reducir el tamaño de los elementos.
Se llama a la función generateResume() para generar el archivo PDF utilizando `html2pdf`.
Se espera 5 segundos antes de llamar a la función removeScaleCv(), lo que restaura el tamaño original de los elementos del documento.