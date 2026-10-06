# TP 03 – Tienda en línea (Ciberseguridad)

Proyecto que carga de forma dinámica las preguntas y respuestas del Trabajo Práctico desde un archivo JSON local.

🔗 **Demo online:** https://maga-484.github.io/TP03-C4---Ciberseguridad-1809/

---

## 📂 Estructura del proyecto

```
C:.
│   index.html
│   README.md
│   style.css
│
├───data
│       respuestas_tp3.json
│
├───img
│       presentacion_tp03.png
│       temas_infografia.png
│       tp03-p03-red-https.png
│
├───js
│       index.js
│
├───pages
│       grupo.html
│       preguntas.html
│
└───pdf
        Grupo - Ciberseguridad.pdf
        Home - Ciberseguridad.pdf
        Preguntas - Ciberseguridad.pdf
```

> En la carpeta `pdf/` está el contenido de cada página del sitio (Grupo, Home y Preguntas).

---

## 🧩 Estructura del archivo JSON

Para agregar o modificar las tarjetas de `preguntas.html`, el archivo `data/respuestas_tp3.json` debe mantener esta estructura:

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
```

### 📝 Campos de cada tarjeta

| Campo | Nombre    | Descripción                                                             | Obligatorio |
| ----- | --------- | ----------------------------------------------------------------------- | ----------- |
| `P`   | Pregunta  | Texto del título o consigna.                                            | ✅ Sí       |
| `R`   | Respuesta | Texto con la resolución o explicación.                                  | ✅ Sí       |
| `I`   | Imagen    | Ruta de la imagen (ej: `img/grafico.png`). Si no hay, dejar `""`.       | ❌ No       |
| `V`   | Video     | Ruta a un MP4 local o enlace _embed_ de YouTube. Si no hay, dejar `""`. | ❌ No       |

---

## 🚀 Cómo ejecutar la página

Para evitar errores de bloqueo **CORS** del navegador al cargar el archivo `.json`, no abras el HTML con doble clic. Seguí estos pasos:

1. Abrí el proyecto en **Visual Studio Code**.
2. Instalá la extensión **Live Server** (si no la tenés).
3. Hacé clic derecho sobre `index.html` o `pages/preguntas.html`.
4. Seleccioná **"Open with Live Server"**.
