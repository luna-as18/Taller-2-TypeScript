import { daseries } from "./data.js";
let seriesTableBody = document.getElementById("series");
let promedioTemporadas = document.getElementById("promedioTemporadas");
let infoSerie = document.getElementById("infoSerie");
tablaSeries(daseries);
promedioTemporadas.innerHTML = calcularPromTemp(daseries).toString();
function tablaSeries(series) {
    console.log("Imprimiendo series");
    series.forEach((serie) => {
        console.log(serie);
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><FONT COLOR="blue">${serie.nombre}</FONT></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTableBody.appendChild(trElement);
        trElement.onclick = () => {
            desplegarInfoSerie(serie.id, series);
            return false;
        };
    });
}
function calcularPromTemp(series) {
    console.log("Calculando promedio de temporadas");
    let suma = 0;
    series.forEach((serie) => {
        suma += serie.seasons;
    });
    let promedio = suma / (series.length);
    return promedio;
}
function desplegarInfoSerie(serieId, series) {
    // verificar que exista
    let serie = null;
    series.forEach((s) => {
        if (s.id === serieId) {
            serie = s;
        }
    });
    // desplegar info
    infoSerie.innerHTML = `<img class="card-img-top" src="${serie.image}" alt="Imágen ${serie.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.nombre}</h5>
                                    <p class="card-text">${serie.description}</p>
                                    <a href="${serie.link}" target="_blank" rel="noopener">${serie.link}</a>
                                </div>`;
}
