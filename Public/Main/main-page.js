// Função para navegar entre as seções do site
function navigateTo(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    
    document.getElementById(section).style.display = 'block';
}

// Lógica básica para o login
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemplo simples de validação
    if (username === 'admin' && password === '1234') {
        loginMessage.textContent = 'Login bem-sucedido! Bem-vindo ao TCCHelp.';
        loginMessage.style.color = 'green';
        navigateTo('modules');
    } else {
        loginMessage.textContent = 'Usuário ou senha incorretos.';
        loginMessage.style.color = 'red';
    }
});
