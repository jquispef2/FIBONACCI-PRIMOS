# 🌐 Desafío Web 2026 — Fibonacci y Números Primos

> Tres aplicaciones web interactivas que aplican conceptos matemáticos clásicos
> a problemas del mundo real, desarrolladas con HTML, CSS y JavaScript puro.

---

## 📋 Descripción General

Este proyecto fue desarrollado como parte del **Desafío Web 2026**, cuyo objetivo es demostrar
cómo la **serie de Fibonacci** y los **números primos** no son solo conceptos teóricos, sino
herramientas matemáticas con aplicaciones concretas en la vida cotidiana: desde la seguridad
informática hasta la planificación financiera personal.

El proyecto está compuesto por **una página principal** que enlaza a **tres aplicaciones
independientes**, cada una enfocada en una aplicación distinta de estas matemáticas.

---

## 🗂️ Estructura del Proyecto

```
primos-fibonacci/
│
├── PAGINA_PRINCIPAL/
│   ├── HTML/
│   │   └── index.html              ← Página de entrada / menú principal
│   └── CSS/
│       └── styles.css               ← Estilos de la página principal
│
├── Codificación_mediante_nu.../     ← Proyecto 1: Números Primos
│   ├── HTML/
│   │   └── index3.html
│   ├── CSS/
│   │   └── styles3.css
│   └── JS/
│       └── script3.js
│
├── Tesoros_ocultos_en_la_sec.../    ← Proyecto 2: Fibonacci
│   ├── HTML/
│   │   └── index1.html
│   ├── CSS/
│   │   └── styles1.css
│   └── JS/
│       └── script1.js
│
└── ahorro_fibonacci/                ← Proyecto 3: Fibonacci + Primos
    ├── HTML/
    │   └── index2.html
    ├── CSS/
    │   └── styles2.css
    └── JS/
        └── script2.js
```

---

## 🚀 Proyectos

---

### 🔐 Proyecto 1 — Codificación mediante Números Primos

**Carpeta:** `Codificación_mediante_nu.../`

#### ¿Qué hace?

Permite al usuario **codificar un mensaje de texto** utilizando números primos como base
del cifrado. Cada letra del mensaje es convertida a su valor numérico (posición en el
alfabeto) y luego transformada mediante operaciones con números primos consecutivos,
generando un código numérico único y difícil de descifrar sin conocer la clave.

También incluye la función inversa: **decodificar** un mensaje cifrado para recuperar
el texto original.

#### ¿Por qué los números primos?

Los números primos son fundamentales en la criptografía moderna. Su propiedad principal
(solo divisibles entre 1 y sí mismos) los hace impredecibles y difíciles de factorizar,
lo que los convierte en la base de algoritmos como **RSA**, el estándar de seguridad
utilizado en bancos, correos y transacciones en línea.

Esta aplicación es una versión simplificada y educativa de ese principio.

#### ¿Cómo se usa?

1. Ingresa un texto en el campo de entrada.
2. Presiona **"Codificar"** para obtener la versión cifrada en números primos.
3. Presiona **"Decodificar"** para recuperar el mensaje original desde el código.
4. El resultado se muestra directamente en la página, nunca en consola.

#### Algoritmo utilizado

- Se genera una lista de números primos (2, 3, 5, 7, 11, 13...) con el **criba de Eratóstenes**.
- Cada carácter se asocia a un primo según su posición en el alfabeto.
- El código resultante es la secuencia de primos correspondientes al mensaje.

---

### 🌿 Proyecto 2 — Tesoros Ocultos en la Secuencia

**Carpeta:** `Tesoros_ocultos_en_la_sec.../`

#### ¿Qué hace?

Es un **buscador de tesoros matemáticos** dentro de la serie de Fibonacci. El usuario
ingresa cuántos términos desea explorar y la aplicación genera la secuencia completa,
identificando y resaltando visualmente los **números de Fibonacci que también son primos**
(llamados **primos de Fibonacci** o **primos de Fibonacci-Mersenne**).

Estos números son extremadamente raros y valiosos matemáticamente, de ahí el nombre
"tesoros ocultos".

#### ¿Por qué es relevante?

La serie de Fibonacci aparece en la naturaleza de formas sorprendentes: en la espiral
de las conchas marinas, en la disposición de los pétalos de las flores, en las ramas de
los árboles y en las escamas de los piñones. Cuando dentro de esa secuencia aparece un
número que además es primo, estamos ante una coincidencia matemática extraordinaria.

#### ¿Cómo se usa?

1. Ingresa la cantidad de términos de la secuencia que deseas generar.
2. Presiona **"Buscar Tesoros"**.
3. La página muestra toda la secuencia con los términos normales y los **tesoros** (primos)
   resaltados en un color especial.
4. Se muestra un contador con cuántos tesoros fueron encontrados.

