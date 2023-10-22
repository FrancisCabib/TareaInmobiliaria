import { propiedades_venta as ventasData, cardContent } from "./depto.js";
const propiedadesVentas = document.querySelector("#venta .row");
ventasData.forEach((prop) => {
  propiedadesVentas.innerHTML += cardContent(prop);
});
