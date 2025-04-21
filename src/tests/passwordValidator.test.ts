import { passwordValidatorV1, passwordValidatorV2 } from '../core/passwordValidator';

describe('PasswordValidator version 1', () => {
  it('Should return true when password has 6 chars or more, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidatorV1('1_Hola')).toBe(true);
  });
  it('Should return false when password has less than 6 chars, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidatorV1('1_Hol')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any underscore, has any lowercase letter but has not any uppercase letter', () => {
    expect(passwordValidatorV1('1_hola')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any underscore, has any uppercase letter but has not any lowercase letter', () => {
    expect(passwordValidatorV1('1_HOLA')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any number, has any uppercase letter, has any lowercase letter but has not any underscore, ', () => {
    expect(passwordValidatorV1('12Hola')).toBe(false);
  });
  it('Should return false when password has 6 chars or more, has any uppercase letter, has any lowercase letter, has any underscore but has not any number, ', () => {
    expect(passwordValidatorV1('g_Hola')).toBe(false);
  });
  it('Should return false when password is an empty text, ', () => {
    expect(passwordValidatorV1('')).toBe(false);
  });
});

describe('PasswordValidator version 2', () => {
  it('Should return true when password has 6 chars or more, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidatorV2('1_Hola')).toBe(true);
  });
  it('Should return false when password has less than 6 chars, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidatorV2('1_Hol')).toBe(false);
  });
})
