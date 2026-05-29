
/**
 * @param {number} n  El número a verificar
 * @returns {boolean} true si es primo, false si no lo es
 */
function esPrimo(n) {
  if (n < 2) return false;

  let contador = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      contador++;
    }
  }

  return contador === 2;
}

/**
 * @param {number} n
 * @returns {string} ej: "1, 5, 25"
 */
function obtenerDivisores(n) {
  const divisores = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisores.push(i);
    }
  }

  if (divisores.length > 6) {
    return divisores.slice(0, 5).join(', ') + '…';
  }
  return divisores.join(', ');
}

/**
 * @param {number} n - Cantidad de términos
 * @returns {number[]} Array con los términos de Fibonacci
 */
function generarFibonacci(n) {
  const serie = [];

  let a = 0;  
  let b = 1;  
  let c;      

  for (let i = 0; i < n; i++) {
    serie.push(a);
    c = a + b; 
    a = b;
    b = c;
  }

  return serie;
}

/**
 */
function calcular() {
  const input     = document.getElementById('cantidad');
  const cantidad  = parseInt(input.value);

  if (isNaN(cantidad) || cantidad < 2 || cantidad > 50) {
    input.style.borderColor = '#f06070';
    input.style.boxShadow   = '0 0 0 3px rgba(240,96,112,0.2)';
    input.focus();
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.boxShadow   = '';
    }, 1500);
    return;
  }

  const serie = generarFibonacci(cantidad);

  const primosFibonacci = serie.filter(n => esPrimo(n));

  const resultadoEl = document.getElementById('resultado');
  resultadoEl.classList.remove('hidden');

  const statsEl = document.getElementById('stats');
  statsEl.innerHTML = `
    <div class="stat-chip gold-stat">
      <span class="stat-val">${cantidad}</span>
      <span class="stat-lbl">Términos generados</span>
    </div>
    <div class="stat-chip teal-stat">
      <span class="stat-val">${primosFibonacci.length}</span>
      <span class="stat-lbl">Fibonacci Primos</span>
    </div>
    <div class="stat-chip rose-stat">
      <span class="stat-val">${serie[serie.length - 1].toLocaleString()}</span>
      <span class="stat-lbl">Último término</span>
    </div>
  `;

  const secuenciaEl = document.getElementById('secuencia');
  secuenciaEl.innerHTML = '';

  serie.forEach((num, i) => {
    const chip = document.createElement('div');
    chip.className = 'seq-chip' + (esPrimo(num) ? ' is-prime' : '');
    chip.title     = esPrimo(num) ? `F(${i}) = ${num} ← ¡Primo!` : `F(${i}) = ${num}`;
    chip.textContent = num.toLocaleString();
    // Retraso escalonado para animación
    chip.style.animationDelay = (i * 0.04) + 's';
    secuenciaEl.appendChild(chip);
  });

  const listaPrimosEl = document.getElementById('listaPrimos');
  listaPrimosEl.innerHTML = '';

  if (primosFibonacci.length === 0) {
    listaPrimosEl.innerHTML = '<span style="color: var(--muted); font-size:14px">No se encontraron Fibonacci Primos en este rango.</span>';
  } else {
    primosFibonacci.forEach(num => {
      const tag = document.createElement('span');
      tag.className   = 'prime-tag';
      tag.textContent = num.toLocaleString();
      listaPrimosEl.appendChild(tag);
    });
  }

  const cuerpoEl = document.getElementById('cuerpoTabla');
  cuerpoEl.innerHTML = '';

  serie.forEach((num, i) => {
    const primo = esPrimo(num);
    const fila  = document.createElement('tr');
    if (primo) fila.className = 'primo-row';

    fila.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${num.toLocaleString()}</strong></td>
      <td>
        ${primo
          ? '<span class="badge-si">✦ Sí</span>'
          : '<span class="badge-no">No</span>'
        }
      </td>
      <td>${num === 0 ? '∞' : obtenerDivisores(num)}</td>
    `;

    cuerpoEl.appendChild(fila);
  });

  setTimeout(() => {
    resultadoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

document.getElementById('cantidad').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') calcular();
});