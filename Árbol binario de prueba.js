function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const myTree = new BinarySearchTree(10);

BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
};

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        if (this.left === null) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }

    return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (
    cb,
    order = "in-order"
) {
    if (order === "pre-order") {
        cb(this.value);
    }
    if (this.left) {
        this.left.depthFirstForEach(cb, order);
    }
    if (order === "in-order") {
        cb(this.value);
    }
    if (this.right) {
        this.right.depthFirstForEach(cb, order);
    }
    if (order === "post-order") {
        cb(this.value);
    }

    return this;
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
    const queue = [this];

    while (queue.length > 0) {
        const treeNode = queue.shift();
        cb(treeNode.value);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }

    return this;
};

BinarySearchTree.prototype.size = function () {
    let count = 1;
    if (this.left) {
        count += this.left.size();
    }
    if (this.right) {
        count += this.right.size();
    }

    return count;
};

BinarySearchTree.prototype.height = function () {
    let height = 0;

    if (this.left) {
        height = Math.max(height, this.left.height());
    }
    if (this.right) {
        height = Math.max(height, this.right.height());
    }

    return height + 1;
};

BinarySearchTree.prototype.getHouseValues = function (cb, lado) {
    let sum = 0;

    if (lado === "left") {
        if (this.left) {
            sum += this.left.getHouseValues(cb, lado);
        }
    } else if (lado === "right") {
        if (this.right) {
            sum += this.right.getHouseValues(cb, lado);
        }
    }

    sum += this.value;
    return sum;
};
myTree.insert(5);
myTree.insert(15);
myTree.insert(2);
myTree.insert(12);
myTree.insert(1);
myTree.insert(3);
myTree.insert(7);
myTree.insert(17);
myTree.insert(19);
console.log(myTree);
console.log(myTree.contains(15));
console.log(myTree.contains(16));
console.log(myTree.depthFirstForEach(console.log, "pre-order"));
console.log(myTree.depthFirstForEach(console.log, "in-order"));
console.log(myTree.depthFirstForEach(console.log, "post-order"));
console.log(myTree.getHouseValues(console.log, "right"));
console.log(myTree.getHouseValues(console.log, "left"));
console.log(myTree.height());
console.log(myTree.size());
