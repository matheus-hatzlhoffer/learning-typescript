import { Sorter } from './sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedListCollection extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(left_index: number, right_index: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(left_index).data > this.at(right_index).data;
  }

  swap(left_index: number, right_index: number): void {
    const left_node = this.at(left_index);
    const right_node = this.at(right_index);

    const left_hand = left_node.data;
    left_node.data = right_node.data;
    right_node.data = left_hand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}