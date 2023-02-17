class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    let currentNode = this.root;

    if (!currentNode) {
      this.root = new Node(value);
      return this;
    }

    while (true) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (currentNode.value <= value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return this;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        continue;
      }

      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        continue;
      }

      if (value === currentNode.value) {
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          }

          if (parentNode.value > currentNode.value) {
            parentNode.left = currentNode.left;
            return this;
          }

          if (parentNode.value < currentNode.value) {
            parentNode.right = currentNode.left;
            return this;
          }
        }

        if (currentNode.right) {
          if (!currentNode.right.left) {
            if (!parentNode) {
              this.root = currentNode.right;
              return this;
            }
            parentNode.right = currentNode.right;
            return this;
          } else {
            // find the right child's left most child
            let leftMost = currentNode.right.left;
            let leftMostParent = currentNode.right;

            while (!leftMost.left) {
              leftMostParent = leftMost;
              leftMost = leftMost.left;
            }

            // parents left subtree is now leftmost's right sub tree
            leftMostParent.left = leftMost.right;
            leftMost.left = currentNode.left;
            leftMost.right = currentNode.right;

            if (!parentNode) {
              this.root = leftMost;
              return this;
            }

            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
              return this;
            }

            if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
              return this;
            }
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(9).insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);

console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(9));

function traverse(node) {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);

  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
