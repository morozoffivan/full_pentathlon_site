// Мобильное гамбургер меню
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (burger && navMenu) {
    burger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      burger.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }

  // ===== ГАЛЕРЕЯ: открытие/закрытие =====
  const modal = document.getElementById('galleryModal');
  const openBtn = document.getElementById('openGalleryBtn');
  const closeBtn = document.querySelector('.close-gallery');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // запрещаем скролл фона
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Закрытие при клике вне контента
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});