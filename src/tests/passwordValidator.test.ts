import { passwordValidator } from '../core/passwordValidator';

describe('PasswordValidator', () => {
  it('Should return false when password is an empty text', () => {
    expect(passwordValidator('')).toBe(false);
  });
  it('Should return true when password is not empty text', () => {
    expect(passwordValidator('k')).toBe(true);
  });
});
