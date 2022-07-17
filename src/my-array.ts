// https://www.geeksforgeeks.org/implementation-of-array-class-in-javascript/

/**
 * User defined class MyArray
 */
export class MyArray {
  length: number;
  data: Record<string, any>;

  // Create constructor
  constructor() {
    // It store the length of array.
    this.length = 0;

    // Object to store elements.
    this.data = {};
  }

  /**
   * This function is used to push an element at the end of the array.
   * @param element
   */
  push(element: any) {}

  /**
   * It is used to delete an element at the end of the array.
   */
  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /**
   *  This function is used to insert an element at given index.
   * @param item
   * @param index
   * @returns
   */
  insertAt(item: any, index: number) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  /**
   *  This function is used to remove an element at given index or property in a data object.
   */
  deleteAt(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /**
   *  It returns the element at given index.
   */
  getElementAtIndex(index: number) {
    return this.data[index];
  }
}
