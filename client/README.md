# Ejercicio de Introducción a React con Web3 y Metamask

Este repositorio contiene un ejercicio diseñado para ayudarte a familiarizarte con los conceptos básicos de React y cómo interactuar con MetaMask utilizando la biblioteca Web3. En este ejercicio, crearás un botón que permitirá a los usuarios conectar y desconectar sus cuentas de MetaMask en una aplicación web.

## Cómo Empezar

Para ejecutar este proyecto, sigue estos pasos:

1. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

2. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

3. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

## Descripción del Ejercicio

### Ejercicio 1: Crear un botón para conectar y desconectar una cuenta con MetaMask utilizando Web3.js

En este ejercicio, trabajarás en la funcionalidad para conectar y desconectar una cuenta de MetaMask, una herramienta esencial en aplicaciones basadas en blockchain. Utilizarás React y la biblioteca Web3 para crear un botón que permitirá a los usuarios realizar estas acciones.

#### Paso 1: Instalar las dependencias de Web3

1. Ejecuta el siguiente comando para instalar la biblioteca Web3:

   ```bash
   npm install web3
   ```

   Esto garantizará que tengas acceso a las funciones necesarias para interactuar con MetaMask.

#### Paso 2: Desarrollar el Componente de React

1. Crea un nuevo componente llamado "BotonWallet.jsx" dentro de la carpeta del **Ejercicio 1**.

2. En este componente, implementa la lógica necesaria para conectar y desconectar la cuenta de MetaMask utilizando la biblioteca Web3.

3. Diseña una interfaz de usuario sencilla que incluya un botón. Este botón debe mostrar "Conectar" si la cuenta aún no está conectada y "Desconectar" si la cuenta ya está conectada.

4. Manipula el estado de React para reflejar el estado de conexión de la cuenta y cambia el texto del botón en consecuencia.

5. Muestra la dirección de la cuenta una vez que estés conectado. Asegúrate de ocultar la mayoría de los caracteres de la dirección y mostrar solo los primeros y los últimos caracteres, añadiendo "..." en el medio.

#### Paso 3: Integrar el Componente en la Aplicación

1. Importa y utiliza este componente en el archivo principal de la aplicación.

2. Asegúrate de que el botón se muestre correctamente en la interfaz de tu aplicación.

#### Paso 4: Probar la Funcionalidad

1. Ejecuta la aplicación utilizando el siguiente comando:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

### Solución del Ejercicio

Si tienes dificultades para completar este ejercicio o simplemente quieres comparar tu implementación con una solución funcional, puedes encontrar una carpeta llamada "solucion" en este repositorio. La carpeta "solucion" contiene una implementación completa del ejercicio, que puedes consultar como referencia.

¡Diviértete trabajando en este ejercicio de React y aprendiendo a interactuar con MetaMask usando Web3! Si tienes alguna pregunta o necesitas ayuda, no dudes en consultar la documentación de [React](https://es.react.dev/learn), la documentación de [Web3](https://docs.web3js.org/) o buscar recursos en línea. ¡Feliz codificación!
