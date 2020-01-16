*[Español](README.md) ∙ [English](README-en.md) 

# Mt2Web.py-V2

Nueva generacion de web's para servidores de metin2

## Contenido.

* Motivación
* Caracteristicas principales.
* Caracteristicas deseadas.
* Herramientas usadas.
* Requerimientos
* ¿Como Instalar?
* ¿Como Iniciar?
* Iniciar modo produccion
* Funcionalides deseadas

## Motivación.

El presente proyecto, nace con la motivación de tener una pagina web para Metin2. Que ayude a presentar la información más importante del servidor de una manera agradable a la vista, permita realizar las funciones básicas como es el registro de usuarios y una plataforma de codigo abierto escalable y que cumpla con los estandares actuales, un código limpio y facil de mantener.

## Caracteristicas principales.

* Presenta información a los usuarios acerca del estado actual del servidor (Encendido / Mantenimiento).
* Muestra la información más importante acerca de tu servidor mediante las siguientes páginas:
  * Presentación del servidor.
  * Introducción al servidor.
  * Caracteristicas principales del servidor.
  * Requisitos del sistema minimos y recomendados.
  * Registro de usuarios.
  * Descarga del programa cliente.
  * Donaciones.
* Informa el numero de jugadores registrados y el total de personajes creados.
* Sistema de ranking individual.
* Sistema de rankilng para gremios.
* Registrar nuevos usuarios.
* Cambio de contraseña.
* Página con link directo a descarga del programa cliente.
* Diseño responsivo.

## Caracteristicas deseadas.

* sistema de donaciones
* Modificación de la información del servidor de manera dinamica

## Herramientas.

* lenguajes de Programación:  
  * Python  
  * JavaScript (TypeScript)
* Frameworks usados:  
  * Django  
  * Angular
* Automatización y despliegue:  
  * Docker  
  * Docker-compose
* Tareas Programadas:
  * Redis  
  * Celery
* Diseño:
  * https://github.com/JGCH/WebPageMetin2 - Template de uso libre.
* Otros:
  * Seguridad Avanzada
  * Git y GitHub
  * Make

## Requerimientos.

1. git
2. docker
3. docker compose
4. make
5. Sistema operativo Linux (Ubuntu, Centos etc..), Mac OS

## ¿Como instalar?

```
  $ git clone git@github.com:luisito666/Mt2Web.py-V2.git
  $ cd Mt2Web.py/
  $ make build
```

## ¿Como Iniciar?

Antes de iniciar el proyecto es necesario editar el archivo config.yml y agregar los parametros necesarios para el funcionamiento.

el archivo se encuentra en la siguiente ruta 'src/config.yml'

```
database:
  user: root
  password: 
  host: 
  port: 3306
server:
  name: 'Metin2 XxX'
  url: 'https://www.example.com'
  domain: 'example.com'
  timezone: 'America/Bogota'
paymentwall:
  public_key: ''
  private_key: ''
captcha:
  enable: False
  public_key: ''
  private_key: ''
mail:
  host: 0.0.0.0
  port: 25
  password: 'tu_pasword'
  user: 'tu_usuario@example.com'
register:
  mail_activate_account: False
```

Despues de lo anterior se ejecuta este comando para iniciar el proyecto.

```
  $ make run
```

Nota: El comando anterior ejecutar el proyecto en modo desarrollador.

### Iniciar modo produccion.

```
  $ make run-prod
```

Nota: Es recomendado usar este comando cuando vamos a montar la pagina para su uso.
