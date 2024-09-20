document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemplo de verificação de login (substitua pelos seus dados reais)
    if (username === 'Lucas' && password === '1234') {
        alert('Login bem-sucedido!');
        // Redirecionar ou executar outra ação
    } else {
        document.getElementById('message').textContent = 'Usuário ou senha inválidos!';
    }
});