// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
let matriz = [];
let claves = Object.keys(objeto); // creo una lista con las claves del objeto
for(indice = 0; indice < claves.length; indice ++ ){
  matriz.push([claves[indice], objeto[claves[indice]]]);
}
  return matriz;
}


function cantidadDeAparicionesDe_En_(elemento, array){
  /* devuelve la cantida de apriciones del elemento dado en el array dado*/
  let cantidad = 0;
  for ( let indice = 0; indice < array.length; indice ++){
    if (array[indice] === elemento)
    cantidad = cantidad + 1;
  }
  return cantidad;
}
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let array = string.split("");
  var caracteres = {};
  for (let indice = 0; indice < array.length; indice ++){
      caracteres[array[indice]] = cantidadDeAparicionesDe_En_(array[indice], array);
    }
  return caracteres;
  }
  
function esMayúscula(caracter){
  return caracter === caracter.toUpperCase();
}
function esMinúscula(caracter){
  return caracter === caracter.toLowerCase();
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = "";
  var minusculas = "";
   
  for (let indice = 0; indice < s.length; indice ++ ){
    if (esMayúscula(s.charAt(indice))){
      mayusculas = mayusculas + s.charAt(indice);
    }else{
      minusculas = minusculas + s.charAt(indice);
    }
  }
  return mayusculas + minusculas;
}

function stringInvertido(string){
  /*Devuelve el string dado invertido*/
  let invertido = "";
  for (let index = string.length -1; index >= 0; index --){
    invertido =  invertido + string.charAt(index);

  }
  return invertido;
}
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(" ");
  let invertida = "";
  for (let indice = 0; indice < frase.length; indice ++){
    invertida = invertida + stringInvertido(frase[indice]) + " ";
  }
  let longitud = invertida.length;
  return invertida.substring(0,longitud-1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let a = numero.toString();
  let b = stringInvertido(a);
  if( a === b){
    return "Es capicua";
  }else{
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaFinal = "";
  for ( let indice = 0; indice < cadena.length; indice ++){
    if (cadena.charAt(indice) !== "a" && cadena.charAt(indice) !== "b" && cadena.charAt(indice) !== "c"){
      cadenaFinal = cadenaFinal + cadena.charAt(indice);
    }
    
  }
  return cadenaFinal;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  for (let indice = 0; indice < arr.length; indice ++){
    for (let index = indice +1; index < arr.length; index ++ ){
      if (arr[indice].length > arr[index].length){
        let portapapeles = arr[indice];
        arr[indice] = arr[index];
        arr[index] = portapapeles;
      }
    }
  }
  return arr;
}

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
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

function esArrayVacio(array){
  // indica si el arrary es un array vacío
  return array.length == 0;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];
  for ( let indice = 0; indice < arreglo1.length; indice ++){
    for ( let index = 0; index < arreglo2.length; index ++){
      if (arreglo1[indice] === arreglo2[index]){
        interseccion.push(arreglo1[indice])
      }
    }
    
  }
  return interseccion;
}
  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

