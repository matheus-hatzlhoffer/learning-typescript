import { Sorter } from './sorter';

export class CharCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(left_index: number, right_index: number): boolean {
    return (
      this.data[left_index].toLowerCase() > this.data[right_index].toLowerCase()
    );
  }

  swap(left_index: number, right_index: number): void {
    const char = this.data.split('');
    const left_hand = char[left_index];
    char[left_index] = char[right_index];
    char[right_index] = left_hand;

    this.data = char.join('');
  }
}
