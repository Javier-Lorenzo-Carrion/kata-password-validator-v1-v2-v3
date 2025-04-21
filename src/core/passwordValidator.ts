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

  const arrayToEvaluateUpperCases: string[] = [];
  const arrayToEvaluateLowerCases: string[] = [];

  password.split('').forEach((char: string) => { arrayToEvaluateUpperCases.push(char.toLowerCase());});
  password.split('').forEach((char: string) => { arrayToEvaluateLowerCases.push(char.toUpperCase());});

  const containsLowerCaseLetter: boolean = arrayToEvaluateLowerCases.join('') !== password;
  const containsUpperCaseLetter: boolean = arrayToEvaluateUpperCases.join('') !== password;

  return password.length >= 6 && containsUpperCaseLetter && containsLowerCaseLetter;
}
