# swiper()

Esta función inicializa un objeto `Swiper` que crea un carrusel de diapositivas con efecto de `cubo`. La función toma los siguientes parámetros:

`effect`: establece el efecto de transición del carrusel. En este caso, el valor es "cube".

`loop`: establece si el carrusel debe continuar después de llegar a la última diapositiva. En este caso, el valor es "true", lo que significa que el carrusel volverá a comenzar desde el principio después de la última diapositiva.

`grabCursor`: establece si el cursor debe cambiar a una mano cuando el usuario pasa el mouse sobre el carrusel. En este caso, el valor es "true".

`cubeEffect`: establece las propiedades específicas del efecto de cubo, como sombras y escalas.

`pagination`: agrega una paginación al carrusel para que el usuario pueda navegar entre las diapositivas. En este caso, el elemento HTML con la clase "swiper-pagination" se usa como contenedor para la paginación. La propiedad `clickable` permite que el usuario haga clic en las viñetas de la paginación para navegar entre las diapositivas. La propiedad `dynamicBullets` permite agregar o eliminar dinámicamente viñetas de la paginación a medida que cambian las diapositivas.

`navigation`: agrega botones de navegación al carrusel para que el usuario pueda ir a la diapositiva anterior o siguiente. En este caso, los elementos HTML con las clases "swiper-button-next" y "swiper-button-prev" se usan como los botones de navegación.