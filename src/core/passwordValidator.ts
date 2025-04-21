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

  function containsMinimumCharacters(password: string): boolean {
    if (password.length >= 6) {
      return true;
    } else {
      return false;
    }
  }

  function containsUpperCaseLetter(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i).toLowerCase() !== password.charAt(i)) {
        return true;
      }
    }
    return false;
  }

  function containsLowerCaseLetter(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i).toUpperCase() !== password.charAt(i)) {
        return true;
      }
    }
    return false;
  }

  function containsUnderscore(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i).includes('_')) {
        return true;
      }
    }
    return false;
  }

  function containsDigit(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (Number(password.charAt(i))) {
        return true;
      }
    }
    return false;
  }

  return (
    containsMinimumCharacters(password) &&
    containsUpperCaseLetter(password) &&
    containsLowerCaseLetter(password) &&
    containsUnderscore(password) &&
    containsDigit(password)
  );
}

export function passwordValidatorV3(password: string): boolean {
  const passwordHasValidSize: boolean = password.length >= 6;
  const passwordHasUpperCaseLetter: boolean = Boolean(password.match(/[A-Z]/));
  return passwordHasValidSize && passwordHasUpperCaseLetter;
}
