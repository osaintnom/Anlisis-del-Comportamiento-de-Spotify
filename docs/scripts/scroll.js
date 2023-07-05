/* https://github.com/russellsamora/scrollama */
// Creamos variables globales
// Usamos d3 para seleccionar elementos del DOM
let main = d3.select("main");
let scrolly = main.select("#scrolly_fotos");
let $figure = scrolly.select("#fixed_container");

// Creamos una instancia de scrollama
let scroller = scrollama();

// Inicializamos el proceso de scrollama
init();

function init() {
  // 1. Configuramos las opciones de scrollama
  // 2. Vinculamos las funciones de scrollama con los eventos cuando entra y/o sale un step
  scroller
    .setup({
      step: "#scrolly_fotos #steps_container .step",
      offset: 0.9, // 0 a 1 para el porcentaje de la pantalla
      debug: false,
      progress: false,
    })
    .onStepEnter(handleFotos)
}

// scrollama event handlers
function handleFotos(response) {
  // response retorna el elemento (step), la dirección (up o down) y el índice del step
  // response = { element, direction, index }
  console.log(response)

  /* Ocultamos todas las fotos del scrolly */
  d3.selectAll(".foto").classed("is_visible", false)

  /* Mostramos la foto correspondiente al step */
  d3.select(`#foto_${response.index}`).classed("is_visible", true)
}




