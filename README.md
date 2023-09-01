# Mis pruebas técnicas

Durante mi búsqueda laboral he tenido la fortuna de tener una variedad de pruebas de código bastante buenas.

Por lo que quiero compartir en este repositorio los problemas que tuve que enfrentarme en algunas de mis entrevistas con una ligera variación.
Con el fin de respetar los problemas originales, pero usando los mismos conceptos técnicos para resolver un problema de dificultad similar.

> Espero y se diviertan con estos ejercicios para estar un poco más preparados para cualquier entrevista técnica. - Axel Olea

___

## Pruebas

| Nombre                  | Tema           | Lenguajes                       | Dificultad | Tiempo |
|-------------------------|----------------|---------------------------------|------------|--------|
| [La moneda][1]          | Logic          | ![Java][java] ![JavaScript][js] | Muy Fácil  | 10min  |
| [Cuentas][2]            | Logic          | ![Java][java] ![JavaScript][js] | Fácil      | 15min  |
| [Suma y Producto][3]    | Logic          | ![Java][java] ![JavaScript][js] | Fácil      | 15min  |
| [Lista de Afiliados][4] | Debugger       | ![JavaScript][js]               | Intermedio | 20min  |
| [Inventario][5]         | Data Structure | ![Java][java]                   | Difícil    | 30min  |

___

## Run Testing

Antes que nada para correr algún test que les ayudara a saber si su código responde como se espera en cada ejercicio, 
deben de instalar algunos recursos.

Para ejercicios de JS instalar:
- NodeJs v18+
- NPM

Para ejercicios de Java instalar:
- JDK 1.8 (Java 8)
- JUnit (Configurar en IDE)

___

### Para correr test en NodeJs, usar el comando

```shell
npm run test
```
Nota:
Ejecutarlo dentro del directorio de ```/js``` del ejercicio

#### Deberías ver algo asi.

![](https://live.staticflickr.com/65535/53156466731_097fb8c000_h.jpg "Node Test")

Donde se ve todos los test fallidos que tuvo tu solución, y los test que paso.

![](https://live.staticflickr.com/65535/53156471666_cd4100ac1f_m.jpg)

En cambio, si quieres ver tu resultado un poco más _sencillo_, escribe el siguiente comando.

```shell
npm run test-min
```

#### Verás algo asi.

![](https://live.staticflickr.com/65535/53156476491_960e0f0dbd_z.jpg)

Donde los puntos ```.``` son los test que pasaste, y en equis ```X``` los que no pasaron.

___

### Para correr test en Java, usar el comando

```shell
java ProblemTest
```
Ejecutarlo dentro del directorio de ```/java``` del ejercicio

[java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E

[1]: https://github.com/axelolea/pruebas-tecnicas-jr/blob/main/la-moneda/info.md
[2]: https://github.com/axelolea/pruebas-tecnicas-jr/blob/main/cuentas/info.md
[3]: https://github.com/axelolea/pruebas-tecnicas-jr/blob/main/suma-y-producto/info.md
[4]: https://github.com/axelolea/pruebas-tecnicas-jr/blob/main/lista-afiliados/info.md
[5]: https://github.com/axelolea/pruebas-tecnicas-jr/blob/main/inventario/info.md