export const promedio = (...notas) => {
  const suma = notas.reduce((acc, n) => acc + n, 0);
  return suma / notas.length;
};

export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
