# Documentacion Gym Style FRONT 🧑🏻‍💻
## Descripcion 📃:
_Integracion visual para el cliente en la actualizacion v2 de la aplicacion del gymStyle._

## Inicializar 🤯:

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar el proyecto de angular:
    * npm start o ng serve si tiene el cli de angular

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno de componentes con angular_
```
    |_Archivos principales
    |__src
        |__app
            |__api
                |__Archivo de servicio para la conexion http con la API REST
            |__auth
                |__Archivo y componentes visualies para el momento de autenticacion del usuario.
            |__components
                |__Archivos y componentes que seran reutilizados a lo largo de la aplicacion.
            |__guards
                |__Archivos que realizaran la funcion de autenticar rutas.
            |__interface
                |__Archivos para las interfaces que se utilizaran a lo largo de la aplicacion.
            |__material
                |__Modulo de exportacion para todos los elementos nesesario de angular material.
            |__pages
                |__Se encontraran todas las vistas o paginas de la aplicacion como componentes base y integrando algunos de los componentes globales.
            |__service
                |__Se encontraran los servicios nesesario para recorerlos a lo largo de la aplicacion.
```
## Configuracion de rutas 📡:
En vez de utilizar solo el appRoutingModule utilizamos un modelo de particion por seccion y integrarlo dentro del modulo de rutas principales 'AppRoutingModule'.
## Recomendaciones 👀:
* Leer la documentacion interna de cada archivo para entender el proceso de cada componente, servicio, guard, etc.
* Revisar las dependencias del package.json
* Revisar las configuraciones del angular.json
---
Nicolas Duarte | Samuel Cano | Javier Eudoro 🎉
