export class ListNode {
  key: number
  value: string | number
  prev: ListNode | null
  next: ListNode | null
  constructor(key: number, value: string | number) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}
