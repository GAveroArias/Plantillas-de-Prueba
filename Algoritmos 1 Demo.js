// COMPLEJIDAD --> BIG O notation
// o(1) - o(log n) - o(n) - o(n^2)

// o(1)
console.log("Hola");
let nombre = "Feli";
if (nombre === "Feli") console.log("Chao");

// O(n)
// bucles
while (num < 10) {
    num += 1;
}
// O(n)
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//
function sumar(a, b) {
    //L.E
    // a = 2 O(1)
    // b = 5 O(1)
    let suma = a + b;
    return suma;
}
sumar(2, 5);
// O(1 + 1 + 1 + 1) = O(4) = O(1)

// O(n^2)
var acum = 0; // O(1)
for (let i = 0; i < 10; i++) {
    // O(n)
    // Por cada paso de i, se ejecutan m pasos de j
    for (let j = 0; j < 5; j++) {
        // O(m) --> O(n)
        acum += i + j; // O(1)
    }
}
console.log(acum); // O(1)
// O(1) + O(n * m) + O(1)
// O(n * m) --> O(n^2)

// Recursión
function sumarNaturales(n) {
    // L.R
    // n = 10 O(1)
    let resultado = sumarNaturales(n - 1);
    return n + resultado;
}
sumarNaturales(10);
// o(1 + n + 1) = o(n)
//
//
//
//
//
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
