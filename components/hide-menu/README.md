## hideMenu()

Esta función toma dos argumentos: "navMenu" y "navLinks". "navMenu" es un elemento del DOM que contiene el menú de navegación, mientras que "navLinks" es una colección de elementos del DOM que representan los enlaces del menú de navegación.

La función recorre cada elemento de "navLinks" utilizando el método "forEach()". Para cada elemento, se agrega un evento de clic que ejecuta una función. Esta función elimina la clase "show-menu" del elemento "navMenu" utilizando el método "classList.remove()".

En resumen, esta función implementa la funcionalidad para ocultar el menú de navegación cuando se hace clic en uno de los enlaces del menú. Cuando se hace clic en cualquier enlace de "navLinks", se elimina la clase "show-menu" del elemento "navMenu", lo que oculta el menú de navegación.