document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Aqui você pode adicionar a lógica de autenticação
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Exemplo simples de validação
        if (username === 'admin' && password === 'admin') {
            window.location.href = 'index.html';
            // Aqui você pode redirecionar o usuário para outra página, se desejar
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
