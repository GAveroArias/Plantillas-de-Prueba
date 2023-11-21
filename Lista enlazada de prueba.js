LinkedList = function (cartelera, pelicula) {
    this.head = null;
    this.tail = null;
};

Node = function (data) {
    this.data = data;
    this.next = null;
};

LinkedList.prototype.addToTail = function (data) {
    if (this.head === null) {
        this.head = new Node(data);
        this.tail = this.head;
    } else {
        this.tail.next = new Node(data);
        this.tail = this.tail.next;
    }
};

LinkedList.prototype.print = function () {
    let current = this.head;
    let result = "";

    while (current) {
        result += current.data + " -> ";
        current = current.next;
    }

    return result + "null";
};

function encontrarPelicula(cartelera, pelicula) {
    const peliculas = Object.values(cartelera);

    let encontrarPelicula = false;
    function buscarPelicula(index) {
        if (index === peliculas.length) {
            return "Actualmente no tenemos la película " + pelicula;
        }

        if (peliculas[index] === pelicula) {
            return "Sí, tenemos la película " + pelicula;
        }

        return buscarPelicula(index + 1);
    }

    return buscarPelicula(0);
}

let cartelera = {
    0: "El padrino",
    1: "Iron Man",
    2: "El exorcista",
    3: "El señor de los anillos",
    4: "La lista de Schindler",
};

console.log(encontrarPelicula(cartelera, "El padrino"));
console.log(encontrarPelicula(cartelera, "Casablanca"));
