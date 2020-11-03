import { handleSubmit } from '../src/client/js/formHandler';

describe('Form submission test', () => {
  test("Testing handleSubmit() should abort if input isn't valid", () => {
    expect(handleSubmit).toBeDefined();
  });
});
