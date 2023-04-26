
## darkTheme()

La función darkTheme implementa un mecanismo para alternar entre un tema claro y oscuro en una página web. El argumento themeBtn es un botón que se utiliza para cambiar el tema.

La función inicia obteniendo los valores de tema y de icono seleccionados previamente del almacenamiento local mediante localStorage.getItem. Si se han establecido, se establece el tema y el icono seleccionado como se espera utilizando las funciones classList.add y classList.remove.

Luego, la función añade un listener al evento click en todo el documento. Si el elemento en el que se hizo clic es themeBtn, la función alterna la clase `dark-theme` del body y la clase `bx-sun` del botón, utilizando classList.toggle. Finalmente, la función actualiza los valores seleccionados de tema y de icono en el almacenamiento local utilizando localStorage.setItem.

En resumen, la función darkTheme establece y alterna el tema y el icono seleccionados en una página web y los almacena en el almacenamiento local para que se conserven a lo largo del tiempo.






