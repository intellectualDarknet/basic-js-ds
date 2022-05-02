const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l,k) {
  class LinkedList {
    constructor(node) {
      this.head = node;
      let length = 0;
      while(node.next) {
        node = node.next;
        length++;
      }
    }
  }

  const linkedList = new LinkedList(l);
  let current = linkedList.head;
  let index = 0;
  let prev = current;

  while(current) {
  
    if(index == 0 && current.value == k) {
      linkedList.head = current.next;
      prev = current.next;
      current = current.next;
      index = 0;
      linkedList.length--;
      continue;
    }

    if(index != 0 && current.value == k) {

      prev.next = current.next;
      current = current.next;
      linkedList.length--;
      index++;
      continue
    }

    if(index = linkedList.length && current.value == k) {
      prev.next = null;
      linkedList.length--;
      current = null;
      continue;
    }
    prev = current;
    current = current.next;
    index++;

  }
  return linkedList.head;
}

module.exports = {
  removeKFromList
};
