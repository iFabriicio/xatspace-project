# Xatspace Fondos Animados

Este pack incluye dos versiones de fondo animado para usar en tu Xatspace o en GitHub Pages.

## Archivos incluidos

- **fondo-simple.html**  
  Versión básica (sin imports). Funciona abriéndolo directamente (doble clic).

- **fondo-xatspace.html**  
  Versión modular, con soporte para cambiar el módulo (`?bgModule=`) o usar una imagen externa (`?bgImg=`).  
  Necesita abrirse con un servidor web (ej: GitHub Pages o `python -m http.server`).

- **modules/fondo-abstracto.js**  
  Módulo externo con degradado azul–verde y figuras flotantes.

## Ejemplos de uso

- Fondo animado por defecto:  
  ```
  fondo-xatspace.html
  ```

- Fondo con imagen de Imgur:  
  ```
  fondo-xatspace.html?bgImg=https://i.imgur.com/XXXXX.png
  ```

- Fondo con módulo personalizado (si agregas otro en `modules/`):  
  ```
  fondo-xatspace.html?bgModule=./modules/otro-fondo.js
  ```

