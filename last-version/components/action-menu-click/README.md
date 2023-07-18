# Menu Actions

La función `actionHideMenu` es una función que recibe dos argumentos: `navMenu` y `navLinks`. Esta función se encarga de ocultar el menú de navegación cuando se hace clic en cualquiera de los elementos de navegación.

### Parámetros

- `navMenu` (tipo: `HTMLElement`): El elemento que representa el menú de navegación.
- `navLinks` (tipo: `Array`): Un array de elementos de navegación.

### Comportamiento

1. La función itera sobre cada elemento en `navLinks` utilizando el método `forEach`.
2. Para cada elemento, se agrega un evento de clic utilizando `addEventListener`.
3. Cuando se hace clic en uno de los elementos de navegación, se ejecuta una función de devolución de llamada.
4. En la función de devolución de llamada, se utiliza `classList.remove` para eliminar la clase "show-menu" del elemento `navMenu`.
5. Como resultado, al hacer clic en un elemento de navegación, se oculta el menú de navegación al eliminar la clase "show-menu" del elemento `navMenu`.

La función `actionShowMenu` es otra función que recibe dos argumentos: `navMenu` y `toggleBtn`. Esta función se encarga de mostrar u ocultar el menú de navegación cuando se hace clic en el botón de alternancia.

### Parámetros

- `navMenu` (tipo: `HTMLElement`): El elemento que representa el menú de navegación.
- `toggleBtn` (tipo: `HTMLElement`): El botón de alternancia utilizado para mostrar u ocultar el menú.

### Comportamiento

1. La función agrega un evento de clic al documento utilizando `addEventListener`.
2. Cuando se hace clic en cualquier parte del documento, se ejecuta una función de devolución de llamada.
3. En la función de devolución de llamada, se verifica si el objetivo del evento (`e.target`) es igual al botón de alternancia (`toggleBtn`).
4. Si el objetivo del evento es igual al botón de alternancia, se utiliza `classList.toggle` para agregar o eliminar la clase "show-menu" del elemento `navMenu`.
5. Como resultado, al hacer clic en el botón de alternancia, se muestra u oculta el menú de navegación al agregar o eliminar la clase "show-menu" del elemento `navMenu`.

### Ejemplo de uso

```js
import { actionHideMenu, actionShowMenu } from './menuUtils.js';

const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const toggleBtn = document.querySelector('.toggle-button');

actionHideMenu(navMenu, navLinks);
actionShowMenu(navMenu, toggleBtn);
```

En este ejemplo, se importan las funciones `actionHideMenu` y `actionShowMenu` desde el archivo `menuUtils.js`. Luego, se selecciona el elemento que representa el menú de navegación utilizando `querySelector` y se seleccionan todos los elementos de navegación y el botón de alternancia. A continuación, se llama a las funciones `actionHideMenu` y `actionShowMenu`, pasando los elementos correspondientes como argumentos. Esto configurará el comportamiento para ocultar el menú al hacer clic en un elemento de navegación y mostrar u ocultar el menú al hacer clic en el botón de alternancia.