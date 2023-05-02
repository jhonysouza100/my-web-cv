# createSections()

La función `createSections` recibe un elemento `section` como argumento y se encarga de crear los enlaces de contacto y añadirlos como hijos del elemento `section`.

### Parámetros

- `section` (tipo: `HTMLElement`): El elemento en el cual se van a añadir los enlaces de contacto.

### Comportamiento

1. Primero, se limpia el contenido del elemento `section` para evitar duplicados.
2. Luego, se define un objeto `contacts` con la información de contacto. Este objeto tiene cinco propiedades, cada una representa un tipo de contacto (correo electrónico, número de teléfono, LinkedIn, GitHub y sitio web).
3. Después, se define una función interna `createContacts` que se encarga de crear los enlaces de contacto.
4. En esta función, se itera sobre las propiedades del objeto `contacts`.
5. Para cada propiedad, se crea un nuevo elemento `a`, se establecen sus propiedades (`href`, `target` y `user-<tipo de contacto>`) y se le añaden hijos (`i`, `space` y texto).
6. Por último, se añade el nuevo elemento `a` al elemento `section`.
7. Se llama a la función `createContacts` para crear los enlaces de contacto y añadirlos al elemento `section`.

### Ejemplo de uso

```js
import createSections from './createSections.js'

const sectionElement = document.querySelector('#contact-section')
createSections(sectionElement)
