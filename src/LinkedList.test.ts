import LinkedList, { LinkedListNode } from './LinkedList';
import { describe, expect, it } from '@jest/globals';

describe('Linked List', () => {
  it('creates a Linked List Node', () => {
    const testLinkedListNode = new LinkedListNode(15);
    expect(testLinkedListNode.element).toBe(15);
    const testLinkedListNode2 = new LinkedListNode('zebra');
    expect(testLinkedListNode2.element).toBe('zebra');
  });

  it('pushes elements to a Linked List', () => {
    const testList = new LinkedList();

    testList.push('antelope');
    testList.push(23);
    // need access methods to make it testable
  });
});
