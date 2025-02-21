import { fetchHttpClient } from './fetch';

const mockURL = 'https://api.github.com/test';
describe('Fetch http client', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Method GET', () => {
    test('should succefull request', async () => {
      const fakeData = { id: 1, name: 'test' };
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(fakeData),
      });

      const data = await fetchHttpClient.get(mockURL);
      expect(data).toEqual(fakeData);
      expect(global.fetch).toHaveBeenCalledWith(mockURL, expect.objectContaining({ method: 'GET' }));
    });

    test('should simulate error on request', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: 'Not Found',
      });

      await expect(fetchHttpClient.get(mockURL)).rejects.toThrow('Erro na requisição: Not Found');
    });
  });

  describe('Mehod DELETE', () => {
    test('should delete with sucess', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
      });

      await fetchHttpClient.delete(mockURL);
      expect(global.fetch).toHaveBeenCalledWith(mockURL, expect.objectContaining({ method: 'DELETE' }));
    });

    test('should retutn exception o fail request', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: 'Forbidden',
      });

      await expect(fetchHttpClient.delete(mockURL)).rejects.toThrow('Erro ao deletar: Forbidden');
    });
  });
});
