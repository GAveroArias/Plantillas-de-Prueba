'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
// Selecciona un elemento aleatorio como pivote

  let pivot = array[Math.floor(Math.random() * array.length)];
   // Arreglos para almacenar elementos menores, iguales y mayores que el pivote
  let left = [];
  let right = [];
  let equal = [];

   // Itera sobre todos los elementos del arreglo

  for(let i = 0; i<array.length; i++){
    // Compara el elemento actual con el pivote
    if(array[i] < pivot){
      // Si es menor, se agrega al arreglo "left"
      left.push(array[i]);
    }else if(array[i] > pivot){
      // Si es mayor, se agrega al arreglo "right"
      right.push(array[i])
    }else{
       // Si es igual, se agrega al arreglo "equal"
      equal.push(array[i])
    }
  }

  // Aplica QuickSort recursivamente a los subarreglos"left" y "right",
  // y concatena los resultados junto con el arreglo "equal"

  return quickSort(left).concat(equal).concat(quickSort(right));
}

//////////////////////////////////////
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length === 1) return array;
   // Divide el arreglo en dos partes

  let div = split(array);
  let left = div[0];
  let right = div[1];

   // Aplica mergeSort de forma recursiva a los subarreglos izquierdo y derecho,
  // y luego combina los resultados mediante la función merge
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){

  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  // Combina los subarreglos izquierdo y derecho en un solo arreglo ordenado
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else{
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }

// Agrega los elementos restantes del subarreglo que no ha llegado a su fin
// (en caso de que uno de los subarreglos sea más largo que el otro)
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function split(array){
 // Encuentra el índice medio del arreglo
  let middle = Math.floor(array.length/2);

   // Divide el arreglo en dos partes utilizando slice()
  let left = array.slice(0, middle); 
  let right = array.slice(middle);   
// Retorna los subarreglos izquierdo y derecho como un arreglo
  return [left, right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
