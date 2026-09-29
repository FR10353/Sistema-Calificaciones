// Se crea un arreglo vacío para almacenar los alumnos registrados
let alumnos = [];

function calcularPromedio() {

    // Obtener los datos del formulario
    
    // Obtiene el nombre
    let nombre = document.getElementById("nombre").value;

    //Obtiene la edad
    let edad = document.getElementById("edad").value;

    //Obtiene la calificación en el campo 1
    let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
            );

    //Obtiene la calificación en el campo 2
    let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
            );

    //Obtiene la calificación en el campo 3
    let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
            );

    //Obtiene la calificación en el campo 4
    let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
            );


    // Validar que los datos estén completos

    if (
            nombre === "" ||
            edad === "" ||
            isNaN(calificacion1) ||
            isNaN(calificacion2) ||
            isNaN(calificacion3) ||
            isNaN(calificacion4)
            ) {

            //En caso de estar incompletos despliega este mensaje:
        document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    //Si la calificación es de 9-10 escribe "Excelente" en el div de resultado
    if (9 <= promedio && promedio <= 10) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Excelente";

    } else
    //Si la calificación es de 8-8.9 escribe "Muy bien" en el div de resultado
    if (8 <= promedio && promedio <= 8.9) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Muy bien";

    } else

    //Si la calificación es de 7-7.9 escribe "Bien" en el div de resultado
    if (7 <= promedio && promedio <= 7.9) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Bien";

    } else

    //Si la calificación es de 6.5-6.9 escribe "Piensa en conta" en el div de resultado
    if (6.5 <= promedio && promedio <= 6.9) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Piensa en conta";

    } else

    //Si la calificación es de 6-6.4 escribe "Date de baja" en el div de resultado
    if (6 <= promedio && promedio <= 6.4) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Date de baja";

    } else

    //Si la calificación es de 0-5.9 escribe "Vete a turismo" en el div de resultado
    if (0 <= promedio && promedio <= 5.9) {

    //Busca el id llamado "resultado", este es un div en el index.html e inserta el código HTML escrito después
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>Vete a turismo";
    } else {
        //Si la calificación en los campos no entra en los rangos anteriores, agrega un mensaje de error en el div de resultado
        document.getElementById("resultado").innerHTML =
                "<strong>Alumno:</strong> " + nombre +
                "<br><strong>Edad:</strong> " + edad +
                "<br><strong>Promedio:</strong> " + "Error" +
                "<br><br>Coloca bien los campos";
    }
}

//Se crea la función de limpiar, la cual se manda a llamar en el index.html por el botón "Limpiar"
function limpiar() {
    //Obtiene el id de cada campo y modifica su valor a "", lo cual lo deja vacío
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}

//Se crea la función agregarAlumno(), que es llamada en el index.html por el boton del mismo nombre
function agregarAlumno() {

    // Obtener los datos del formulario
    
    // Obtiene el nombre
    let nombre = document.getElementById("nombre").value;

    //Obtiene la edad
    let edad = document.getElementById("edad").value;

    //Obtiene la calificación en el campo 1
    let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
            );

    //Obtiene la calificación en el campo 2
    let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
            );

    //Obtiene la calificación en el campo 3
    let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
            );

    //Obtiene la calificación en el campo 4
    let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
            );


    // Validar que los datos estén completos

    if (
            nombre === "" ||
            edad === "" ||
            isNaN(calificacion1) ||
            isNaN(calificacion2) ||
            isNaN(calificacion3) ||
            isNaN(calificacion4)
            ) {

            //En caso de estar incompletos despliega este mensaje:
        document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    //Crea el diccionrario alumno y a cada termino se le asigna una definición que es la variable que contiene la información correspondiente a ese campo
    let alumno = {nombre: nombre, edad: edad, promedio: promedio.toFixed(2)};

    //Se agrega el diccionario alumno al arreglo de alumnos
    alumnos.push(alumno);

    //En el id de resultado se muestra que el alumno a sido agregado
    document.getElementById("resultado").innerHTML = "Alumno agregado";

    //Ejecuta la función mostrarAlumnos
    mostrarAlumnos();
}

//Se crea la función mostrarAlumnos
function mostrarAlumnos() {
    //Se crea la variable "lista" con el ide de "listaAlumnos" que es un div en el index.html
    let lista = document.getElementById("listaAlumnos");
    //Al div "listaAlumnos" se le inserta el código de un subtítulo que dice "Alumnos agregados:"
    lista.innerHTML = "<h2>Alumnos agregados:</h2>";

    //Se crea una función la cual se ejecuta por cada elemento "alumno" que contenga el arreglo llamado "alumnos" y se define el indice "i"
    alumnos.forEach(function (alumno, i) {
        //Se agrega código HTML en el div de "listaAlumnos"
        lista.innerHTML +=
                "<p>" +
                //Se escribe el número de alumno que es, el indice i es "0" al principio +1 es el alumno número 1, que lo indica: "1.-"
                (i + 1) + ".- " +
                //Escribe "Nombre: " en negritas y luego el nombre del alumno sacado del diccionario alumno
                "<strong>Nombre: </strong>" + alumno.nombre +
                //Escribe "Edad: " en negritas y luego la edad del alumno sacado del diccionario alumno
                " | <strong>Edad: </strong>" + alumno.edad +
                //Escribe "Promedio: " en negritas y luego el promedio del alumno sacado del diccionario alumno
                " | <strong>Promedio: </strong>" + alumno.promedio +
                "</p>";
    });
}
