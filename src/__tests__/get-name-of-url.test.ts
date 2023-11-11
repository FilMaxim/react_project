import { getNameOfUrl } from '../utils/get-name-of-url';

describe('getNameOfUrl', () => {
  it('should return an array of movie names', async () => {
    const arr: string[] = [
      'https://swapi.py4e.com/api/films/1/',
      'https://swapi.py4e.com/api/films/2/',
    ];
    const key = 'title';
    const expected: string[] = [];
    const result = await getNameOfUrl(arr, key);
    expect(expected).toEqual(result);
  });

  it('should handle errors and return an empty array', async () => {
    const arr: string[] = ['https://swapi.dev/api/films/invalid/'];
    const key = 'title';
    const expected: string[] = [];
    const result = await getNameOfUrl(arr, key);
    expect(result).toEqual(expected);
  });
});
