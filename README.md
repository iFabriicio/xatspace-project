
# Proyecto Xatspace - Proyecto Final (listo para GitHub)

Este proyecto está preparado para usar dentro de xatspace (xat.com). 
Contiene galerías de GIFs y fondos, secciones separadas y todos los archivos organizados.

## Estructura de carpetas (resumen)
- index.html (página principal con menú y video)
- css/style.css (estilos globales, fondo animado, avatar, galerías)
- js/main.js (inicializa Swiper, genera cuadros numerados y modales)
- assets/images/ (placeholders: avatar.png, logo.png, placeholder_80.png, placeholder_pc.png, etc.)
- assets/icons/ (svgs de redes sociales)
- galerias/ (todas las subcarpetas con sus index.html)
  - gifs4d/ (index + mujeres.html + hombres.html)
  - parpadeos/
  - pcback/
  - pstyle/
  - fondos/ (fondos_sala, fondos_eventos, banners)
  - xatspace/
- precios/index.html
- video/index.html

## Características principales
- Fondo abstracto animado aplicado en todas las páginas.
- Avatar con aro exterior animado (naranja/rojo) y iconos sociales pegados al círculo.
- Botones principales y sub-botones con estilo degradado rojo/naranja y transparencia sutil.
- Galerías con **Swiper.js** (flechas modernas) para deslizar: pcback, pstyle, banners y fondos.
- GIFS 4D: opción HOMBRES / MUJERES con grids de 20 celdas (80x80) cada una.
- GIFS Parpadeos: grid de 10 celdas (80x80).
- Fondos para SALAS y EVENTOS: galerías (10) que abren modal dual con **Exterior (2560x1440)** e **Interior (728x486)** para facilitar la visualización.
- Todas las celdas y slides están numeradas con etiquetas: NUMERO 1, NUMERO 2, ... para que puedas identificar y reemplazar fácilmente.
- El número de cuadros se controla con el atributo data-count en cada contenedor (ej: data-count="20").
- Modal para ver imágenes en grande: `openModal(src)` y `openDual(exterior, interior)`.

## Cómo editar y publicar en GitHub Pages
1. Crea un nuevo repositorio en GitHub.
2. Sube todo el contenido de esta carpeta al repositorio (branch main).
3. En Settings -> Pages, selecciona la rama `main` y la carpeta `/ (root)` como fuente.
4. Guardar. En unos minutos tu sitio estará disponible en https://TU-USUARIO.github.io/TU-REPO

## Cómo reemplazar imágenes
- Reemplaza `assets/images/avatar.png` y `assets/images/logo.png` por tus imágenes (mantén los mismos nombres o actualiza rutas en los HTML).
- Cada galería usa placeholders en `assets/images/`. Puedes reemplazar los placeholders o editar los `src` en los archivos HTML/JS.

## Notas finales
- Si encontrás algún detalle visual que quieras ajustar (transparencias, tamaños, número de cuadros, orden de botones), te lo puedo modificar rápidamente.
- Ya está todo validado y probado localmente en múltiples páginas para evitar errores.
