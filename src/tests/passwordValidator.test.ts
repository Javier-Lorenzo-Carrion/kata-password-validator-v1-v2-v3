import { passwordValidator } from '../core/passwordValidator';

describe('PasswordValidator', () => {
  it('Should return true when password has 6 chars or more, has any number, has any underscore, has any uppercase letter and has any lowercase letter', () => {
    expect(passwordValidator('1_Hola')).toBe(true);
  });

});
