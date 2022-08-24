// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

for ( var indice = 0; indice < array.length; indice ++){
    array[indice] = array[indice] +1;
  }
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = ''
  for (var indice = 0; indice < palabras.length; indice++){
    str = str + palabras[indice] + ' ';
    var finalStr=''
    for (var items = 0; items < str.length -1; items++){
      finalStr = finalStr + str[items];
    }
  }
  return finalStr;
}

function esArrayVacio(array){
  // indica si el arrary es un array vacío
  return array.length == 0;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var listaARecorrer = array ;
  while (!esArrayVacio(listaARecorrer) && devolverPrimerElemento(listaARecorrer) !== elemento){
    listaARecorrer.shift();
  }
  return !esArrayVacio(listaARecorrer);
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumatoria = 0;
  for (var indice = 0; indice < numeros.length; indice ++){
    sumatoria = sumatoria + numeros[indice];
  }
  return sumatoria;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  return agregarNumeros(resultadosTest) / resultadosTest.length
}

function mayorEntre(num1, num2){
  //devuelve elmayor de los números dados. si son iguales devuelve el primero
  if (num1 >= num2){
    return num1;
  }else{
    return num2;
  }
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = 0
  for ( var indice = 0; indice < numeros.length; indice ++){
    mayor = mayorEntre(mayor, numeros[indice])
  }
  return mayor
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var argumentos = [];
  var producto = arguments[0];
  for (var indice = 0; arguments[indice] !== undefined; indice ++){
    argumentos.push(arguments[indice]);
  }
  if (esArrayVacio(argumentos)){
    return 0;
  }else{
    for (var items = 1; items < argumentos.length; items ++){
      producto = producto * argumentos[items];
    }
    return producto
  }
}
function devuelve_Si_(elemento, condicion){
  // devuelve el elemento dado si se cumple la condición dada
  if (condicion){
    return elemento
  }
}
function esMayorQue(numero, referencia){
  // indica si el número dado es mayor que el núnmero de referencia
  return numero > referencia
}

function es_DeTipo_(elemento, tipo){
  //indica si el elemento dado es del tipo dado
  return typeof(elemento) == tipo;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayores = []
  for ( var indice = 0; indice < arreglo.length; indice ++){
    if (es_DeTipo_( (devuelve_Si_(arreglo[indice], esMayorQue (arreglo[indice], 18) ) ), "number") ){
      mayores.push(arreglo[indice]);
    } 
  }
  
  return mayores.length

}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
    var laborables = [2,3,4,5,6] 
    var finDeSemana = [7,1]
    if ( arrayContiene(finDeSemana,numeroDeDia )){
      return "Es fin de semana";
    } else if ( arrayContiene(laborables,numeroDeDia) ){
      return "Es dia Laboral";
    }else{
      return "Ingrese un número entre 1 y 7"
    }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    var str = n.toString()
    return str[0] === "9"
  
}

function esArraySingular(array){
  // indica si el arreglo dado contiene solo un elemento
  return array.length == 1
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 

  var recorrido = arreglo
  while (!esArraySingular(recorrido) && recorrido[0] == recorrido[1]){
    recorrido.shift()
  }
  return esArraySingular(recorrido)
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  /*if ( arrayContiene(array, "Enero") && arrayContiene(array, "Marzo") && arrayContiene(array, "Noviembre")){
    let arrayTestigo = ["Enero", "Marzo", "Noviembre"]
    let nuevoArray = []
    for(let indice = 0; indice < array.length; indice++){
      if (arrayContiene(arrayTestigo, array[indice])){
        nuevoArray.push(array[indice])
      }  
    }
    return nuevoArray
  } else {
    return "No se encontraron los meses pedidos"
  }
}
*/
var nuevoArray = []

for(let indice = 0; indice < array.length; indice ++){
  let evaluar = array[indice]
  if (evaluar === "Enero" || evaluar === "Marzo" || evaluar === "Noviembre"){
    nuevoArray.push(evaluar)
  }
}
if (nuevoArray.length !== 3){
  return "No se encontraron los meses pedidos"
}
return nuevoArray
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []
  for (var indice = 0; indice< array.length; indice ++){
    if (array[indice] > 100){
      nuevoArray.push(array[indice])
    }
  }
  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var num = numero;
  for (var contador = 1; contador <= 10; contador ++){
    num = num + 2;
    if (num == contador){
      break; 
    }else{
      array.push(num)
    }
  }
  if ( contador < 10){
    return "Se interrumpió la ejecución"
  }else{
    return array;
  }
  

}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var num = numero;
  for (var contador = 1; contador <= 10; contador ++){
    if (contador === 5){
      continue; 
    }
    num = num + 2;
    array.push(num);
   
  }
  return array;
  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
