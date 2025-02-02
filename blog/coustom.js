// ****************NAV BAR**************** 
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.getElementById('navbar-links');

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (navbarLinks.classList.contains('active') && !navbarLinks.contains(e.target)) {
            navbarLinks.classList.remove('active');
        }
    });

    navbarLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


function reloadPage() {
    location.reload();
}