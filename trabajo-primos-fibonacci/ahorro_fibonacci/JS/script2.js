
function generarFibonacci(n) {
  var secuencia = [];
  var a = 1;
  var b = 1;
  var c;

  if (n >= 1) secuencia.push(a);
  if (n >= 2) secuencia.push(b);

  for (var i = 3; i <= n; i++) {
    c = a + b;   
    a = b;
    b = c;
    secuencia.push(b);
  }

  return secuencia;
}

function calcular() {
  var meses = parseInt(document.getElementById("meses").value);
  var multiplicador = parseFloat(document.getElementById("multiplicador").value);

  if (isNaN(meses) || meses < 2) {
    alert("Por favor ingresa al menos 2 meses.");
    return;
  }
  if (meses > 30) {
    alert("Máximo 30 meses para mantener la vista clara.");
    return;
  }
  if (isNaN(multiplicador) || multiplicador <= 0) {
    alert("El multiplicador debe ser un número positivo.");
    return;
  }

  var fib = generarFibonacci(meses);
  var depositos = [];
  var acumulados = [];
  var totalAcumulado = 0;

  for (var i = 0; i < fib.length; i++) {
    var deposito = fib[i] * multiplicador;
    totalAcumulado += deposito;
    depositos.push(deposito);
    acumulados.push(totalAcumulado);
  }

  document.getElementById("total-acumulado").innerHTML =
    "Bs. " + totalAcumulado.toFixed(2);

  document.getElementById("deposito-final").innerHTML =
    "Bs. " + depositos[depositos.length - 1].toFixed(2);

  document.getElementById("meses-info").innerHTML =
    meses + " meses";

  var tbody = document.getElementById("tabla-body");
  tbody.innerHTML = "";   // limpiar tabla anterior

  for (var j = 0; j < meses; j++) {
    var porcentaje = ((acumulados[j] / totalAcumulado) * 100).toFixed(1);

    var fila = "<tr>" +
      "<td class='mes-num'>Mes " + (j + 1) + "</td>" +
      "<td class='deposito'>Bs. " + depositos[j].toFixed(2) + "</td>" +
      "<td class='acumulado'>Bs. " + acumulados[j].toFixed(2) + "</td>" +
      "<td class='progress-bar-cell'>" +
        "<div class='bar-wrap'>" +
          "<div class='bar-fill' style='width:" + porcentaje + "%'></div>" +
        "</div>" +
      "</td>" +
    "</tr>";

    tbody.innerHTML += fila;
  }

  var chartDiv = document.getElementById("bar-chart");
  chartDiv.innerHTML = "";

  var maxDeposito = depositos[depositos.length - 1];
  var alturaMax = 120; // px

  for (var k = 0; k < meses; k++) {
    var altura = Math.max(
      8,
      Math.round((depositos[k] / maxDeposito) * alturaMax)
    );
    var tooltip = "Mes " + (k + 1) + ": Bs. " + depositos[k].toFixed(2);

    var barra = document.createElement("div");
    barra.className = "chart-bar";
    barra.style.height = altura + "px";
    barra.setAttribute("data-tip", tooltip);
    barra.title = tooltip;

    chartDiv.appendChild(barra);
  }

  var resultArea = document.getElementById("resultado-area");
  resultArea.style.display = "block";

  // Scroll suave hacia los resultados
  resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
}