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

  it('inserts element at expected position', () => {
    const testList = new LinkedList();

    testList.push('antelope');
    testList.push(23);
    testList.push('dodecahedron');

    testList.insertAt('76', 1);

    expect(testList.getElementAt(0)?.element).toBe('antelope');
    expect(testList.getElementAt(1)?.element).toBe('76');
    expect(testList.getElementAt(2)?.element).toBe(23);
    expect(testList.getElementAt(3)?.element).toBe('dodecahedron');
  });

  it('gets index of element', () => {
    const testList = new LinkedList();

    testList.push('antelope');
    testList.push(23);
    testList.push('dodecahedron');

    expect(testList.indexOf('antelope')).toBe(0);
    expect(testList.indexOf(23)).toBe(1);
    expect(testList.indexOf('dodecahedron')).toBe(2);
    expect(testList.indexOf('nincompoop')).toBe(-1);
  });
});
