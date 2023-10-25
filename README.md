# React_Test
**◍ REQUISITOS PREVIOS PARA INSTALACION DE FRONTEND REACT:**

Asegúrate de tener Node.js y npm (gestor de paquetes de Node.js) instalados en tu computadora. 

**Clonar el repositorio:**
Se debe clonar el repositorio en una carpeta local.

**Instalar dependencias:**

Se debe abrir una terminal en la carpeta raíz del proyecto (Client) y ejecutar el siguiente comando para instalar las dependencias del proyecto:

**npm install**

**-Ejecutar la aplicación:**

Una vez que todas las dependencias estén instaladas se puede iniciar la aplicacion con el siguiente comando.
**npm start**

**-Acceder a la aplicación:**
Después de ejecutar la aplicación, debería mostrar un mensaje en la terminal indicando en qué puerto se ejecuta la aplicación (por ejemplo, "La aplicación está escuchando en el puerto 3000"). Se puede abrir un navegador web y acceder a la aplicación en http://localhost:3000 (o en el puerto especificado).

**-Pruebas y revisión:**
Finalmente, Se puede realizar pruebas en la aplicación y revisarla.

**◍ REQUISITOS PREVIOS PARA INSTALACION DE BASE DE DATOS:**

**-Descarga e instala MongoDB:** Si no se encuentra MongoDB instalado, deberán descargarlo e instalarlo en sus sistemas. esta es la pagina oficial de descarga de MongoDB (https://www.mongodb.com/try/download/community) para que puedan descargar la versión que sea compatible con su sistema operativo, ademas de esto tambien los tools que se encuentran en este link (https://www.mongodb.com/try/download/database-tools).

se debe abrir una terminal y ejecutar el siguiente comando mongo para indicar donde estaran los datos.

este es un ejemplo, verifica que la carpeta data se encuentre en la ruta correcta
**mongod --dbpath C:\React_Test\server\data**

**Importa la copia de seguridad de la base de datos:** 
Después de configurar MongoDB, deberán importar la copia de seguridad de la base de datos que se les proporciona. Para ello, deben seguir estos pasos:

ejecutar el comando 
**mongorestore --db Test_Blog_DB "C:\React_Test\server\restore\dump\Test_Blog_DB"** (asegurate que tu ruta este correcta)

a veces el comando mongo, no es reconocido en la consola, puedes seguir estos pasos para solucionarlo.

![image](https://github.com/Emilio-Lopez-King/React_Test/assets/84301990/a4a872de-2165-418b-9e2c-d1bd575c4cbe)

**◍ REQUISITOS PREVIOS PARA INSTALACION DE SERVIDOR:**
Asegúrate de tener Node.js instalados en tu computadora. 

**-Instalar dependencias:**

Se debe abrir una terminal en la carpeta raíz del proyecto (Server) y ejecutar el siguiente comando para instalar las dependencias del proyecto:

**npm install**

**-Ejecutar el servidor:**

Una vez que todas las dependencias estén instaladas se puede iniciar la aplicacion con el siguiente comando.
**node server.js**

**-Acceder a la aplicación:**
Después de ejecutar la aplicación, debería mostrar un mensaje en la terminal indicando en qué puerto se ejecuta la aplicación (por ejemplo, "Server on Port 5000"), y un mensaje de que se conecto a la base de datos MongoDB.

**-Pruebas y revisión:**
Finalmente, Se puede realizar pruebas en la aplicación y revisarla.