#### Algoritmo utilizado

- **Serie de Fibonacci** generada con variables simples (`a`, `b`, `c`) sin usar arreglos.
- **Verificación de primo** por divisibilidad: se cuenta cuántos divisores tiene el número;
  si exactamente 2 (1 y él mismo), es primo.
- Combinación de ambos algoritmos para identificar los números que cumplen ambas condiciones.

---

### 💰 Proyecto 3 — Ahorro Fibonacci (Caja de Ahorro)

**Carpeta:** `ahorro_fibonacci/`

#### ¿Qué hace?

Simula una **caja de ahorro personal** donde los depósitos mensuales siguen la progresión
de la serie de Fibonacci. En lugar de ahorrar una cantidad fija cada mes, el ahorrante
incrementa su depósito siguiendo el patrón natural de la secuencia: 1, 1, 2, 3, 5, 8,
13, 21... (en bolivianos o cualquier moneda).

Además, la aplicación detecta y resalta los meses cuyo monto de depósito es un
**número primo**, marcándolos como "meses especiales" dentro del plan de ahorro.

#### ¿Por qué es útil?

El ahorro progresivo es una estrategia financiera real. Empezar con montos pequeños y
aumentar gradualmente (en lugar de exigirse una cantidad fija elevada) hace el hábito
más sostenible. La serie de Fibonacci ofrece un crecimiento natural y moderado al
principio, que se acelera con el tiempo, imitando el crecimiento orgánico.

#### ¿Cómo se usa?

1. Ingresa la cantidad de meses que deseas planificar.
2. (Opcional) Ingresa el monto base inicial del ahorro.
3. Presiona **"Calcular Plan de Ahorro"**.
4. La página muestra una tabla mes a mes con:
   - El depósito de ese mes (siguiendo Fibonacci).
   - El ahorro acumulado total.
   - Una marca especial si el depósito del mes es un número primo.
5. Al final se muestra el **total ahorrado** al término del período.

#### Ejemplo de resultado (6 meses, base Bs. 1):

| Mes | Depósito | Acumulado |
|-----|----------|-----------|
| 1   | Bs. 1    | Bs. 1     |
| 2   | Bs. 1    | Bs. 2     |
| 3   | Bs. 2    | Bs. 4     |
| 4   | Bs. 3    | Bs. 7     |
| 5   | Bs. 5    | Bs. 12    |
| 6   | Bs. 8    | Bs. 20    |

---

## 🛠️ Tecnologías Utilizadas

| Tecnología     | Uso en el proyecto                                          |
|----------------|-------------------------------------------------------------|
| **HTML5**      | Estructura semántica de todas las páginas                   |
| **CSS3**       | Diseño visual, diseño responsivo, animaciones               |
| **JavaScript** | Algoritmos de Fibonacci, primos, formularios, DOM           |
| **Git**        | Control de versiones del proyecto                           |
| **GitHub**     | Repositorio remoto                                          |
| **GitHub Pages / Netlify / Vercel** | Publicación en línea              |

---

## ✅ Cumplimiento de Requisitos del Desafío

| Requisito                          | Estado |
|------------------------------------|--------|
| Usa `document.getElementById()`   | ✅     |
| Ingreso de datos por formularios  | ✅     |
| Resultados mostrados en la página | ✅     |
| Diseño responsivo                 | ✅     |
| Código organizado (HTML/CSS/JS)   | ✅     |
| Repositorio Git                   | ✅     |
| Página publicada en la web        | ✅     |
| Explica el problema real          | ✅     |
| Explica el algoritmo              | ✅     |

---

## 🧮 Algoritmos Implementados

### Serie de Fibonacci (sin arreglos)
```javascript
let a = 0, b = 1, c;
for (let i = 0; i < n; i++) {
  c = a + b;
  a = b;
  b = c;
}
```

### Verificación de Número Primo
```javascript
let numero = parseInt(document.getElementById("numero").value);
let contador = 0;
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) contador++;
}
if (contador === 2) {
  document.getElementById("resultado").innerHTML = "Es primo ✅";
} else {
  document.getElementById("resultado").innerHTML = "No es primo ❌";
}
```

---

## 🔗 Enlaces

- 📁 **Repositorio GitHub:** https://github.com/jquispef2/FIBONACCI-PRIMOS
- 🌐 **Página publicada:** https://jquispef2.github.io/FIBONACCI-PRIMOS/trabajo-primos-fibonacci/PAGINA_PRINCIPAL/HTML/index.html

---

## 👤 Autor

Johann Edibert Quispe Flores
Desafío Web 2026 — Matemáticas aplicadas al mundo real

---

## 📜 Licencia

Proyecto educativo desarrollado para el Desafío Web 2026.  
Libre para uso académico con atribución al autor.
