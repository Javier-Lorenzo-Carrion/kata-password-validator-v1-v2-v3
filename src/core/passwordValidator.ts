export function passwordValidator(password: string): boolean {
  const minimumCharacters: number = 6;
  const passwordContainsMinimumCharacters: boolean = password.length >= minimumCharacters;
  if (passwordContainsMinimumCharacters && password.toLowerCase() !== password && password.toUpperCase() !== password && password.includes('_') && password.match(/\d/)) return true;
  return false;
}
