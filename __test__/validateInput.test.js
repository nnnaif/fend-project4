import { validateInput } from '../src/client/js/validateInput';

describe('Testing input validation', () => {
  test('Testing validateInput() with a non URL string', () => {
    expect(validateInput('random string')).toEqual(false);
  });
  test('Testing validateInput with a valid URL', () => {
    expect(validateInput('http://google.com')).toEqual(true);
  });
});
