# Challenge

Este proyecto es una aplicación web desarrollada con Vite, React y Vitest.
La combinación de Vite y React permite una configuración rápida y un rendimiento óptimo durante el desarrollo. Vite ofrece una experiencia de desarrollo en tiempo real, permitiendo la recarga instantánea de módulos sin necesidad de reconstruir todo el proyecto. React, por otro lado, es una biblioteca popular y eficiente para construir interfaces de usuario interactivas.

Vitest es una herramienta de prueba unitaria optimizada para proyectos Vite y React. Permite escribir pruebas confiables y rápidas para: componentes, hooks y contexts de React; y funciones de JavaScript.

## Recomendaciones:

- Proyecto desarrollado en Node 18, así que es la versión que recomiendo para levantar el proyecto.

## Instalación

1. Clona el repositorio: `git clone <URL del repositorio>`
2. Ve al directorio del proyecto: `cd <directorio del proyecto>`
3. Instala las dependencias: `npm install`

## Uso

### Ejecuta el servidor de desarrollo:

Esto iniciará el servidor de desarrollo de Vite y te dará una URL local donde puedes acceder a la aplicación.

```bash
npm run dev
```

### Ejecuta las pruebas unitarias:

Esto ejecutará las pruebas unitarias utilizando Vitest y mostrará los resultados en la consola.

```bash
npm run test
```

### Ejecutar los test coverage:

Nos permite ver las estadisticas de coverage de nuestro código

```bash
npm run coverage
```

### Generar el build:

Generar el build nos permite obtener una versión de nuestro código lista para producción.

```bash
npm run build
```

Esto nos va a crear la carpeta `__dist__` en la cual se puede ver el resultado. Recomiendo ["live server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para tener una buena preview.

Si se desea que el build lo genere con URLs absolutas se puede editar el archivo `vite.config.js` eliminamos "base"
