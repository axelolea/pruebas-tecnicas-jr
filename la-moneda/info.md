# La moneda

Dos amigos están jugando a lanzar una moneda y quieren saber cuantas veces cae cara o cruz. **Casualmente**, uno de 
ellos es programador, por lo que guardan los resultados en un Array de caracteres, representados con las letras "o" 
para cara y "x" para cruz.

Como en los siguientes ejemplos:

![Java][java]
```java
char[] arr = {'x', 'o', 'o', 'x'};
```
![JavaScript][js]
```js
const array = ["x", "o", "o", "x"];
```

## Objetivo

Debes de crear una función, que reciba como parámetro este array, y del lado de la moneda que más veces aparece en 
el array, devolver la cantidad de veces que está presente en el array.

## Templates

![Java][java]
```java
public class Solution {
    public int solution (char[] arr) {
        // Insert your code here
        return 0;
    }
}
```
![JavaScript][js]
```js
function solution (arr) {
    // Insert your code here
    return;
}
```

### Recomendaciones
- Evitar usar variables mágicas.
- Evitar mutar el array.
- Correr los test para saber si su solución esta completa.

### Puntos a favor
- [ ] Uso de programación funcional (Array Functions en java o Stream API en Java)
- [ ] Realizar comentarios del porqué están haciendo cada operación en su función.

[java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E