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
      data.preguntas_y_respuestas.forEach((item) => {
        const tarjeta = document.createElement("article");
        
        // Aplicamos la clase .card-dark de tu <style>
        tarjeta.classList.add("card-dark", "mb-3", "p-3", "rounded");

        // P - Pregunta
        if (item.P && item.P.trim() !== "") {
          const pregunta = document.createElement("h3");
          pregunta.classList.add("accent-yellow");
          pregunta.textContent = item.P;
          tarjeta.appendChild(pregunta);
        }

        // R - Respuesta
        if (item.R && item.R.trim() !== "") {
          const respuesta = document.createElement("p");
          respuesta.style.whiteSpace = "pre-line";
          respuesta.textContent = item.R;
          tarjeta.appendChild(respuesta);
        }

        // I - Imagen
        if (item.I && item.I.trim() !== "") {
          const img = document.createElement("img");
          img.src = item.I.startsWith("http") ? item.I : `../${item.I}`;
          img.alt = item.P || "Imagen";
          img.classList.add("img-fluid", "my-2", "rounded");
          tarjeta.appendChild(img);
        }

        // V - Video
        if (item.V && item.V.trim() !== "") {
          if (item.V.includes("youtube") || item.V.includes("embed")) {
            const iframe = document.createElement("iframe");
            iframe.src = item.V;
            iframe.width = "100%";
            iframe.height = "250";
            iframe.classList.add("my-2", "rounded");
            iframe.setAttribute("allowfullscreen", "true");
            tarjeta.appendChild(iframe);
          } else {
            const video = document.createElement("video");
            video.src = item.V.startsWith("http") ? item.V : `../${item.V}`;
            video.controls = true;
            video.classList.add("w-100", "my-2", "rounded");
            tarjeta.appendChild(video);
          }
        }

        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarRespuestasTP();
});