# Plantilla para la Práctica final

En esta plantilla encontrarás todo lo necesario para realizar la práctica final. La aplicación de React ha sido generada utilizando [create-react-app](https://github.com/facebook/create-react-app). Esto te servirá como comienzo en el desarrollo, aunque tendrás que desarrollar tu propia configuración cuando llegues al apartado 8.

A parte de la aplicación de React, esta plantilla incluye un servidor basadon en [json-server](https://github.com/typicode/json-server) al que puedes hacer peticiones. Este incluye dos tipos de recursos:

* Álbums (albums)
* Canciones (songs)

Puedes ver los distintos parámetros en el fichero `./server/data.json`. A priori, no te hará falta modificar ese fichero, pero siempre puedes agregar nuevos elementos si quieres extender las funcionalidades de tu aplicación.

## Iniciar el proyecto

El proyecto se inicia directamente con `yarn start`.

Este comando hace uso de `npm-run-all` que ejecuta el servidor y el cliente al mismo tiempo. El servidor estará escuchando en el puerto 3001 y la aplicación en el 3000. No obstante, la aplicación ya viene preconfigurada con un proxy que redirige cualquier llamada al servidor. Por ejemplo:

```/albums -> http://localhost:3001/albums```

## Dudas

Cualquier duda que tengáis sobre la plantilla o el proyecto la podéis resolver en los foros. Estaré encantado de ayudarte a completar la práctica.

## Créditos

* Fotografía de la carátula de los álbums por [James Owen](https://unsplash.com/photos/c-NBiJrhwdM)
* Photo by [blocks](https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [C D-X](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Daniel Schludi](https://unsplash.com/collections/5857062/domo-audio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Sašo Tušar](https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Joshua Fuller](https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Jacek Dylag](https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Gianni Scognamiglio](https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Efe Kurnaz](https://unsplash.com/s/photos/disc-cover?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Photo by [Ben Sweet](https://unsplash.com/s/photos/disc-cover?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
* Audio compuesto por [Kevin MacLeod](https://twitter.com/kmacleod)
