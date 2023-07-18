La función `hideLastLine` es una función que recibe una serie de argumentos `items` utilizando el operador de propagación `...`. Esta función se encarga de ocultar la última línea de cada elemento proporcionado en los argumentos.

### Parámetros

- `items` (tipo: `Array`): Una serie de elementos a los que se les desea ocultar la última línea.

### Comportamiento

1. La función itera sobre cada elemento en `items` utilizando el método `forEach`.
2. Para cada elemento, se realiza otra iteración utilizando el método `forEach` para recorrer sus elementos internos.
3. Dentro de la iteración interna, se verifica si el elemento actual (`item`) es el último elemento del arreglo (`index === el.length - 1`).
4. Si es el último elemento, se selecciona el elemento con la clase `.line` dentro de `item` utilizando `querySelector` y se establece su estilo de `display` a "none" para ocultarlo.
5. Si no es el último elemento, se selecciona el elemento con la clase `.line` dentro de `item` utilizando `querySelector` y se establece su estilo de `display` a "block" para mostrarlo.
6. Una vez que se completa la iteración, la función ha ocultado la última línea de cada elemento proporcionado en los argumentos.

### Ejemplo de uso

```js
import hideLastLine from './hideLastLine.js'

const elements = document.querySelectorAll('.container')
hideLastLine(elements)
```

En este ejemplo, se importa la función `hideLastLine` desde el archivo `hideLastLine.js`. Luego, se seleccionan todos los elementos con la clase `.container` utilizando `querySelectorAll` y se pasan como argumento a la función `hideLastLine`. Esto ocultará la última línea de cada uno de los elementos seleccionados.