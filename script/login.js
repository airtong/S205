document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        if (username === 'admin' && password === 'admin') {
            window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
