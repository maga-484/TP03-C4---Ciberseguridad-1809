// =====================================================
// index.js - Carga el JSON y genera tarjetas didácticas
// TP 03 - Ciberseguridad
// =====================================================

const renderizarRespuestasTP = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  if (!contenedor) return;

  // Ruta desde pages/ hacia data/respuestas_tp3.json
  fetch("../data/respuestas_tp3.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // ---------- 1. GENERAR TARJETAS COMO ACORDEONES ----------
      data.preguntas_y_respuestas.forEach((item, indice) => {
        const details = document.createElement("details");
        details.classList.add("tarjeta-pregunta", "card-dark");
        details.id = `p${indice + 1}`;

        // --- SUMMARY (encabezado clickeable con título corto) ---
        const summary = document.createElement("summary");

        const num = document.createElement("span");
        num.classList.add("num-pregunta");
        num.textContent = indice + 1;

        const titulo = document.createElement("span");
        titulo.classList.add("titulo-pregunta");
        // Título corto: lo que está antes del primer " - "
        titulo.textContent = item.P.split(" - ")[0] || item.P;

        summary.appendChild(num);
        summary.appendChild(titulo);
        details.appendChild(summary);

        // --- PREGUNTA COMPLETA (visible, debajo del summary) ---
        const preguntaCompleta = document.createElement("p");
        preguntaCompleta.classList.add("pregunta-completa");
        // Parte después del " - " (el enunciado real)
        const enunciado = item.P.split(" - ").slice(1).join(" - ");
        preguntaCompleta.textContent = enunciado || item.P;
        details.appendChild(preguntaCompleta);

        // --- RESPUESTA ---
        if (item.R && item.R.trim() !== "") {
          const respuesta = document.createElement("div");
          respuesta.classList.add("respuesta");
          respuesta.style.whiteSpace = "pre-line";
          respuesta.textContent = item.R;
          details.appendChild(respuesta);
        }

        // --- IMAGEN (opcional) ---
        if (item.I && item.I.trim() !== "") {
          const img = document.createElement("img");
          img.src = item.I.startsWith("http") ? item.I : `../${item.I}`;
          img.alt = item.P || "Imagen";
          img.classList.add("img-fluid", "my-2", "rounded");
          details.appendChild(img);
        }

        // --- VIDEO (opcional) ---
        if (item.V && item.V.trim() !== "") {
          if (item.V.includes("youtube") || item.V.includes("embed")) {
            const iframe = document.createElement("iframe");
            iframe.src = item.V;
            iframe.width = "100%";
            iframe.height = "250";
            iframe.classList.add("my-2", "rounded");
            iframe.setAttribute("allowfullscreen", "true");
            details.appendChild(iframe);
          } else {
            const video = document.createElement("video");
            video.src = item.V.startsWith("http") ? item.V : `../${item.V}`;
            video.controls = true;
            video.classList.add("w-100", "my-2", "rounded");
            details.appendChild(video);
          }
        }

        // --- CHECKBOX "Ya entendí este tema" ---
        const label = document.createElement("label");
        label.classList.add("check-aprendido");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.tema = indice + 1;

        const textoCheck = document.createElement("span");
        textoCheck.textContent = "Ya entendí este tema";

        label.appendChild(checkbox);
        label.appendChild(textoCheck);
        details.appendChild(label);

        contenedor.appendChild(details);
      });

      // ---------- 2. GENERAR ÍNDICE LATERAL ----------
      const listaIndice = document.getElementById("lista-indice");
      if (listaIndice) {
        data.preguntas_y_respuestas.forEach((item, i) => {
          const li = document.createElement("li");
          const tituloCorto = item.P.split(" - ")[0] || item.P;
          li.innerHTML = `<a href="#p${i + 1}">${tituloCorto}</a>`;
          listaIndice.appendChild(li);
        });
      }
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarRespuestasTP();
});