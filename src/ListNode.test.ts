import { ListNode } from './ListNode';
import { describe, expect, it } from '@jest/globals';

describe('listNode', () => {
  it('creates a ListNode', () => {
    const testListNode = new ListNode(1, 'hello');
    expect(testListNode.value).toEqual('hello');
  });
});
