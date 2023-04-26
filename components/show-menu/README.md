## showMenu()

Esta función toma dos argumentos: "navMenu" y "toggleBtn". "navMenu" es un elemento del DOM que contiene el menú de navegación y "toggleBtn" es un elemento del DOM que, cuando se hace clic en él, muestra o oculta el menú de navegación.

La función agrega un evento "click" a todo el documento a través del objeto "document" y, en la función de devolución de llamada, verifica si el evento se originó en el botón de alternancia "toggleBtn" utilizando la propiedad "target" del evento. Si el evento se originó en "toggleBtn", la función "toggle()" se utiliza para alternar la clase "show-menu" en el elemento "navMenu". La clase "show-menu" se utiliza para mostrar u ocultar el menú de navegación en función de si está presente o no.

En resumen, esta función implementa la funcionalidad de mostrar u ocultar un menú de navegación cuando se hace clic en un botón de alternancia específico en la página.