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

    expect(testList.getElementAt(0)?.element).toBe('antelope');
    expect(testList.getElementAt(1)?.element).toBe(23);
    expect(testList.getElementAt(2)?.element).toBe('dodecahedron');
  });

  it('removes elements from a Linked List', () => {
    const testList = new LinkedList();

    testList.push('antelope');
    testList.push(23);
    testList.push('dodecahedron');

    // remove item from middle of list
    expect(testList.removeAt(1)).toBe(23);
    // remove item from presumed new index after middle item removed
    expect(testList.removeAt(1)).toBe('dodecahedron');
    expect(testList.removeAt(0)).toBe('antelope');
  });
});
