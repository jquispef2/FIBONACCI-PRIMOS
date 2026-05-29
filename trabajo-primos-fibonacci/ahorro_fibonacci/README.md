# 🌱 Semilla de Ahorro · Fibonacci

> Página web interactiva que aplica la sucesión de Fibonacci a un plan de ahorro progresivo.

---

## ¿Qué hace esta página?

Permite al usuario ingresar cuántos meses desea ahorrar y un multiplicador base (en Bolivianos). La página calcula cuánto depositar cada mes siguiendo la sucesión de Fibonacci, cuánto se acumula mes a mes y lo muestra en una tabla y un gráfico de barras.

**Ejemplo con multiplicador Bs. 5 y 10 meses:**

| Mes | Depósito (Bs.) | Acumulado (Bs.) |
|-----|---------------|----------------|
| 1   | 5.00          | 5.00           |
| 2   | 5.00          | 10.00          |
| 3   | 10.00         | 20.00          |
| 4   | 15.00         | 35.00          |
| 5   | 25.00         | 60.00          |
| ... | ...           | ...            |

---

## ¿Qué es la sucesión de Fibonacci?

Es una secuencia donde cada número es la suma de los dos anteriores:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
```

En la naturaleza aparece en caracoles, flores de girasol, piñas y árboles. Aplicada al ahorro, permite un crecimiento gradual y natural de los depósitos.

---

## Cómo usar la página

1. Abre `index.html` en tu navegador (o visita el enlace publicado).
2. Ingresa la **cantidad de meses** que quieres ahorrar (entre 2 y 30).
3. Ingresa el **multiplicador base** en Bolivianos (Ej: `5` significa que el mes 1 ahorras Bs. 5, el mes 3 ahorras Bs. 10, etc.).
4. Presiona **"Calcular mi plan"**.
5. Observa la tabla de resultados, el resumen y el gráfico de barras.

---

## Estructura del proyecto

```
fibonacci/
│
├── index.html          ← Estructura de la página (HTML)
├── css/
│   └── estilos.css     ← Diseño visual y responsividad
├── js/
│   └── script.js       ← Lógica Fibonacci y manejo de formulario
└── README.md           ← Este archivo
```

---

## Tecnologías usadas

| Tecnología | Uso |
|-----------|-----|
| HTML5 | Estructura semántica de la página |
| CSS3 | Diseño visual, animaciones, diseño responsivo |
| JavaScript (Vanilla) | Algoritmo Fibonacci, manejo del DOM con `getElementById` |

---

## Restricciones cumplidas

- ✅ Toda interacción con HTML usa `document.getElementById()`
- ✅ El usuario ingresa datos mediante formularios
- ✅ Los resultados se muestran en la página (no en consola)
- ✅ Diseño responsivo para celular, tablet y computadora
- ✅ Código propio, organizado y comentado

---

## Algoritmo central (sin arrays)

```javascript
let a = 1, b = 1, c;

for (let i = 3; i <= meses; i++) {
  c = a + b;   // siguiente Fibonacci
  a = b;
  b = c;
}
```

---

## Desafío Web 2026

- **Tema:** Fibonacci aplicado al ahorro progresivo
- **Tecnologías:** HTML + CSS + JavaScript
- **Problema real:** Plan de ahorro mensual con depósitos que crecen siguiendo la naturaleza
