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
  constructor(equalsFn = defaultEquals) {}

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

  public removeAt(index: number) {
    // check for out of bounds values
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // removing first item
      if (index === 0) {
        this.head = current?.next;
      } else {
        let previous: LinkedListNode<T> | undefined;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current?.next;
        }

        // link previous with current's next: skip it to remove
        if (previous) previous.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
    return undefined; // should be implicit
  }
}
