# scrollActiveLinks()

Esta función toma dos argumentos: "sections" y "navMenu". "sections" es una colección de elementos del DOM, mientras que "navMenu" es un elemento del DOM que contiene enlaces de navegación.

La función asigna la clase "active-link" al primer elemento <a> de "navMenu" para resaltar el primer enlace de navegación como activo. Luego, se agrega un evento de "scroll" al objeto global de la ventana ("window"), que ejecuta una función llamada "cb" en cada cambio de scroll.

Dentro de "cb", se obtiene la posición actual de desplazamiento de la página ("scrollY") a través de "window.pageYOffset". Luego, se recorre cada elemento de "sections" y se obtiene su altura, posición superior y atributo de "id". Si el desplazamiento de la página está en la sección correspondiente, se agrega la clase "active-link" al enlace de navegación correspondiente dentro de "navMenu". Si no, se elimina la clase "active-link" del enlace de navegación correspondiente dentro de "navMenu".

En resumen, esta función implementa la funcionalidad de resaltado de enlaces de navegación activos en función de la posición de desplazamiento actual de la página.