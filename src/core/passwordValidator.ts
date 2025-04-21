export function passwordValidatorV1(password: string): boolean {

  const minimumCharacters: number = 6;
  const passwordContainsMinimumCharacters: boolean = password.length >= minimumCharacters;
  const passwordContainsUpperCaseLetter: boolean = password.toLowerCase() !== password;
  const passwordContainsLowerCaseLetter: boolean = password.toUpperCase() !== password;
  const passwordContainsUnderscore = password.includes('_');
  const passwordContainsDigit: RegExpMatchArray | null = password.match(/\d/);

  if (
    passwordContainsMinimumCharacters &&
    passwordContainsUpperCaseLetter &&
    passwordContainsLowerCaseLetter &&
    passwordContainsUnderscore &&
    passwordContainsDigit
  ) {
    return true;
  }
  return false;
}

export function passwordValidatorV2(password: string): boolean {
  const password1: string [] = password.split('');
  return password1.length >= 6;
}
