document.addEventListener('DOMContentLoaded', function () {
    // Selecionar o ícone de sanduíche e o menu lateral
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');

    // Verificar se os elementos foram encontrados antes de adicionar o evento de clique
    if (menuIcon && sideMenu) {
        // Adicionar evento de clique ao ícone de sanduíche
        menuIcon.addEventListener('click', function () {
            // Alternar a classe 'open' para abrir ou fechar o menu
            sideMenu.classList.toggle('open');
        });
    } else {
        console.error('Elementos não encontrados.');
    }
});
