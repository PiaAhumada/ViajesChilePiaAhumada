

/* para animar los textos en destacados */

  $( ".botonceleste1" ).click(function() {
    $( ".descripciones1" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  $( ".botonceleste2" ).click(function() {
    $( ".descripciones2" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  $( ".botonceleste3" ).click(function() {
    $( ".descripciones3" ).toggle( "slow", function() {
      // Animation complete.
    });
  });


/*tooltip en boton de contacto*/

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})