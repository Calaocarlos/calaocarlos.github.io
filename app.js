    // Obtenemos referencias a los elementos
    const inputField = document.getElementById('inputField');
    const area = document.getElementById('area');
    const area2 = document.getElementById('area2');
    const duplicado = document.getElementById('duplicado');
    const conjunto = document.getElementById('conjunto');
    var textoOriginal = ""; // Variable global para almacenar el texto original
    var linkedinLink = document.getElementById('linkedin-link');  // Obtén el elemento del enlace de LinkedIn
    var githublink = document.getElementById('lin-github');  // Obtén el elemento del enlace de github

// Agregar un event listener al campo de entrada
inputField.addEventListener('click', function() {
    // Ocultar el campo de entrada
    inputField.style.display = 'none';

    // Mostrar el área de texto
    area.style.display = 'block';

    // Colocar el foco en el área de texto para que esté lista para escribir
    area.focus();
});


    var boton1 = document.getElementById('boton1').addEventListener('click', function() {
    var inputField = document.getElementById('inputField').value;
    var area = document.getElementById('area').value;
    var area2 = document.getElementById('area2').value;

    // Verificar si el input está vacío o contiene letras mayúsculas o acentos
    if (area === '' || /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ,.{}]/.test(area)) {
        document.getElementById('conjunto3').style.display = 'block'; // Mostrar el parrafo
        document.getElementById('conjunto2').style.display = 'block'; // Mostrar el parrafo
        document.getElementById('conjunto').style.display = 'block'; // Mostrar la imagen
        document.getElementById('area').style.display = 'none'; // Ocultar el 1er textarea
        document.getElementById('area2').style.display = 'none'; // Ocultar el 2do textarea
        document.getElementById('inputField').style.display = 'block'; // Mostrar el input
        document.getElementById('duplicado').style.display = 'none'; // Ocultar boton copiar
    } else {
        document.getElementById('conjunto3').style.display = 'none'; // Ocultar el parrafo
        document.getElementById('conjunto2').style.display = 'none'; // Ocultar el parrafo
        document.getElementById('conjunto').style.display = 'none'; // Ocultar la imagen
        document.getElementById('area').style.display = 'block'; // Mostrar texarea1
        document.getElementById('area2').style.display = 'block'; // Mostrar textarea2
        document.getElementById('duplicado').style.display = 'block'; // Mostrar boton copiar
    }
    limpiar()
    });

    // limpiamos el texarea
    function limpiar(){
        document.querySelector('#area').value = '';
    }

    var textoOriginal = ""; // Variable global para almacenar el texto original

    function convertirTexto() {
        // Obtener el texto de entrada
        textoOriginal = document.getElementById("area").value;
        
        // Reemplazar todas las instancias de "e" con "enter"
        var textoConvertido = textoOriginal.replace(/e/gi, "enter")
                                           .replace(/i/gi, "imes")
                                           .replace(/a/gi, "ai")
                                           .replace(/o/gi, "ober")
                                           .replace(/u/gi, "ufat");

        // Mostrar el texto convertido en el segundo textarea
        document.getElementById("area2").value = textoConvertido;
    }
    
    function devolverTexto() {
        // Mostrar el texto original en el segundo textarea
        document.getElementById("area2").value = textoOriginal;
    }

    function copiarTexto() {
        // Obtener el área de texto
        var areaTexto = document.getElementById("area2");
    
        // Guardar el color de fondo original del área de texto
        var colorFondoOriginal = areaTexto.style.backgroundColor;
    
        // Guardar el color de texto original del área de texto
        var colorTextoOriginal = areaTexto.style.color;
    
        areaTexto.style.color = "white"; // Puedes cambiar el color de texto según el fondo
    
        // Copiar el contenido al portapapeles del navegador
        areaTexto.select();
        document.execCommand("copy");
    
    }

        
      // Agrega un evento de clic al enlace de LinkedIn
      linkedinLink.addEventListener('click', function(event) {
          // Redirige al usuario a tu perfil de LinkedIn
          window.open('https://www.linkedin.com/in/carlos-alberto-calao-lizcano-730414302/', 'blank');
          
          // Evita el comportamiento predeterminado del enlace
          event.preventDefault();
      });
    
       // Agrega un evento de clic al enlace de github
       githublink.addEventListener('click', function(event) {
        // Redirige al usuario a tu perfil de github
        window.open('https://github.com/Calaocarlos', 'blank');
        
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();
    });
  
    
    
