function toggleSubMenu(menuItem) {
     menuItem.classList.toggle('active');
     const submenu = menuItem.querySelector('.submenu');
     const menuContainer = document.getElementById('menuContainer');
 
     if (menuItem.classList.contains('active')) {
         submenu.style.maxHeight = submenu.scrollHeight + 'px';
         menuContainer.style.paddingBottom = submenu.scrollHeight + 'px';
     } else {
         submenu.style.maxHeight = '0';
         menuContainer.style.paddingBottom = '20px';  // Prilagodite prema potrebi
     }
 }
 