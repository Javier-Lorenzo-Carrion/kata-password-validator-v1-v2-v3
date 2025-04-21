import { passwordValidatorV1, passwordValidatorV2 } from '../core/passwordValidator';

describe('PasswordValidator version 1 should', () => {
  it('accept a valid password', () => {
    expect(passwordValidatorV1('1_Hola')).toBe(true);
  });
  it('reject a password when has less than 6 characters', () => {
    expect(passwordValidatorV1('1_Hol')).toBe(false);
  });
  it('reject a password when has not any uppercase letter', () => {
    expect(passwordValidatorV1('1_hola')).toBe(false);
  });
  it('reject a password when has not any lowercase letter', () => {
    expect(passwordValidatorV1('1_HOLA')).toBe(false);
  });
  it('reject a password when has not any underscore, ', () => {
    expect(passwordValidatorV1('12Hola')).toBe(false);
  });
  it('reject a password when has not any number, ', () => {
    expect(passwordValidatorV1('g_Hola')).toBe(false);
  });
  it('reject a password when password is an empty text, ', () => {
    expect(passwordValidatorV1('')).toBe(false);
  });
});

describe('PasswordValidator version 2', () => {
  it('accept a valid password', () => {
    expect(passwordValidatorV2('1_Hola')).toBe(true);
  });
  it('reject a password when has less than 6 characters', () => {
    expect(passwordValidatorV2('1_Hol')).toBe(false);
  });
  it('reject a password when has not any uppercase letter', () => {
    expect(passwordValidatorV2('1_hola')).toBe(false);
  });

})


