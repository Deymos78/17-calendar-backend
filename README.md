## Configuracion de la aplicacion

Para crear el package.json tenemos que utilizar el siguiente comando

    npm init -y

Para ejecutar los archivos javascript que tenemos utilizaremos el siguiente comando de node js

    node [archivo.js]

**Instalaremos unas dependencias para poder ejecutar archivos cada vez que haya cambios y lo instalaremos de forma global**
**LOS DE WINDOWS HAY QUE REALIZARLO COMO ADMINISTRADOR**

    npm i nodemon -g

Para ejecutar nodemon usaremos el siguiente comando

    nodemon [archivo.js]

Para parar la ejecucion de nodemon usaremos el siguiente comando

    CTRL + C

Para evitar tener que estar usando el comando nodemon para arrancar el archivo realizaremos los siguiente cambios
Usaremos 'npm run dev'  y 'npm start' para que los comandos arranquen

~~~

    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js"
    },

~~~

Para instalar EXPRESS usaremos el siguiente comando

    npm i express

En el caso de que necesitemos la version del curso si hay cambios que rompen la aplicacion entonces usaremos la version empleada en este 
usaremos el siguiente comando

    npm i express@4.17.1

Para poder cargar variables de entorno desde archivos .env usaremos la siguiente herramienta

    npm i dotenv

**Instalaremos un paquete para realizar validaciones en express y lo insertaremos con le siguiente comando**

    npm i express-validator


### CONFIGURACION DE MONGO DB ( CREACION DE BASE DE DATOS Y CONSFIGURACION DE USUARIO)

1. Primero creamos una nueva cuenta en la pagina de  Mongo DB
2. Crearemos un Cluster o usaremos el que tenemos (Elegimos la opcion gratuita)
3. Esperamos que termine la configuracion de la base de datos
4. Damos a connectar a la base de datos
5. Tenemos que instalar el controlador, instalaremos el "MongoDB Compass"
6. Realizamos la instalacion del "MongoDB Compass" y copiamos el enlace de la conneccion dentro de "MongoDB Compass"
7. Crearemos un nuevo usuario, definimos el nuevo nombre del usuario y generamos si queremos la contraseña
8. Una vez tengamos creado el nuevo usuario pegaremos las credenciales dentro de la url que copiamos anteriormente para realizar la 
configuracion de la base de datos.
9. Podemos seleccionar la configuracion realizada dentro de "MongoDB Compass" como favorita para tenerla de manera rapida cada vez que entremos

### Ahora realizaremos la configuracion de Mongoose
Monsgoose nos ayudara a trabajar de una manera sencilla la comunicacion de Mongo DB y Nodejs

Usaremos el siguiente comando para instalar las dependencias

    npm i mongoose

**Debido a que las contraseñas se graban en la base de datos de manera plana, entonces tendremos que encriptarlas con una libreria**

    npm i bcryptjs

**Ahora tendremos que verificar a los usuarios para saber si su sesion es valida y para ello usaremos JWT(Json Web Token)**

    npm i jsonwebtoken

**Para poder agregar una capa de seguridad agregaremos cors a nuestro proyecto**

    npm i cors

**Para manejar el formateo de las fechas entonces instalaremos la siguiente libreria**

    npm i moment




