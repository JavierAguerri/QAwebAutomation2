# QAwebAutomation2
Demostración simple de automatización web QA usando Javascript y Cypress.

Para acceder a la versión en inglés de este documento, <a href="README.md">pulse aquí</a>

## Enunciado

Realizar una automatización consistente en:
- Buscar en Google la palabra “automatización”
- Buscar el link de la Wikipedia resultante
- Comprobar en qué año se hizo el primer proceso automático
- Realizar un screenshot de la página de la Wikipedia

## Notas del autor (Javier Aguerri)

- Se ha utilizado <code>beforeEach(() => {})</code> para gestionar la aceptación de cookies.
- Se asume que el botón de aceptar cookies está presente. Cypress no permite usar <code>.catch</code> para manejar excepciones. Se podría manejar la excepción usando una estructura tipo <code>Cypress.on('fail', (error, runnable) => {})</code>, aunque ésto está fuertemente desaconsejado.
- Se ha tratado de usar los mejores selectores de entre los disponibles. Idealmente se utilizarían un atributo <code>data-cy</code> para cada elemento susceptible de ser accedido de manera automática, pero ésto sólo es posible si los desarrolladores de la aplicación web en cuestión han tenido en cuenta unas buenas prácticas de automatización. En el presente caso, tanto Google como Wikipedia no son aplicaciones web especialmente amigables con la automatización.
- El realizar pruebas en diferentes dominios es un anti patrón, pero dado que el enunciado del ejercicio lo indicaba así, se ha utilizado una estructura tipo <code>cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', () => {})</code> para poder acceder a los elementos de la nueva página.
- Se han realizado dos <i>assertions</i> en el escenario. La primera para comprobar que hemos navegado correctamente a Wikipedia y la segunda para comprobar que el apartado relativo a la historia de la automatización existe. De este modo, si hubiese algún problema en el cambio de dominio sería fácilmente detectable gracias al primer <i>assertion</i>. Realizar múltiples <i>assertions</i> no es un anti patrón cuando se hace en tests e2e, como la propia documentación de Cypress especifica.

## Configuración del entorno e instrucciones de ejecución

- Instalar un navegador compatible con Cypress, como por ejemplo Firefox o Chrome
- Instalar nvm (gestor de versiones de nodejs/npm). <a href="https://github.com/nvm-sh/nvm#installing-and-updating">Clic aquí para las instrucciones.</a>
- Instalar nodejs (npm), preferiblemente la versión 19.4.0. Ejecutar en la terminal: <code>nvm install 19.4.0</code>
- Descargar los ficheros del proyecto mediante Git: <code>git clone git@github.com:JavierAguerri/QAwebAutomation2.git</code>
- Navegar al directorio raíz del proyecto e instalar las dependencias: <code>npm install</code> 
- Iniciar el test, por ejemplo ejecutando: <code>npx cypress run --browser firefox</code>
- También podemos visualizar la ejecución del test en tiempo real y revisar los logs al final del mismo ejecutando: <code>npx cypress run --headed --no-exit</code>