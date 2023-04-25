## hideSections()

Esta función toma un número variable de argumentos utilizando el operador de propagación "..." y los almacena en un array llamado "el". Estos argumentos deben ser elementos del DOM que representan secciones que se desean ocultar.

La función recorre cada elemento de "el" utilizando el método "forEach()" y para cada elemento, establece el valor de la propiedad "display" en "none". Esto oculta el elemento estableciendo su propiedad CSS "display" en "none".

En resumen, esta función implementa la funcionalidad para ocultar secciones del DOM. Toma una lista variable de elementos DOM y establece su propiedad "display" en "none", lo que oculta cada sección.