// Мобильное гамбургер меню
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (burger && navMenu) {
    burger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      burger.classList.toggle('active');
    });

    // Закрывать меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }
});