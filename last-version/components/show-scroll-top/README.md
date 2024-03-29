# showScrollTop()

Esta función toma un argumento "scrolltop", que es un elemento del DOM que representa un botón de desplazamiento hacia arriba. La función agrega un evento de desplazamiento al objeto "window" utilizando el método "addEventListener()" y llama a una función de devolución de llamada "cb" cuando ocurre el evento.

La función de devolución de llamada "cb" verifica la posición vertical actual de la ventana utilizando la propiedad "scrollY" del objeto "this". Si la posición vertical actual es mayor o igual a 200 píxeles, se agrega la clase "show-scroll" al botón de desplazamiento hacia arriba, lo que hace que el botón sea visible. De lo contrario, se elimina la clase "show-scroll", lo que oculta el botón de desplazamiento hacia arriba.

En resumen, esta función implementa la funcionalidad para mostrar u ocultar un botón de desplazamiento hacia arriba en función de la posición vertical actual de la ventana. Cuando la posición vertical es mayor o igual a 200 píxeles, el botón de desplazamiento hacia arriba es visible, de lo contrario, está oculto.