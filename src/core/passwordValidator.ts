export function passwordValidator(password: string): boolean {
  const minimumCharactersAccepted: number = 6;
  if (password.length >= minimumCharactersAccepted && password.toLowerCase() !== password && password.toUpperCase() !== password && password.includes('_') && password.match(/\d/)) return true;
  return false;
}
