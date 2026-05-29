
function esPrimo(n) {
  n = parseInt(n);
  if (isNaN(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function factoresPrimos(n) {
  const factores = [];
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      factores.push(d);
      n = Math.floor(n / d);
    }
    d++;
    if (d * d > n && n > 1) {
      factores.push(n);
      break;
    }
  }
  return factores;
}

function inversoModular(a, m) {
  // Algoritmo extendido de Euclides
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return -1; 
}

const modos = {
  shift: {
    cifrar: (charCode, clave) => charCode + clave,
    descifrar: (charCode, clave) => charCode - clave,
    nombre: 'Prime-Shift (desplazamiento ASCII)'
  },
  mult: {
    cifrar: (charCode, clave) => (charCode * clave) % 256,
    descifrar: (charCode, clave) => {
      const inv = inversoModular(clave, 256);
      if (inv === -1) return charCode; 
      return (charCode * inv) % 256;
    },
    nombre: 'Prime-Mult (multiplicación modular)'
  },
  xor: {
    cifrar: (charCode, clave) => charCode ^ clave,
    descifrar: (charCode, clave) => charCode ^ clave, 
    nombre: 'Prime-XOR (operación XOR)'
  }
};

function procesarTexto(texto, clave, modo, operacion) {
  const resultado = [];
  const fn = operacion === 'cifrar' ? modos[modo].cifrar : modos[modo].descifrar;

  for (let i = 0; i < texto.length; i++) {
    const codigo = texto.charCodeAt(i);
    const nuevoCodigo = fn(codigo, clave);
    resultado.push(String.fromCharCode(Math.abs(nuevoCodigo)));
  }
  return resultado.join('');
}

function cifrar() {
  const mensaje = document.getElementById('mensajeCifrar').value;
  const claveStr = document.getElementById('claveCifrar').value;
  const modo = document.getElementById('modoCifrar').value;
  const resultDiv = document.getElementById('resultadoCifrado');
  const metaDiv = document.getElementById('metaCifrado');

  if (!mensaje.trim()) {
    mostrarError(resultDiv, '⚠ Ingresa un mensaje para cifrar.');
    return;
  }

  const clave = parseInt(claveStr);
  if (isNaN(clave) || clave < 2) {
    mostrarError(resultDiv, '⚠ Ingresa un número válido como clave (mínimo 2).');
    return;
  }

  if (!esPrimo(clave)) {
    mostrarAdvertencia(resultDiv, `⚠ El número ${clave} no es primo. Se recomienda usar una clave prima para mayor seguridad. Igualmente se cifrará el mensaje.`);
  }

  const textoCifrado = procesarTexto(mensaje, clave, modo, 'cifrar');

  resultDiv.innerHTML = textoCifrado;
  resultDiv.classList.add('active');
  resultDiv.classList.remove('deciphered');

  metaDiv.innerHTML = `
    ▸ Modo: ${modos[modo].nombre}<br/>
    ▸ Clave: ${clave} ${esPrimo(clave) ? '✓ (número primo)' : '✗ (no es primo)'}<br/>
    ▸ Caracteres procesados: ${mensaje.length}<br/>
    ▸ Longitud del resultado: ${textoCifrado.length}
  `;
}

function descifrar() {
  const mensaje = document.getElementById('mensajeDescifrar').value;
  const claveStr = document.getElementById('claveDescifrar').value;
  const modo = document.getElementById('modoDescifrar').value;
  const resultDiv = document.getElementById('resultadoDescifrado');
  const metaDiv = document.getElementById('metaDescifrado');

  if (!mensaje.trim()) {
    mostrarError(resultDiv, '⚠ Ingresa el mensaje cifrado.');
    return;
  }

  const clave = parseInt(claveStr);
  if (isNaN(clave) || clave < 2) {
    mostrarError(resultDiv, '⚠ Ingresa la clave numérica usada al cifrar.');
    return;
  }

  if (modo === 'mult') {
    const inv = inversoModular(clave, 256);
    if (inv === -1) {
      mostrarError(resultDiv, `⚠ El número ${clave} no tiene inverso modular en base 256. No se puede descifrar en modo Prime-Mult con esta clave.`);
      return;
    }
  }

  const textoDescifrado = procesarTexto(mensaje, clave, modo, 'descifrar');

  resultDiv.innerHTML = textoDescifrado;
  resultDiv.classList.add('active', 'deciphered');

  metaDiv.innerHTML = `
    ▸ Modo: ${modos[modo].nombre}<br/>
    ▸ Clave aplicada: ${clave}<br/>
    ▸ Caracteres procesados: ${mensaje.length}
  `;
}

function verificarPrimo() {
  const num = parseInt(document.getElementById('numVerificar').value);
  const resultDiv = document.getElementById('resultadoVerificador');
  const factoresDiv = document.getElementById('factoresVerificador');

  if (isNaN(num) || num < 2) {
    resultDiv.textContent = '⚠ Ingresa un número mayor o igual a 2';
    resultDiv.className = 'verificador-result';
    factoresDiv.textContent = '';
    return;
  }

  if (esPrimo(num)) {
    resultDiv.textContent = `✓ ${num} ES un número primo`;
    resultDiv.className = 'verificador-result primo';
    factoresDiv.textContent = `Ideal como clave de cifrado · Solo divisible entre 1 y ${num}`;
  } else {
    const factores = factoresPrimos(num);
    resultDiv.textContent = `✗ ${num} NO es un número primo`;
    resultDiv.className = 'verificador-result no-primo';
    factoresDiv.textContent = `Factores primos: ${factores.join(' × ')} = ${num}`;
  }
}

function copiarResultado(elementId) {
  const el = document.getElementById(elementId);
  const texto = el.textContent || el.innerText;
  if (!texto.trim() || texto.includes('aparecerá aquí')) return;

  navigator.clipboard.writeText(texto).then(() => {
    const btn = event.target.closest('button');
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Copiado';
    setTimeout(() => { btn.innerHTML = original; }, 1500);
  });
}

function mostrarError(div, msg) {
  div.innerHTML = `<span style="color:var(--accent-2)">${msg}</span>`;
  div.classList.remove('active', 'deciphered');
}

function mostrarAdvertencia(div, msg) {
  div.innerHTML = `<span style="color:var(--accent-3)">${msg}</span>`;
}

function configurarValidacionClave(inputId, badgeId) {
  const input = document.getElementById(inputId);
  const badge = document.getElementById(badgeId);

  input.addEventListener('input', () => {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 2) {
      badge.textContent = '—';
      badge.className = 'prime-badge';
      return;
    }
    if (esPrimo(val)) {
      badge.textContent = '✓ primo';
      badge.className = 'prime-badge is-prime';
    } else {
      badge.textContent = '✗ no primo';
      badge.className = 'prime-badge not-prime';
    }
  });
}

