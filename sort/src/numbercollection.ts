import { Sorter } from './sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(left_index: number, right_index: number): boolean {
    return this.data[left_index] > this.data[right_index];
  }

  swap(left_index: number, right_index: number): void {
    const left_hand = this.data[left_index];
    this.data[left_index] = this.data[right_index];
    this.data[right_index] = left_hand;
  }
}
