# PrimeCipher — Codificación mediante Números Primos

Proyecto web interactivo que demuestra el uso de números primos en criptografía digital.

---

## Estructura del proyecto

```
Codificación_mediante_nu.../
├── CSS/
│   └── styles3.css
├── HTML/
│   └── index3.html
└── JS/
    └── script3.js
```

---

## Archivos

### `HTML/index3.html`
Página principal del proyecto. Contiene la estructura de todas las secciones:
- Hero con grilla visual de números primos
- Sección de contexto (RSA, HTTPS, códigos de acceso)
- Cifrador Prime-Shift
- Descifrador Prime-Shift
- Verificador de clave prima
- Sección de algoritmos
- Conclusión

### `CSS/styles3.css`
Estilos del proyecto con temática oscura/neón. Define:
- Variables CSS globales (colores, fuentes, radios)
- Fondo animado con grilla y partículas
- Componentes: header, hero, cards, panels, botones, inputs
- Animaciones y efectos de brillo
- Diseño responsive (mobile/tablet)

### `JS/script3.js`
Lógica del proyecto. Incluye:
- `esPrimo(n)` — verifica si un número es primo
- `factoresPrimos(n)` — descompone en factores primos
- `inversoModular(a, m)` — algoritmo extendido de Euclides
- Modos de cifrado: `shift`, `mult`, `xor`
- `cifrar()` / `descifrar()` — procesamiento de mensajes
- `verificarPrimo()` — verificador interactivo
- `generarGrillaPrimos()` — grilla visual 10×10
- `animarContador()` — contador animado de primos < 1000
- `iniciarParticulas()` — animación de fondo con canvas

---

## Modos de cifrado

| Modo | Cifrado | Descifrado |
|------|---------|------------|
| Prime-Shift | `charCode + clave` | `charCode - clave` |
| Prime-Mult | `(charCode × clave) % 256` | `(cifrado × inverso) % 256` |
| Prime-XOR | `charCode XOR clave` | `cifrado XOR clave` |

---

## Tecnologías

- HTML5, CSS3, JavaScript (Vanilla)
- Google Fonts: `Orbitron`, `Share Tech Mono`, `Exo 2`
- Canvas API (partículas animadas)

---

## Autor

PrimeCipher · Desafío Web 2026 · Matemáticas aplicadas a la seguridad digital
