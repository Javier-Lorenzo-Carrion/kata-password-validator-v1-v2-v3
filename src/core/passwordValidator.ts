export function passwordValidator(password: string): boolean {

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
