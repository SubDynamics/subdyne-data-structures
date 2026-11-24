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
    testList.push('dodecahedron');

    // Need to replace these with lookup functions
    // and move removeAt() tests to their own description block

    // remove item from middle of list
    expect(testList.removeAt(1)).toBe(23);
    // remove item from presumed new index after middle item removed
    expect(testList.removeAt(1)).toBe('dodecahedron');
    expect(testList.removeAt(0)).toBe('antelope');
  });
});
