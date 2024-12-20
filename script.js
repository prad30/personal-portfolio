document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenuList = document.getElementById('mobile-view-list');

    menuToggle.addEventListener('click', () => {
        const isMenuVisible = navMenuList.style.display === 'block';
        navMenuList.style.display = isMenuVisible ? 'none' : 'block';
    });
});
