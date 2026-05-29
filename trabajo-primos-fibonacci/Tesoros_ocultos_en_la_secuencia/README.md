# PrimoFib — Tesoros Ocultos en la Secuencia de Fibonacci

Proyecto web interactivo que encuentra los números primos dentro de la serie de Fibonacci.

---

## Estructura del proyecto

```
Tesoros_ocultos_en_la_sec.../
├── CSS/
│   └── styles1.css
├── HTML/
│   └── index1.html
└── JS/
    └── script1.js
```

---

## Archivos

### `HTML/index1.html`
Página principal del proyecto. Contiene la estructura de todas las secciones:
- Hero con título y descripción del proyecto
- Sección de contexto (Fibonacci, Primos y su intersección)
- Sección de algoritmo con visualización de código
- Herramienta interactiva para encontrar Fibonacci Primos
- Conclusión
- Footer con enlace al repositorio y página principal

### `CSS/styles1.css`
Estilos del proyecto con temática clara/elegante. Define:
- Variables CSS globales (colores, fuentes, espaciados)
- Fondo decorativo con espiral y líneas de grilla
- Componentes: hero, cards de contexto, bloque de código, formulario, tabla de resultados
- Animaciones de entrada para los chips de la secuencia
- Diseño responsive (mobile/tablet)

### `JS/script1.js`
Lógica del proyecto. Incluye:
- `esPrimo(n)` — verifica si un número es primo contando sus divisores
- `obtenerDivisores(n)` — retorna los divisores de un número como string
- `generarFibonacci(n)` — genera los primeros `n` términos de la serie
- `calcular()` — función principal que orquesta el análisis y actualiza el DOM con:
  - Estadísticas (términos generados, Fibonacci Primos encontrados, último término)
  - Grilla visual de la secuencia con primos destacados
  - Lista de Fibonacci Primos encontrados
  - Tabla detallada con índice, valor, estado primo y divisores

---

## Algoritmo

| Paso | Acción |
|------|--------|
| 01 | Generar la serie con `c = a + b`, `a = b`, `b = c` |
| 02 | Verificar cada término: si tiene exactamente 2 divisores → es primo |
| 03 | Filtrar y mostrar solo los que cumplen ambas condiciones |

---

## Tecnologías

- HTML5, CSS3, JavaScript (Vanilla)
- Google Fonts: `DM Serif Display`, `DM Mono`, `DM Sans`

---

## Autor

PrimoFib · Desafío Web 2026 · Matemáticas aplicadas a la naturaleza y la criptografía
