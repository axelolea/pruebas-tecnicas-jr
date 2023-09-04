# Lista de afiliados

En una aplicación de un supermercado que tú estás liderando, uno de los becarios estaba trabajando en la función de listado de afiliados.

Cuando de repente te comenta que ya no funciona el código al ejecutar los test, por lo que tu tarea es depurar y 
saber por qué la función da error.

## Detalles de la función

La función recibe un arreglo, como en el siguiente ejemplo:

![JavaScript][js]
```js
const arr = [
    '{"name": "Jonh Doe", "affiliate": true, "expired": "2023-10-01"}',
    '{"name": "Karl Thomson", "affiliate": false, "expired": "2022-01-01"}',
    '{"name": "Jessica Lee", "affiliate": true}',
    '{"name": "Margaret Hamilton", "affiliate": true, "expired": "2023-12-21"}'
];
```

Y la función debería de devolver un string, con el nombre de los clientes que están afiliados y aun esta presenta la 
fecha de expiración. Un ejemplo de la salida que debe devolver es igual a esta:

![JavaScript][js]
```js
const result = "Jonh Doe, Margaret Hamilton";
```

## Templates


![JavaScript][js]
```js
function solution (args) {
    // Insert your code here
    return;
}
```

### Recomendación
- Hacer la menor cantidad de modificaciones al código
- Analizar con detalle el código, antes de ejecutar test

### Puntos a favor
- [ ] No usar console.log ÒwÓ (Estás realizando una depuración, usar las herramientas de debugging)
- [ ] Comentar el código, las razones por las que fallo o que se puede mejorar.


[java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E