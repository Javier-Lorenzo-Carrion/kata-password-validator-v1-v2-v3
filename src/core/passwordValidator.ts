export function passwordValidatorV1(password: string): boolean | undefined {
  const minimumCharacters: number = 6;
  const passwordContainsMinimumCharacters: boolean = password.length >= minimumCharacters;
  const passwordContainsUpperCaseLetter: boolean = password.toLowerCase() !== password;
  const passwordContainsLowerCaseLetter: boolean = password.toUpperCase() !== password;
  const passwordContainsUnderscore: boolean = password.includes('_');
  const passwordContainsDigit: boolean = Boolean(password.match(/\d/));

  return (
    passwordContainsMinimumCharacters &&
    passwordContainsUpperCaseLetter &&
    passwordContainsLowerCaseLetter &&
    passwordContainsUnderscore &&
    passwordContainsDigit
  );
}

export function passwordValidatorV2(password: string): boolean {
  const formatedPassword: string[] = [];

  password.split('').forEach((char: string) => {
    formatedPassword.push(char.toLowerCase());
  });

  return password.length >= 6 && formatedPassword.join('') !== password;
}

