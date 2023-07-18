# actionSetImage()

Esta función toma un argumento "img", que es un elemento del DOM que representa una imagen. La función agrega un evento de clic al documento utilizando el método "addEventListener()".

La función verifica si el objetivo del evento de clic coincide con el elemento de la imagen, utilizando el método "matches()" de "e.target" y comparando la clase del elemento con la clase del argumento "img". Si el objetivo del evento es la imagen, se crea un nuevo elemento "input" que se utiliza para seleccionar una imagen del sistema de archivos local. Se establece el tipo de entrada en "file" y el atributo "accept" en "image/*". También se agrega un evento "change" que se activa cuando el usuario selecciona una imagen.

Cuando se selecciona una imagen, se obtiene el archivo utilizando la propiedad "files[0]" del evento. Se crea un nuevo objeto FileReader y se lee la imagen seleccionada utilizando el método "readAsDataURL()". Cuando se completa la carga de la imagen, se establece el atributo "src" de la imagen en la propiedad "result" del objeto FileReader. Además, se guarda la imagen en la memoria local del navegador utilizando el método "localStorage.setItem()".

Finalmente, la función verifica si hay una imagen guardada previamente en la memoria local del navegador utilizando el método "localStorage.getItem()". Si se encuentra una imagen guardada, se establece el atributo "src" de la imagen en el valor de la imagen guardada.

En resumen, esta función implementa la funcionalidad para permitir que el usuario seleccione y cargue una imagen en un elemento del DOM. También guarda la imagen seleccionada en la memoria local del navegador y la muestra en el elemento "img" cuando se carga la página.