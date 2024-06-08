document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');

    if (menuIcon && sideMenu) {
        menuIcon.addEventListener('click', function () {
            sideMenu.classList.toggle('open');
        });
    } else {
        console.error('Elementos não encontrados.');
    }
});

function temaLim() {
    document.documentElement.style.setProperty('--md-sys-color-primary', '#CEF09D');
    document.documentElement.style.setProperty('--md-sys-color-on-primary', '#000000');
    document.documentElement.style.setProperty('--md-sys-color-primary-container', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-on-primary-container', '#002020');
}

function temaDark() {
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
    document.documentElement.style.setProperty('--md-sys-color-on-primary', '#FFFFFF');
    document.documentElement.style.setProperty('--md-sys-color-primary-container', '#6FF7F6');
    document.documentElement.style.setProperty('--md-sys-color-on-primary-container', '#002020');
}

function temaInatel() {
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    document.documentElement.style.setProperty('--md-sys-color-on-primary', '#FFFFFF');
    document.documentElement.style.setProperty('--md-sys-color-primary-container', '#6FF7F6');
    document.documentElement.style.setProperty('--md-sys-color-on-primary-container', '#002020');
}
