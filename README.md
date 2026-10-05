# TP 03 – Tienda en línea (Ciberseguridad)

Este proyecto carga de manera dinámica las preguntas y respuestas del Trabajo Práctico desde un archivo JSON local.

## 📁 Estructura del Archivo JSON (`data/respuestas_tp3.json`)

Para agregar o modificar contenido en las tarjetas de la página `preguntas.html`, el archivo JSON ubicado en `data/respuestas_tp3.json` debe mantener la siguiente estructura:

```json
{
  "preguntas_y_respuestas": [
    {
      "P": "1. Pregunta o título textual del TP",
      "R": "Respuesta explicativa o justificación textual.",
      "I": "img/ejemplo.png",
      "V": ""
    }
  ]
}
📝 Campos de cada tarjeta:
P (Pregunta): Texto del título / consigna (Obligatorio).

R (Respuesta): Texto con la resolución o explicación (Obligatorio).

I (Imagen): Ruta de la imagen (ej: img/grafico.png). Si no hay imagen, dejar como "".

V (Video): Ruta a archivo MP4 local o enlace embed de YouTube. Si no hay video, dejar como "".

🚀 Cómo ejecutar la página correctamente
Para evitar errores de bloqueo CORS del navegador al cargar el archivo .json:

Abrir el proyecto en Visual Studio Code.

Hacer clic derecho sobre index.html o pages/preguntas.html.

Seleccionar "Open with Live Server".

### https://maga-484.github.io/TP03-C4---Ciberseguridad-1809/
```
