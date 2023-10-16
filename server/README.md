# Introducción a Node.js y Express.js - Creación de una API básica

Este README te guiará a través de los pasos necesarios para crear una API básica utilizando Node.js y Express.js. Antes de comenzar, asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo e instalarlo desde el [sitio web oficial de Node.js](https://nodejs.org/).

## Pasos para crear la API

### Paso 1: Inicializa un proyecto de Node.js

En la carpeta de tu proyecto, ejecuta el siguiente comando para inicializar un proyecto de Node.js y crear un archivo `package.json` con la configuración predeterminada.

```bash
npm init -y
```

### Paso 2: Instala Express.js

Para utilizar Express.js, instala el paquete ejecutando el siguiente comando:

```bash
npm install express
```

### Paso 3: Configura la estructura del proyecto

Crea una carpeta `src` en tu proyecto y navega a ella usando la línea de comandos.

### Paso 4: Crea un archivo JavaScript principal

Dentro de la carpeta `src`, crea un archivo JavaScript principal, por ejemplo, `index.js`, que será el punto de entrada de tu aplicación.

### Paso 5: Importa el módulo Express

Abre el archivo `index.js` y comienza importando el módulo Express:

```javascript
// Importamos el módulo express
const express = require('express')
```

### Paso 6: Crea una instancia de Express

Crea una instancia de Express en tu aplicación:

```javascript
// Crear una instancia de express
const app = express()
```

### Paso 7: Define el puerto del servidor

Define el puerto en el que deseas que se ejecute el servidor Express:

```javascript
// Puerto en el que se ejecutará el servidor
const PORT = 8000
```

### Paso 8: Define una base de datos en memoria

Para este ejemplo, definimos una base de datos de ejemplo en memoria que contiene una lista de productos:

```javascript
// Definimos una base de datos de ejemplo en memoria
const database = {
  productos: [
    { id: 1, nombre: 'Producto 1', cantidad: 5 },
    { id: 2, nombre: 'Producto 2', cantidad: 10 },
    { id: 3, nombre: 'Producto 3', cantidad: 15 }
  ]
}
```

### Paso 9: Agrega un middleware para procesar solicitudes JSON

Utiliza el middleware `express.json()` para verificar si las solicitudes son JSON:

```javascript
// Middleware: Procesa la solicitud HTTP antes de que la aplicación la maneje.
// En este caso, 'express.json()' verifica si la solicitud es JSON.
app.use(express.json())
```

### Paso 10: Define una ruta raíz para comprobar el funcionamiento

Crea una ruta raíz para comprobar que la API está funcionando correctamente:

```javascript
// Ruta de raíz para comprobar el funcionamiento de la API
app.get('/', (req, res) => {
  res.send({ servidor: '¡Hola, mundo!' })
})
```

### Paso 11: Define una ruta GET para obtener todos los productos

Crea una ruta que permita obtener todos los productos de la base de datos:

```javascript
// Ruta para obtener todos los productos
app.get('/api/productos', (req, res) => {
  // Devolvemos los productos en formato JSON con un código de estado 200 (OK).
  res.json(database.productos)
})
```

### Paso 12: Define una ruta POST para crear un producto

Crea una ruta que permita crear un nuevo producto y agregarlo a la base de datos:

```javascript
// Ruta para crear un nuevo producto
app.post('/api/productos', (req, res) => {
  // Obtenemos el producto a agregar desde el cuerpo de la solicitud (req.body).
  const nuevoProducto = req.body
  // Agregamos el nuevo producto a la base de datos.
  database.productos.push(nuevoProducto)
  // Devolvemos el producto agregado en formato JSON junto con un mensaje de éxito.
  res.json({ message: 'Producto agregado correctamente', producto: nuevoProducto })
})
```

### Paso 13: Configura el puerto y muestra un mensaje de inicio

Configura el puerto en el que la aplicación Express escuchará y muestra un mensaje de inicio:

```javascript
// Configuramos la aplicación para escuchar en el puerto especificado.
app.listen(PORT, () => {
  console.log(`La API se está ejecutando en: 🚀🚀🚀 http://localhost:${PORT} 🚀🚀🚀`)
})
```

### Paso 14: Agrega scripts al archivo package.json

Añade los siguientes scripts en el archivo `package.json` para poder ejecutar la aplicación en modo desarrollo o normal:

```json
"scripts": {
  "start": "node ./src/index.js",
  "dev": "node --watch ./src/index.js"
}
```

### Paso 15: Ejecuta la aplicación

Para ejecutar la aplicación, simplemente ejecuta el siguiente comando en la línea de comandos dentro de la carpeta de tu proyecto:

```bash
npm run start
```

O para ejecutar el servidor en modo desarrollo:

```bash
npm run dev
```

### Paso 16: Accede a la API

La aplicación estará en funcionamiento y podrás acceder a ella en tu navegador o mediante herramientas como Postman en la dirección `http://localhost:8000/`. Realiza llamadas a las rutas de la API creadas para comprobar su funcionamiento:

- Una llamada GET para obtener los productos: `http://localhost:8000/api/productos`
- Una llamada POST para crear un producto: `http://localhost:8000/api/productos`

¡Listo! Has creado una API básica utilizando Node.js y Express.js. Puedes personalizar y expandir esta API según tus necesidades específicas.
