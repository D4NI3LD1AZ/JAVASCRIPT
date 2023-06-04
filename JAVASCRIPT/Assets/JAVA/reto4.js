
var nombres = ["Juan", "María", "Carlos", "Laura"];
var apellidos = ["Pérez", "González", "Ramírez", "Rodríguez"];
var actividades = ["Yoga", "Pilates", "Zumba", "Aeróbicos"];


function comprobarSeleccion() {
  var nombreSeleccionado = document.getElementById("nombre").value;
  var apellidoSeleccionado = document.getElementById("apellido").value;
  var actividadSeleccionada = document.getElementById("actividad").value;
  var resultado = document.getElementById("resultado");
 
  if (
    nombres[nombreSeleccionado] === nombres[0] &&
    apellidos[apellidoSeleccionado] === apellidos[0] &&
    actividades[actividadSeleccionada] === actividades[0]
  ) 
  {
    resultado.innerHTML = "La respuesta es correcta.";
  } 
  else if(
    nombres[nombreSeleccionado] === nombres[1] &&
    apellidos[apellidoSeleccionado] === apellidos[1] &&
    actividades[actividadSeleccionada] === actividades[1]
  ) 
  {
    resultado.innerHTML = "La respuesta es correcta.";
  }
  else if(
    nombres[nombreSeleccionado] === nombres[2] &&
    apellidos[apellidoSeleccionado] === apellidos[2] &&
    actividades[actividadSeleccionada] === actividades[2]
  ) 
  {
    resultado.innerHTML = "La respuesta es correcta.";
  }
  else if(
    nombres[nombreSeleccionado] === nombres[3] &&
    apellidos[apellidoSeleccionado] === apellidos[3] &&
    actividades[actividadSeleccionada] === actividades[3]
  ) 
  {
    resultado.innerHTML = "La respuesta es correcta.";
  }
  else {
    resultado.innerHTML = "La respuesta es incorrecta.";
  }
}