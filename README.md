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

-Crear una Nueva Base de Datos para importar el respaldo que se encuentra en el repositorio:

-Abre una ventana del Símbolo del Sistema o una interfaz de línea de comandos de MySQL.

-Inicia sesión en MySQL con un usuario con privilegios para crear bases de datos. Por ejemplo:

**mysql -u root -p**

-Ingresa la contraseña del usuario.

-Luego, crea una nueva base de datos con el siguiente comando:

**CREATE DATABASE test_blog_db;**
**EXIT;**

-Ahora que ya se creo una nueva base de datos,lo que sigue es importar los datos desde el archivo de respaldo:
--primero se debe ir a la ruta donde se encuentra el respaldo

**C:\React_Test_MySQL\server\restore** (Verifica que tu ruta sea correcta)

-- seguido de esto, procedemos con la importacion de los datos del respaldo, con el siguiente comando.

**mysql -u root -p test_blog_db < test_blog_db.sql**

**◍ REQUISITOS PREVIOS PARA INSTALACION DE SERVIDOR:**
Asegúrate de tener Node.js instalados en tu computadora.

**-Instalar dependencias:**

Se debe abrir una terminal en la carpeta raíz del proyecto (Server) y ejecutar el siguiente comando para instalar las dependencias del proyecto:

**npm install**

**Antes de Ejecutar el servidor**
Verificar que en el archivo **C:\React_Test_MySQL\server\Conections\keys.js** el usuario de conexion y la contraseña sean correctos, en este caso se dejo como root.

**-Ejecutar el servidor:**

Una vez que todas las dependencias estén instaladas se puede iniciar la aplicacion con el siguiente comando.
**node server.js**

**-Acceder a la aplicación:**
Después de ejecutar la aplicación, debería mostrar un mensaje en la terminal indicando en qué puerto se ejecuta la aplicación (por ejemplo, "Server on Port 5000"), y un mensaje de que se conecto a la base de datos MySQL.

**-Pruebas y revisión:**
Finalmente, Se puede realizar pruebas en la aplicación y revisarla.
