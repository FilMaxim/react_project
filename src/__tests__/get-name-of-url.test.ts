import { getNameOfUrl } from '../utils/get-name-of-url';

describe('getNameOfUrl', () => {
  it('should fetch data from multiple URLs and extract the specified key', async () => {
    const mockUrls = ['https://example.com/api/film/1', 'https://example.com/api/film/2'];
    const mockKey = 'title';
    const mockData = [{ title: 'Film 1' }, { title: 'Film 2' }];
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(JSON.stringify(mockData), {
        headers: { 'Content-type': 'application/json' },
        status: 200,
        statusText: 'OK',
      })
    );
    const result = await getNameOfUrl(mockUrls, mockKey);
    expect(mockFetch).toHaveBeenCalledTimes(mockUrls.length);
    expect(mockFetch).toHaveBeenCalledWith(mockUrls[0]);
    expect(mockFetch).toHaveBeenCalledWith(mockUrls[1]);
    mockFetch.mockRestore();
  });
});
