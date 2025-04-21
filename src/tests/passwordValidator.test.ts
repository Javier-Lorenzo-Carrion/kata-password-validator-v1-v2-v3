import { passwordValidator } from '../core/passwordValidator';

describe('PasswordValidator', () => {
  it('Should return true when password has 6 chars or more, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidator('1_Hola')).toBe(true);
  });
  it('Should return false when password has less than 6 chars, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidator('1_Hol')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any underscore, has any lowercase letter but has not any uppercase letter', () => {
    expect(passwordValidator('1_hola')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any underscore, has any uppercase letter but has not any lowercase letter', () => {
    expect(passwordValidator('1_HOLA')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any uppercase letter, has any lowercase letter but has not any underscore, ', () => {
    expect(passwordValidator('12Hola')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any uppercase letter, has any lowercase letter, has any underscore but has not any number, ', () => {
    expect(passwordValidator('g_Hola')).toBe(false);
  });
  it('Should return false when password is an empty text, ', () => {
    expect(passwordValidator('')).toBe(false);
  });
});