document.getElementById('modoCifrar').addEventListener('change', function() {
  document.getElementById('modoDescifrar').value = this.value;
});

function generarGrillaPrimos() {
  const grid = document.getElementById('primeGrid');
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('prime-cell');

    if (esPrimo(i)) {
      cell.classList.add('is-prime');
      cell.textContent = i;
      cell.title = `${i} es primo`;
      count++;
    } else {
      cell.classList.add('not-prime');
      cell.textContent = i;
    }

    cell.style.animationDelay = `${i * 0.015}s`;
    cell.style.animation = 'fadeInCell 0.3s ease both';
    cell.style.animationDelay = `${(i * 0.02) + 0.5}s`;

    grid.appendChild(cell);
  }

  return count;
}

function animarContador() {
  const primos = [];
  for (let i = 2; i < 1000; i++) {
    if (esPrimo(i)) primos.push(i);
  }

  const span = document.getElementById('stat-count');
  const target = primos.length; // 168
  let current = 0;
  const step = Math.ceil(target / 60);

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    span.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 30);
}

function iniciarParticulas() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particulas = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.4 + 0.1,
    num: esPrimo(Math.floor(Math.random() * 200) + 2)
      ? Math.floor(Math.random() * 200) + 2
      : 2
  }));

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulas.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = '#00e5ff';
      ctx.font = `${p.size * 6}px 'Share Tech Mono'`;
      ctx.fillText(p.num, p.x, p.y);
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.y < -20) p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;
    });

    requestAnimationFrame(dibujar);
  }

  dibujar();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

document.getElementById('numVerificar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') verificarPrimo();
});

const estilo = document.createElement('style');
estilo.textContent = `
  @keyframes fadeInCell {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(estilo);

window.addEventListener('DOMContentLoaded', () => {
  generarGrillaPrimos();
  animarContador();
  iniciarParticulas();
  configurarValidacionClave('claveCifrar', 'badgeCifrar');
  configurarValidacionClave('claveDescifrar', 'badgeDescifrar');
});