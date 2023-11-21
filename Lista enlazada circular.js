// En este tipo de listas, el last next apunta al primer nodo de la lista, y el primero prev apunta al ultimo nodo de la lista.
// De este modo la lista es circular.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class ListaEnlazadaCircular {
    constructor() {
        this.first = null;
        this.last = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.last.next = this.first;
    }

    print() {
        let current = this.first;

        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.first);
    }
}

// Ejemplo de uso
const listaCircular = new ListaEnlazadaCircular();
listaCircular.add(1);
listaCircular.add(2);
listaCircular.add(3);

console.log(listaCircular.print());
