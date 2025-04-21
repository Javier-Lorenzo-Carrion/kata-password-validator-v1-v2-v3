import { passwordValidator } from '../core/passwordValidator';

describe('PasswordValidator', () => {
  it('Should return true', () => {
    expect(passwordValidator('')).toBe(false);
  });
});
