// Challenge Amigo Secreto - ALURA
// arangure - AUG/19/2025

// 1.   declaración del array amigos
let amigos = [];

// 3.A  Obtener el elemento de la lista
let listaAmigos = document.getElementById('listaAmigos');


// 2.A  Capturar el valor del campo de entrada:
//      para obtener el texto ingresado por el usuario.
// 2.B  Validar la entrada:
//      Implementar una validación para asegurarse de que el campo no esté vacío.
// 2.C  Actualizar el array de amigos:
//      Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos
//      usando el método.push().
// 2.D  Limpiar el campo de entrada:
//      Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

function agregarAmigo() {
    // 2.A  Capturar el valor del campo de entrada:
    let amigo = document.getElementById('amigo').value;

    // 2.B  Validar la entrada:
    if (amigo === ''){
        alert("Por favor, inserte un nombre.");
    } else if (amigoDuplicado(amigo)){

        // 2.C  Actualizar el array de amigos:
        amigos.push(amigo);

        // ver array de amigos
        console.log("Lista amigos: " + amigos);

        // 2.D
        limpiarCaja();
    }

    recorreLista();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// 3.   Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
//      Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.  ???
// 3.A  Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector()
//      para seleccionar la lista donde se mostrarán los amigos.
// 3.B  Limpiar la lista existente:
//      Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
// 3.C  Iterar sobre el arreglo: Usa un bucle 'for' para recorrer el arreglo amigos
//      y crear elementos de lista (<li>) para cada título.
// 3.D  Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

function recorreLista() {

    // 3.B  Limpiar la lista existente:
    asignarTextoElemento('listaAmigos', '');

    // 3.C  Iterar sobre el arreglo:
    let html = '';
    for (let i = 0; i < amigos.length; i++) {
        html += `<li>${amigos[i]}</li>`;

        console.log("html content: "+ html);
    }

    // 3.D  Agregar elementos a la lista:
    asignarTextoElemento('listaAmigos', html);
}

// 4.   Escribe una función que seleccione de manera aleatoria uno
//      de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor()
//      para obtener un índice aleatorio.
// 4.A  Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
// 4.B  Generar un índice aleatorio:
// 4.C  Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando
//      document.getElementById() e innerHTML para mostrar el amigo sorteado.


function sortearAmigo() {
    // 4.A  Validar que haya amigos disponibles:
    if (amigos.length == ''){
        alert("No tienes ningún amigo en tu lista. Por favor, inserte un nombre.");

    } else {
        // Limpiar la lista de amigos
        asignarTextoElemento('listaAmigos', '');

        // 4.B  Generar un índice aleatorio:
        let indice = parseInt(Math.floor(Math.random()*amigos.length));
        console.log("Indice random: " + indice);

        // 4.C  Mostrar el resultado:
        asignarTextoElemento('resultado', "El amigo secreto sorteado es: " + amigos[indice]);

    }
}

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para revisar que los nombre ingresados no sean duplicados en la lista de amigos
function amigoDuplicado(amigo){
    for (let i=0; i < amigos.length; i++){
        if (amigo === amigos[i]) {
            alert("Ya agregaste a " + amigo + ", intenta con otro nombre");
            // se econtró un nombre duplicado
            return false;
        }
    }
    // no hay nombre duplicado
    return true;
}
