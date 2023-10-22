import { propiedadesAlquiler as alquilerData, cardContent } from "./depto.js";
const propiedadesAlquiler = document.querySelector("#alquiler .row");
alquilerData.forEach((prop) => {
  propiedadesAlquiler.innerHTML += cardContent(prop);
});
