/*

El problema es que si voy paso a paso no me van a pasar los anteriores en verde. Empieza por el caso perfecto simplemente devolviendo true y luego vas viendo cuando debe dar false o piensa algo así no se..

'1_Hola' -> true
'1_Hol' -> false
'1_hola' -> false
'1hol' -> false
'1' -> false
'' -> false

Haz que siempre tenga 6 caracteres o mas

 */

export function passwordValidator(password: string): boolean {
  if (password.length >= 6 && password.toLowerCase() !== password && password.toUpperCase() !== password) return true;
  return false;
}
