const toggleSidebarButton1 = document.getElementById('toggleSidebarButton1'); //small
const toggleSidebarButton2 = document.getElementById('toggleSidebarButton2'); //big
const sidebar1 = document.querySelector('.sidebar'); //big
const sidebar2 = document.querySelector('.sidebar2'); //small

sidebar1.style.transform = 'translateX(-100%)'; // Initially hide sidebar1
sidebar2.style.transform = 'translateX(0)'; // Initially show sidebar2

toggleSidebarButton1.addEventListener('click', function() {
  sidebar1.style.transform = 'translateX(0)';
  sidebar2.style.transform = 'translateX(-100%)';
});

toggleSidebarButton2.addEventListener('click', function() {
  sidebar1.style.transform = 'translateX(-100%)';
  sidebar2.style.transform = 'translateX(0%)';
});
  
