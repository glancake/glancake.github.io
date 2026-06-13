// 暗色模式切换
function toggleTheme() {
  var html = document.documentElement;
  var currentTheme = html.getAttribute('data-theme');
  var nextTheme = currentTheme === 'dark' ? '' : 'dark';
  html.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme || 'light');
}
