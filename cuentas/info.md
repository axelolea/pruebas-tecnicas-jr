# Las cuentas

Tu tarea es crear una secuencia de numero y sumarla.

Secuencia: ``` [1, 2, 3, .... n]```

Iniciando desde 1 hasta ```n```. Donde ```n``` es el número máximo de tu secuencia. Una vez generada esta secuencia, 
deberás de realizar la sumatoria de esta.

Pero antes de ello, deberás de hacer unas modificaciones a esta secuencia antes de hacer la suma de la misma.

- Si el numero en la secuencia es múltiplo de 3, convertir el numero a un 1.

- Si el numero en la secuencia es múltiplo de 5, convertir el numero a un 2.
- Si el número es múltiplo de los dos número anteriores, convertir el número en un 0.

## Ejemplo

Esto es un ejemplo de una secuencia cuando ```n``` vale 15.

![Java][java]
```java
int[] arr = {1, 2, 1, 4, 2, 1, 7, 8, 1, 2, 11, 1, 13, 14, 0};
```

![JavaScript][js]
```js
const arr = [1, 2, 1, 4, 2, 1, 7, 8, 1, 2, 11, 1, 13, 14, 0];
```

Y para ambos casos, el valor que debe devolver es: ```68```

## Templates

![Java][java]
```java
public class Solution {
    public int solution (int value) {
        // Insert your code here
        return 0;
    }
}
```
![JavaScript][js]
```js
function solution (value) {
    // Insert your code here
    return 0;
}
```

### Recomendación
- Se valora los comentarios y como se plantea el problema.

[java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E