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

  public push(element: T): void {
    const node = new LinkedListNode(element);
    let current: LinkedListNode<T> | undefined;

    if (this.head !== undefined) {
      current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
    } else {
      this.head = node;
    }
    this.count++;
  }
}
