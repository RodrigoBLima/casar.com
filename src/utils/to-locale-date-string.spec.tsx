import { formatUpdatedDate } from './to-locale-date-string';

describe('Format Updated Date util', () => {
  test('should formtat to valid ISO correctly', () => {
    expect(formatUpdatedDate('2021-04-17T10:00:00Z')).toEqual('Updated on 17 Apr 2021');
  });

  test('should format future dates', () => {
    expect(formatUpdatedDate('2030-12-25T12:00:00Z')).toBe('Updated on 25 Dec 2030');
  });
});
