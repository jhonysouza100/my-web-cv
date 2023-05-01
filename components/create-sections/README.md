## createSections()


Esta función crea un conjunto de elementos con información de contacto, tales como correo electrónico, número de teléfono, perfiles de LinkedIn y GitHub, y un enlace al sitio web personal del autor.

Primero, se crea un objeto contacts que contiene información sobre los diferentes tipos de contacto mencionados anteriormente. A continuación, la función itera a través del objeto contacts para crear un elemento `<a>` para cada tipo de contacto.

Para cada elemento `<a>`, se establecen sus propiedades, como la clase, el atributo href, el objetivo y se crea un elemento `<i>` para el icono. Además, se crea un elemento de `espacio` y un nodo de `texto` para el texto del contacto. Finalmente, todos los elementos se agregan como hijos del elemento `<a>` y se agregan al elemento `section`.

En resumen, la función crea un conjunto de elementos `<a>` que muestran la información de contacto del usuario.