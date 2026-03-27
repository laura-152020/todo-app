**Estado actual**
- Entorno de desarrollo configurado correctamente en Windows.
- Proyecto base creado con Ionic y Angular.
- Aplicación ejecutándose correctamente con ionic serve.
- Repositorio Git configurado y sincronizado con GitHub.
- Modelo base de tareas implementado.
- Servicio de tareas implementado con persistencia local usando localStorage.

**Repositorio y control de versiones**

**Repositorio remoto:** 
https://github.com/laura-152020/todo-app.git

**Ramas utilizadas**
- main: rama principal
- feature/todo-base: rama de desarrollo

**Tecnologías y herramientas**
**Frameworks y librerías**
- Ionic
- Angular
- Cordova
- LocalStorage
- Herramientas de desarrollo
- Node.js v25.8.2
- npm 11.11.1
- Ionic CLI 7.2.1
- Cordova CLI 13.0.0
- Git
- OpenJDK 21
- Android SDK
- Android Debug Bridge (adb)
- Visual Studio Code

**Requisitos previos**
- Node.js
- npm
- Ionic CLI
- Cordova CLI
- Git
- Java
- Android SDK
- Android Platform Tools (adb)

**Instalación del proyecto**

Clonar el repositorio:

git clone https://github.com/laura-152020/todo-app.git
cd todo-app
npm install

**Ejecucion de la aplicacion**
**Entorno web**

Para ejecutar la aplicación en el navegador:

- ionic serve

Esto iniciará un servidor local y permitirá visualizar la aplicación en el navegador.

**Entorno móvil (Android)**

Para ejecutar la aplicación en un emulador o dispositivo Android:

- ionic build
- cordova run android

Este proceso compila la aplicación y la instala en el emulador o dispositivo conectado.



**Estructura del proyecto**
src/
 └── app/
     ├── home/
     ├── models/
     ├── services/
     ├── app-routing.module.ts
     ├── app.component.ts
     └── app.module.ts

**Cambios realizados**

Durante el desarrollo de la prueba se implementaron las siguientes mejoras y funcionalidades:

- Implementación de un sistema completo de gestión de tareas (crear, editar, eliminar y completar).
- Persistencia de datos utilizando localStorage.
- Creación, edición y eliminación de categorías.
- Asignación de categorías a las tareas.
- Implementación de un sistema de filtrado por categoría.
- Mejora de la experiencia de usuario mediante ajustes de diseño, validaciones y retroalimentación visual.
- Integración de Firebase Remote Config para habilitar o deshabilitar funcionalidades mediante feature flags.
- Optimización del rendimiento utilizando trackBy, evitando cálculos innecesarios en la vista y mejorando el acceso a datos mediante estructuras en memoria.
- Configuración del proyecto para compilación móvil con Cordova.
- Generación de APK y ejecución de la aplicación en un emulador Android.

**Fase 1: To-Do List base**

Se implementó el CRUD completo de tareas, incluyendo creación, listado, edición, completado y eliminación. Se añadió persistencia local mediante localStorage y retroalimentación al usuario.

**Fase 2: Estructura y mantenibilidad**

Se organizó el proyecto separando modelos, servicios y vista. La lógica de negocio se centralizó en servicios, evitando lógica en la plantilla.

**Fase 3: Categorías**

Se implementó la gestión de categorías, permitiendo crear, editar, eliminar y asignar categorías a las tareas.

**Fase 4: Filtro por categoría**

Se agregó un sistema de filtrado para visualizar tareas por categoría, incluyendo opciones para todas, sin categoría o categorías específicas.

**Fase 5: Experiencia de usuario**

Se mejoró la interfaz con un diseño más claro, uso de tarjetas, mejor distribución visual y confirmaciones en acciones importantes.

**Fase 6: Firebase y Remote Config**

Se integró Firebase y se implementó Remote Config para controlar funcionalidades mediante feature flags. Se utilizó un flag para activar o desactivar el filtro por categoría.

**Fase 7: Rendimiento**

Se optimizó el rendimiento utilizando trackBy en listas, evitando recalcular filtros en la vista y utilizando una estructura de acceso rápido (categoryMap) para mejorar eficiencia.

**Fase 8: Cordova y build móvil**

Se integró Cordova, se agregó la plataforma Android y se configuró el entorno de compilación. Se generó exitosamente el APK y se ejecutó la aplicación en un emulador Android. La generación de IPA no se realizó debido a que requiere macOS y Xcode.

**Fase 9: Entregables finales**

Se organizó el proyecto para su entrega, se actualizó el README, se subió el código limpio al repositorio, se generó el APK y se prepararon evidencias visuales del funcionamiento.

**Respuestas a preguntas técnicas**
**¿Cuáles fueron los principales desafíos?**

- Los principales desafíos se presentaron en la configuración del entorno móvil, incluyendo Android SDK, Gradle y variables de entorno. También hubo dificultades en la integración de Cordova y en la carga de la aplicación dentro del WebView.

**¿Qué técnicas de optimización aplicaste?**

- Se implementó trackBy para reducir renders innecesarios, se evitó lógica en el template y se utilizó categoryMap para optimizar búsquedas en memoria.

**¿Cómo aseguraste la mantenibilidad del código?**

- Se aplicó una arquitectura modular, separando responsabilidades en servicios y modelos. Se evitó lógica compleja en la vista y se mantuvo el código organizado y escalable.

**APK**

El archivo APK se encuentra incluido en el repositorio y permite instalar y ejecutar la aplicación en dispositivos Android.

