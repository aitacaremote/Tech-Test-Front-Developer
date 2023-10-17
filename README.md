# ClothTagger

ClothTagger es una aplicación web desarrollada en Angular que te permite gestionar y etiquetar prendas de vestir. Utiliza el servicio de MediaPipe para detectar automáticamente el tipo de prenda antes de añadirla a tu colección. Además, puedes agregar, modificar y eliminar prendas de manera sencilla.

La aplicación cuenta con la funcionalidad de tomar fotos de las prendas directamente desde la cámara del dispositivo, lo que facilita la captura de imágenes de alta calidad para su etiquetado.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de ejecutar la aplicación:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Instalación

1. Clona el repositorio de ClothTagger:

```bash
   git clone https://github.com/MiguelA-Izquierdo/Tech-Test-Front-Developer
```

2. Dirígete a la rama en la que se encuentra el proyecto:

```bash
   git checkout feature/Miguel-Angel-Izquierdo
```

3. Instala las dependencias:

```bash
   npm install
```

## Uso

1.Inicia la aplicación:

```bash
   ng serve
```

2. Abre tu navegador y ve a http://localhost:4200.

3. Comienza a etiquetar tus prendas de vestir.

## Pruebas Unitarias

Las pruebas unitarias Jasmine están incluidas en los directorios de cada componente y servicio del proyecto. Puedes encontrar y ejecutar estas pruebas en los archivos con nombres que terminan en .spec.ts dentro de cada directorio correspondiente.

Para ejecutar todas las pruebas, asegúrate de tener todas las dependencias instaladas y utiliza el siguiente comando:

```bash
   cd npm run test
```

## Caracteristicas

\*Detección Automática: ClothTagger utiliza el servicio de MediaPipe para detectar automáticamente el tipo de prenda a partir de una imagen.

\*Gestión de Prendas: Puedes agregar nuevas prendas, modificar información existente o eliminar prendas de tu colección.
