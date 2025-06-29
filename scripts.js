
// scripts.js
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Check for saved theme in local storage
if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
