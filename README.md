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
     
## Fase 1: To-Do List base
Se implementó la primera versión funcional de la aplicación, permitiendo agregar, listar, completar y eliminar tareas.  
La información se almacena localmente mediante `localStorage`, lo que permite conservar las tareas al recargar la aplicación.  
También se añadió un estado vacío para cuando no existan tareas registradas.