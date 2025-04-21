/*
'' -> false
'J_hj2'
'123456' -> false
'HHHIII' -> false
'hhhiii' -> false
'______' -> false
'123HHii _'
 */

export function passwordValidator(password: string): boolean {
  return password !== '';
}
