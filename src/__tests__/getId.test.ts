import { getId } from '../utils/get-id';

describe('getId', () => {
  test('returns the correct id from a URL', () => {
    const url = 'https://example.com/api/items/123/';
    const result = getId(url);
    expect(result).toBe('123');
  });
});
