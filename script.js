// --- Código que ya tenías ---
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Esta función abre y cierra el menú con el botón de hamburguesa
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// --- ✨ NUEVO CÓDIGO AÑADIDO ✨ ---

// 1. Seleccionamos todos los enlaces que están dentro del menú
const menuLinks = document.querySelectorAll('#menu a');

// 2. Recorremos cada uno de los enlaces para agregarles una función
menuLinks.forEach(link => {

  // 3. Añadimos un "escuchador" de eventos para el clic
  link.addEventListener('click', () => {

    // 4. Cuando se hace clic en un enlace, eliminamos la clase 'active' del menú para que se oculte
    menu.classList.remove('active');
  });
});


// --- ✨ LÓGICA DEL INTERRUPTOR DE TEMA (LIGHT/DARK) ✨ ---

// 1. Seleccionar el botón y el body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Función para aplicar el tema guardado
const aplicarTemaGuardado = () => {
    const temaGuardado = localStorage.getItem('theme');
    // Si hay un tema guardado y es 'light', aplica la clase y actualiza el botón
    if (temaGuardado === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    }
};

// 3. Escuchar el clic en el botón
themeToggle.addEventListener('click', () => {
    // Alternar la clase 'light-mode' en el body
    body.classList.toggle('light-mode');

    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙'; // Cambia el ícono a luna
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️'; // Cambia el ícono a sol
    }
});

// 4. Aplicar el tema guardado cuando la página carga
document.addEventListener('DOMContentLoaded', aplicarTemaGuardado);