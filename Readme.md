# Template TypeScript
## Diseño Sostenible - Ingeniería y Artesanía del Software con TypeScript
![Diseño Sostenible](coverds.png)

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `nvm use`
* `npm install`
* `npm test`

Más información sobre el curso en [diseñosostenible.com](https://diseñosostenible.com).

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test


## Requisitos de la kata

Programar una funcion booleana que indique si una contraseña dada cumple con los siguientes requisitos de fortaleza:

* Tener una longitud de al menos seis caracteres
* Contener algun numero
* Contener alguna letra mayuscula
* Contener alguna letra minuscula
* Contener algun guion bajo
