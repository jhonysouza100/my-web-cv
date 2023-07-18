# swiperOptions()

La función swiperOptions() crea una instancia de la clase Swiper y la asigna a la variable "swiperOptions". La instancia de Swiper se configura con varias opciones, que incluyen:

- effect: "cube": establece el efecto de transición de cubo.
- loop: true: habilita el modo de bucle.
- centerSlide: 'true': habilita el centrado de la diapositiva activa.
- fade: 'true': establece el efecto de transición de fundido.
- grabCursor: 'true': habilita el cursor de agarre.
- cubeEffect: define los siguientes sub-parámetros del efecto de cubo:
    - shadow: false: desactiva las sombras.
    - slideShadows: false: desactiva las sombras de las diapositivas.
    - shadowOffset: 20: establece el desplazamiento de la sombra.
    - shadowScale: 0.95: establece la escala de la sombra.
- pagination: habilita la paginación:
    - el: ".swiperOptions-pagination": establece el selector del elemento paginador.
    - clickable: true: habilita la paginación clickeable.
    - dynamicBullets: true: habilita la creación dinámica de balas de paginación.
- navigation: habilita la navegación:
    - nextEl: ".swiperOptions-button-next": establece el selector del botón siguiente.
    - prevEl: ".swiperOptions-button-prev": establece el selector del botón anterior.

La instancia de Swiper se crea para el elemento con la clase "mySwiper". 
