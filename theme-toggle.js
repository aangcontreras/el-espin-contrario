// theme-toggle.js - Script para cambiar entre tema claro y oscuro
// Versión que funciona en todas las páginas de Quarto

// PASO 1: Aplicar tema INMEDIATAMENTE (ejecutar síncronamente)
(function () {
    var savedTheme = localStorage.getItem('gruvbox-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// PASO 2: Setup completo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {

    var currentTheme = localStorage.getItem('gruvbox-theme') || 'dark';

    // Aplicar tema al documento
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('gruvbox-theme', theme);
        currentTheme = theme;
        updateButton();
    }

    // Actualizar el icono del botón
    function updateButton() {
        var button = document.getElementById('theme-toggle');
        if (button) {
            button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
            button.setAttribute('aria-label', currentTheme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
        }
    }

    // Alternar tema
    function toggleTheme() {
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    // Crear el botón toggle
    function createButton() {
        if (document.getElementById('theme-toggle')) {
            updateButton();
            return;
        }

        var button = document.createElement('button');
        button.id = 'theme-toggle';
        button.type = 'button';
        button.className = 'theme-toggle-btn';
        button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        button.setAttribute('aria-label', currentTheme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');

        button.onclick = toggleTheme;

        document.body.appendChild(button);
    }

    // Aplicar tema inicial
    applyTheme(currentTheme);

    // Crear botón
    createButton();

});