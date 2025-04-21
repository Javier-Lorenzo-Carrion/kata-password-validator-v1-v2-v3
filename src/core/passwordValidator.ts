/*

El problema es que si voy paso a paso no me van a pasar los anteriores en verde. Empieza por el caso perfecto simplemente devolviendo true y luego vas viendo cuando debe dar false o piensa algo así no se..

'1_Hola' -> true
'1_Hol' -> false
'1_hol' -> false
'1hol' -> false
'1' -> false
'' -> false

Descarta estos em este orden cuando veas que te sale

'' -> false
'J_hj2'
'123456' -> false
'HHHIII' -> false
'hhhiii' -> false
'______' -> false
'123HHii _'
 */

export function passwordValidator(password: string): boolean {
  return true;
}
