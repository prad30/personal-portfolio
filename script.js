document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenuList = document.querySelector('.mobile-view');

    menuToggle.addEventListener('click', () => {
        const isMenuVisible = navMenuList.style.display === 'block';
        navMenuList.style.display = isMenuVisible ? 'none' : 'block';
    });

    const navLinks = document.querySelectorAll('.mobile-view a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenuList.style.display = 'none';
        });
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const downloadBtn = document.querySelector('.download-cv button'); 

        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = 'asset/Resume-Pradeep.pdf'; 
            link.download = 'Pradeep_Resume.pdf'; 
            link.click();
        });
});
