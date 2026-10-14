import todos, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

console.log(`Curso: ${curso}`);

const ulReportes = document.getElementById("reportes");

todos.forEach((estudiante) => {
  const textoReporte = reporte(estudiante);

  console.log(textoReporte);

  if (ulReportes) {
    const li = document.createElement("li");
    li.textContent = textoReporte;
    ulReportes.appendChild(li);
  }
});
