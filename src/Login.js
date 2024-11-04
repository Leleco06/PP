import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBLnecFQZwBT9j7qe3Ukwlk4lQxnz_GujE",
    authDomain: "login-96499.firebaseapp.com",
    projectId: "login-96499",
    storageBucket: "login-96499.appspot.com",
    messagingSenderId: "869893973297",
    appId: "1:869893973297:web:c02e0bc5c01cb6d7fbbc10",
    measurementId: "G-ZN6HVGMYKK"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Limpa mensagem anterior (caso haja)
    messageDiv.innerText = '';

    try {
        // Tentativa de login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Login bem-sucedido
        messageDiv.innerText = `Bem-vindo! ${user.email}!`;
        console.log(`Usuário logado com sucesso: ${user.email}`);

        // Redirecionamento para outra página após login bem-sucedido
        setTimeout(() => {
            window.location.href = "../Public/Main/main-page.html";
        }, 2000);

    } catch (error) {
        console.error("Erro ao fazer login:", error);

        // Verifica se o erro é de usuário não encontrado
        if (error.code === 'auth/invalid-credential') {
            messageDiv.innerText = "Email ou Senha inválida.";
            console.log("Email ou Senha inválida.");
            
        } 
        // Verifica se o erro é de senha incorreta
        else if (error.code === 'auth/wrong-password') {
            messageDiv.innerText = "Senha incorreta. Por favor, tente novamente.";
            console.log("Erro: Senha incorreta.");
        } 
        // Outros erros
        else {
            messageDiv.innerText = `Erro: ${error.message}`;
            console.log(`Erro ao fazer login: ${error.message}`);
        }
    }
});

// Função para Esqueci Minha Senha
document.getElementById('forgotPassword').addEventListener('click', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');
    
    // Verifica se o email foi preenchido
    if (!email) {
        messageDiv.innerText = "Por favor, insira seu email para redefinir a senha.";
        return;
    }

    try {
        // Envia o email de redefinição de senha
        await sendPasswordResetEmail(auth, email);
        messageDiv.innerText = "Um email de redefinição de senha foi enviado para seu email.";
        console.log("Email de redefinição de senha enviado com sucesso.");
    } catch (error) {
        console.error("Erro ao enviar email de redefinição:", error);
        messageDiv.innerText = `Erro: ${error.message}`;
    }
});