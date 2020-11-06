var opcion = Number(prompt("¿Que ejercicio desea probar? \n 1)Par/Impar \n 2)Posición caracteres \n 3)IVA \n 4)Tirar dado")) //se solicita el ejercicio a evaluar

switch(opcion){
    case 1: ejercicioUno(); break;
    case 2: ejercicioDos(); break;
    case 3: ejercicioTres(); break;
    case 4: ejercicioCuatro(); break;
    default: console.log("Valor no valido")
}

function ejercicioUno(){
    /* 1. Escribir una función a la que se pasa como parámetro un número entero y devuelve como resultado 
    un texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

    var numerEntero = prompt("Introduce un número entero"); //se pide mediante prompt el ingreso del numero entero
    var resultado = parImpar(numerEntero); //se llama a la función donde se realiza la evaluación de si es par o impar
    console.log("El numero "+numerEntero+" es: "+resultado); //se retorna mediante mensaje el resultado de la función

    //Funciónn parImpar
    function parImpar(numerEntero){
        if (numerEntero %2 == 0){ //devuelve el residuo al dividir en 2
            return "par"; //si devuelve 0 significa que es par
        }else{
            return "impar"; //de lo contrario, se asume que es impar
        }
    }
}

function ejercicioDos(){
    /* 2. Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro (un caracter), 
    y la función me debe devolver en qué posición en la cadena del string se encuentra el caracter entregado como argumento: */

    var cadenaString = "abcdefghijklmnñopqrstuvwxyz"; //seteamos la cadena a consultar
    var busquedaPos = prompt("Ingrese texto para conocer su posición en la cadena: "+cadenaString); //mediante prompt solicitamos el texto a buscar
    var resultadoBusqueda = posicionString(busquedaPos); //la función se encarga de evaluar la posición del texto ingresado en la cadena seteada
    if (resultadoBusqueda == -1){ //si el resultado es -1 significa que no encuentra el texto en la cadena seteada
        console.log("El texto buscado "+busquedaPos+" no se encuentra en la cadena de texto seteada: "+cadenaString);
    }else{
        console.log("El texto buscado "+busquedaPos+" se encuentra en la posición: "+resultadoBusqueda);
    }

    //Función posicionString
    function posicionString(busquedaPos){
        return cadenaString.indexOf(busquedaPos);
    }
}

function ejercicioTres(){
    /* 3. Hacer una función a la que le paso un precio, y este me devuelva el precio con impuesto de 0.19%. 
    Si yo ingreso 1000 a la función, me debería retornar con el formato "El precio con impuesto es de 1190" */

    var precio = Number(prompt("Digite un precio al cual aplicar el 19%")); //se solicita el precio al cual aplicar el 19%, se usa el number para indicar que el valor es numerico
    var precioConIva = añadirIVA(precio); //se llama a la función que añade el 19% al precio
    console.log("El precio con impuesto es de: "+precioConIva)

    //Función añadirIVA
    function añadirIVA(precio){
    return precio += (19 / 100) * precio; //tambien puede ser return precio += precio * 0.19;
    }
}

function ejercicioCuatro(){
    /* 4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:
    var dadoJulio = nuevoDado('julio')
    Y que la respuesta de dadoJulio() sea:

    dadoJulio() -> "Julio tiró un dado y salió 6"
    dadoJulio() -> "Julio tiró un dado y salió 3"
    dadoJulio() -> "Julio tiró un dado y salió 5"

    Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6). */

    //Testeando variables
    // var randomOri = Math.random();
    // console.log("Valor randomOri es: "+randomOri);
    // var randomParse = parseInt(randomOri);
    // console.log("Valor randomParse es: "+randomParse);
    // var randomPre = (6*Math.random()+1)
    // console.log("Valor randomPre es: "+randomPre);
    // var random = parseInt(6*Math.random()+1);
    // console.log("Valor random es: "+random);

    var dadoUser = prompt("Ingrese jugador para tirar los dados");
    var tiraDado = tirarDado(dadoUser);
    
    var random = tiraDado()
    console.log(dadoUser +" tiro el dado y salio "+random)

    function tirarDado(dadoUser){
        return function(){
            return parseInt(6*Math.random()+1);
        }
    }
}