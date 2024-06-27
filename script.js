// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = '#FFB6C1';
      });
  
      item.addEventListener('mouseout', () => {
        item.style.color = '#FFFFFF';
      });
    });
  });
  