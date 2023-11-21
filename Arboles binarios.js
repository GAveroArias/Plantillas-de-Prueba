// BinarySearchTree.prototype.sum = function () {
//     let sum = 0;

//     if (this.left === null && this.right === null) {
//         return this.value;
//     } else if (this.left === null) {
//         return this.value + this.right.sum();
//     } else if (this.right === null) {
//         return this.value + this.left.sum();
//     } else {
//         return this.value + this.left.sum() + this.right.sum();
//     }

//     return sum;
// };

function countProps(objeto) {
    let count = 0;

    for (let key in objeto) {
        count++;
        let value = objeto[key];
        if (typeof value === "object" && !Array.isArray(value)) {
            count += countProps(value);
        }
    }

    return count;
}

function countArray(array) {
    let sum = 0;
    for (let elem of array) {
        if (Array.isArray(elem)) {
            sum += countArray(elem);
        } else {
            sum++;
        }
    }

    return sum;
}

const numerosSuma = countArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]]);
console.log(numerosSuma);

function mergeQueues(queue1, queue2) {
    let queue = new Queue();

    while (queue1.size() || queue2.size()) {
        let firstElement = queue1.dequeue();
        let secondElement = queue2.dequeue();
        if (firstElement) queue.enqueue(firstElement);
        if (secondElement) queue.enqueue(secondElement);
    }

    return queue;
}
