function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

export class LinkedListNode<T> {
  constructor(
    public element: T,
    public next?: LinkedListNode<T>
  ) {}
}

export default class LinkedList<T> {
  protected count: number = 0;
  protected head?: LinkedListNode<T>;
  protected equalsFn: <T>(a: T, b: T) => boolean;
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
  }
  /**
   * If head is undefined, list is empty
   * @param element
   */
  public push(element: T): void {
    const node = new LinkedListNode(element);

    // If count > 0, to add an element to the end of the list,
    // find the last element by iterating to the end
    // current = iterated node
    let current: LinkedListNode<T> | undefined;
    if (this.head !== undefined) {
      current = this.head;
      // keep assigning the next node to 'current' until end is reached
      while (current.next !== undefined) {
        current = current.next;
      }

      // once the undefined .next is found, assign the new node to it
      current.next = node;
    } else {
      this.head = node;
    }
    this.count++;
  }

  /**
   *
   * @param indexToGet
   * @returns LinkedListNode or undefined
   */
  public getElementAt(indexToGet: number) {
    if (indexToGet >= 0 && indexToGet <= this.count) {
      let node = this.head;

      // iterate along 'next' value to climb toward index
      // because there's no k/v retrieval like array
      for (let i = 0; i < indexToGet && node !== undefined; i++) {
        node = node.next;
      }

      return node;
    }
    return undefined; // implicit
  }

  /**
   * @param elementToAdd
   * @param elementIndex
   * @returns boolean. true if successfull
   */
  public insertAt(elementToAdd: T, elementIndex: number): boolean {
    if (elementIndex >= 0 && elementIndex <= this.count) {
      const node = new LinkedListNode(elementToAdd);

      if (elementIndex === 0) {
        // add on first position
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(elementIndex - 1);
        const current = previous?.next;
        node.next = current;

        // this function's index/count conditional should ensure previous is always defined
        // but, getElementAdd's return type is declared possibly undefined.
        if (previous) previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  public removeAt(indexToRemove: number) {
    // check for out of bounds values
    if (indexToRemove >= 0 && indexToRemove < this.count) {
      // this.head implicitly defined if conditional passes,
      // type is inherited from this.head, but 'current'
      // explicitly uses 'undefined' because 'next' can return it
      let current: LinkedListNode<T> | undefined = this.head;

      // removing first item
      if (indexToRemove === 0) {
        this.head = current?.next;
      } else {
        const previous = this.getElementAt(indexToRemove - 1);
        current = previous?.next;

        // if-conditional set because previous' type could be undefined
        // because it is downstream from 'next' property type
        // Skip over removed index, e.g previous=7, current=8, current.next=9
        // prevous.next had pointed to 8, now it points to 9
        // if previous.next is set undefined, 7 becomes last in list
        if (previous) previous.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
    return undefined; // should be implicit
  }

  public indexOf(element: T): number {
    let current = this.head;

    for (let i = 0; i < this.count && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }
}
