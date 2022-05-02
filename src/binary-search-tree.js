const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
// left right value


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root1 = null
  }

  root() {
    return this.root1
  }

  add(data) {
    this.root1 = AddWithin(this.root1, data)

     function AddWithin(node,data) {
        if(!node) {
          return new Node(data)
        }
        if(node.data === data) {
          return node
        }
        if(data < node.data) node.left = AddWithin(node.left,data);
        if(data > node.data) node.right = AddWithin(node.right,data);
        return node
     }
 }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return findData(this.root1, data)

    function findData(node,data) {

      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data
        ? findData(node.left,data)
        : findData(node.right,data);
    }

  }

  remove(data) {

    this.root1 = remove1(this.root1,data) 

    function remove1(node,data) {

      if(!node) return null
      
      if(data < node.data) {
        node.left = remove1(node.left, data)
        return node
      }
      if(data > node.data)  {
        node.right = remove1(node.right, data)
        return node
      }
      if(!node.left && !node.right) return null
      if (!node.left) {
        node = node.right
        return node
      } 
      if (!node.right) {
        node = node.left
        return node
      }
        
      let minRight = node.right
      while(minRight.left) {
        minRight = minRight.left
      }
      node.data = minRight.data
      node.right = remove1(node.right, minRight.data)
      return node
    }
  }

  min() {
    if (!this.root1) return null;

    let node = this.root1;

    while(node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.root1) return null;

    let node = this.root1;

    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};