
import {
  propiedades_alquiler as alquilerData,
  propiedadesVenta as ventaData,
  cardContent,
} from "./depto";
const ventaContainer = document.querySelector("#venta .row");
const alquilerContainer = document.querySelector("#alquiler .row");
ventaData.forEach((prop) => {
  ventaContainer.innerHTML += cardContent(prop);
});
alquilerData.forEach((prop) => {

  alquilerContainer.innerHTML += cardContent(prop);
});
