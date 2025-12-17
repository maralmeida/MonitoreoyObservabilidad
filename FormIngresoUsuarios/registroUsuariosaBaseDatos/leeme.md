## Aplicación para el ingreso de Datos generales de usuarios y su registro en Base de datos

Tecnologías Usadas:
* HTML, CSS, JS, PHP
* conexión con SQL server vía XAMPP, usuario SQL

### Configuraciones necesarias:
#### Servidor Web
* para contar con un servidor local descargar xampp, validar versión de php y arquitectura (consola xampp -> apache -> admin -> phpinfo)
  esto permitirá enviar la info capturada vía javascript al servidor de base de datos MSSQL mediante el servidor web XAMPP
* descargar drivers de php según versión y arquitectura

  1- acceder al sitio oficial de microsoft para la descarga https://learn.microsoft.com/en-us/sql/connect/php/download-drivers-php-sql-server?view=sql-server-ver17 

  2- copiar la archivos según versión y arquitectura: Ejemplo para PHP 8.2 en 64 bits: php_sqlsrv_82_ts_x64.dll y php_pdo_sqlsrv_82_ts_x64.dll
  guardarlas en la carpeta C:\xampp\php\ext de xampp 

  3- activar los drivers en xampp (consola xampp -> apache -> config -> en archivo php.ini al final copiar extension=php_sqlsrv_82_ts_x64.dll
    extension=php_pdo_sqlsrv_82_ts_x64.dll ajustando nombres de ser necesario -> guardar archivo)

  4- reiniciar apache (consola xampp -> stop / start)
* guardar los archivos necesarios para funcionamiento de la aplicación en C:\xampp\htdocs\mi_carpeta\index.html siendo index el archivo principal
* ejecutar en el navegador http://localhost/mi_carpeta/index.html para acceder a mi aplicación

#### Conexión con Servidor MSSQSL
1- Acceder a SQL server configuration manager desde el explorador de windows 

2- ir a SQL server network configuration en el menú izquierdo-> protocols for MSSQLSERVER -> TCP/IP (habilitar si está deshabilitada) -> click derecho e ir a propiedades ahí mismo -> pestaña IP Adresses -> al final ir a IPAII y validar que el puerto sea 1433 / dejar vacío TCP dynamic ports -> ok

3- reiniciar servicio yendo a SQL Server Services en la izquierda -> seleccionar MSSQL server o instancia -> restart

4- para testear conexión en cmd hacer telnet localhost 1433. si ingresa, la conexión e estableció, si no la abre validar puerto o firewall.

5- al ejecutar la aplicación y de salir error de conexión, validar campos de conexión y de ser correctos y permanecer el error, crear usuario de autenticación windows y SQL (mixta)


* 
