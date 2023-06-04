
function Conversion() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var Desde = document.getElementById("Desde").value;
    var Hacia = document.getElementById("Hacia").value;

    var temperaturaConvertida;

    if (Desde === "celsius") {
      if (Hacia === "fahrenheit") {
        T_convertida = (temperatura * 9/5) + 32;
      } else if (Hacia === "kelvin") {
        T_convertida = temperatura + 273.15;
      }
      } 
      else if (Desde === "fahrenheit") {
      if (Hacia === "celsius") {
        T_convertida = (temperatura - 32) * 5/9;
      } else if (Hacia === "kelvin") {
        T_convertida = (temperatura + 459.67) * 5/9;
      }
      }
      
      else if (Desde === "kelvin") {
      if (Hacia === "celsius") {
        T_convertida = temperatura - 273.15;
      } else if (Hacia === "fahrenheit") {
        T_convertida = (temperatura * 9/5) - 459.67;
      }
    }

    T_convertida = T_convertida.toFixed(2);

    alert("El resultado de la conversión es: " + T_convertida);
  }