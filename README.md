# To-Do List App

## Descripción
Aplicación móvil To-Do List desarrollada con Ionic + Angular como parte de una prueba técnica. El objetivo es construir una aplicación híbrida que permita gestionar tareas, categorizarlas, filtrarlas por categoría e integrar Firebase Remote Config para habilitar o deshabilitar funcionalidades mediante feature flags.

## Objetivo de la prueba
Desarrollar una aplicación base con lista de tareas, soporte para categorías, integración con Firebase Remote Config, optimización de rendimiento y preparación para compilación móvil con Cordova.

## Estado actual
- Entorno de desarrollo configurado correctamente en Windows.
- Proyecto base creado con Ionic + Angular.
- Aplicación ejecutándose correctamente con `ionic serve`.
- Repositorio Git configurado y sincronizado con GitHub.
- Rama de trabajo creada para el desarrollo incremental.
- Modelo base de tareas implementado.
- Servicio base de tareas implementado con persistencia local usando `localStorage`.

## Repositorio y control de versiones

### Repositorio remoto
- `https://github.com/laura-152020/todo-app.git`

### Ramas utilizadas
- `main`: rama principal
- `feature/todo-base`: rama de desarrollo actual

## Tecnologías y herramientas

### Frameworks y librerías
- Ionic
- Angular
- Cordova
- LocalStorage

### Herramientas de desarrollo
- Node.js v25.8.2
- npm 11.11.1
- Ionic CLI 7.2.1
- Cordova CLI 13.0.0
- Git 2.53.0.windows.2
- OpenJDK 21.0.9
- Android Debug Bridge (adb) 1.0.41
- Visual Studio Code

## Requisitos previos
Antes de ejecutar el proyecto, se debe contar con lo siguiente:

- Node.js
- npm
- Ionic CLI
- Cordova CLI
- Git
- Java
- Android SDK
- Android Platform Tools / adb
- Visual Studio Code

## Instalación del proyecto

Clonar el repositorio:

```bash
git clone https://github.com/laura-152020/todo-app.git
cd todo-app
npm install

## Ejecucion en entorno local
Ionic serve

## Estructura inicial del proyecto
src/
 └── app/
     ├── home/
     ├── models/
     ├── services/
     ├── app-routing.module.ts
     ├── app.component.ts
     └── app.module.ts

## To-Do List base
## Resumen de avance por fases

### Fase 1: To-Do List base
En esta fase se construyó la funcionalidad principal de la aplicación para la gestión de tareas. Se implementó el CRUD básico de tareas, permitiendo crear, listar, editar, completar y eliminar tareas. Además, se incorporó persistencia local mediante `localStorage`, mensajes de retroalimentación para el usuario y un estado vacío cuando no existen tareas registradas.

### Fase 2: Estructura y mantenibilidad
En esta fase se mejoró la organización interna del proyecto para mantener un código más limpio, legible y fácil de escalar. Se separaron correctamente los modelos, servicios y la vista principal, se centralizó la lógica de negocio en los servicios y se evitó incorporar lógica compleja en la plantilla HTML. Esto dejó el proyecto mejor preparado para seguir creciendo con nuevas funcionalidades.

### Fase 3: Categorías
En esta fase se implementó la gestión de categorías para las tareas. La aplicación ahora permite crear, editar y eliminar categorías, asignarlas a cada tarea y mostrar la categoría asociada en la interfaz. También se añadieron validaciones para evitar categorías vacías, dejando lista la base para la siguiente fase de filtrado por categoría.

## Fase 4: Filtro por categoría
En esta fase se implementó el filtrado de tareas por categoría, permitiendo al usuario visualizar únicamente las tareas asociadas a una categoría específica. Se añadió un selector visible y fácil de usar, con opciones para mostrar todas las tareas, únicamente las tareas sin categoría o las tareas pertenecientes a una categoría concreta. El filtro funciona correctamente tanto para tareas completadas como no completadas, mejorando la organización y la navegación dentro de la aplicación.

## Fase 5: Experiencia de usuario
Se mejoró la interfaz de la aplicación para hacerla más limpia, clara y agradable. Se ajustaron estilos, espaciados, tarjetas, visibilidad del estado completado y confirmaciones antes de eliminar. Además, se reforzó la retroalimentación al usuario y se mejoró la visualización en móvil.

##Fase 6: Firebase + Remote Config
Se integró Firebase en la aplicación, configurando correctamente el proyecto y conectándolo con la app. Se implementó Remote Config para gestionar funcionalidades de forma remota mediante feature flags. En particular, se configuró un flag para activar o desactivar el filtro por categoría, permitiendo modificar el comportamiento de la aplicación sin necesidad de cambiar el código. Se verificó su funcionamiento desde la consola de Firebase, comprobando cómo la interfaz responde dinámicamente al activar o desactivar el flag.

##Fase 7: Rendimiento

Se optimizó el rendimiento de la aplicación para garantizar un comportamiento fluido incluso con una gran cantidad de tareas. Se implementó trackBy en las listas para reducir renders innecesarios y se evitó recalcular filtros directamente en la vista, aplicándolos solo cuando cambian los datos. Se mantuvieron operaciones simples sobre arreglos y se optimizó la obtención de nombres de categorías mediante una estructura de acceso rápido en memoria. Además, se realizaron pruebas con múltiples tareas para verificar que la aplicación mantiene un rendimiento estable y una experiencia de usuario fluida.

##Fase 8: Cordova y build móvil

Se integró Cordova al proyecto y se agregó la plataforma Android para preparar la aplicación como app móvil híbrida. Se configuró el entorno de compilación con Android SDK, Command-line Tools y Gradle, y se realizó una compilación exitosa en Android, generando el archivo APK de depuración. También se probó la instalación y el lanzamiento de la app en un emulador Android. En el caso de iOS, se deja constancia de que la generación del build final requiere macOS y Xcode.

##Fase 8: Cordova y build móvil

Se integró Cordova al proyecto para preparar la aplicación como app móvil híbrida. Se agregó la plataforma Android y se configuró el entorno necesario de compilación, incluyendo Android SDK, Command-line Tools y Gradle. Se realizó una compilación exitosa del proyecto, generando el archivo APK de depuración, y posteriormente se probó la ejecución de la aplicación en un emulador Android, verificando que la app abre y funciona correctamente. Además, se documentaron los pasos de compilación para facilitar la preparación del proyecto en otros entornos. En el caso de iOS, se deja constancia de que la generación del build final requiere macOS y Xcode.