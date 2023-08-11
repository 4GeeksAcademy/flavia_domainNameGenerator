/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarDominio() {
  //write your code her
  let partesDelDominio = [
    ["vuestro", "nuestro", "tu", "mi", "su"],
    ["dorado", "nuevo", "inocente", "fresco", "resplandeciente"],
    ["ratón", "teléfono", "comunicación", "mantel", "perro"],
    [".es", ".com", ".net", ".ar", ".us"]
  ];

  let miDominio = "";
  for (let pronombre = 0; pronombre < partesDelDominio[0].length; pronombre++) {
    for (let adjetivo = 0; adjetivo < partesDelDominio[1].length; adjetivo++) {
      for (
        let sustantivo = 0;
        sustantivo < partesDelDominio[2].length;
        sustantivo++
      ) {
        for (
          let extension = 0;
          extension < partesDelDominio[3].length;
          extension++
        ) {
          miDominio +=
            partesDelDominio[0][pronombre] +
            partesDelDominio[1][adjetivo] +
            partesDelDominio[2][sustantivo] +
            partesDelDominio[3][extension] +
            " \n";
        }
      }
    }
  }
  console.log(miDominio);
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#Logo").addEventListener("click", generarDominio);
});
