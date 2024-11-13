import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

// Função de Registro
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');
    const form = document.getElementById('registerForm');

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        messageDiv.innerText = "As senhas não coincidem.";
        return;
    }

    try {
        // Tentativa de criação de usuário
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Atualizando o perfil com o nome do usuário
        await updateProfile(user, { displayName: name });

        // Exibe mensagem de sucesso
        messageDiv.innerText = `Conta criada com sucesso! Bem-vindo, ${user.displayName}!`;

        console.log("Conta criada com sucesso, redirecionando para a página de login.");

        // Redireciona para a página de login após 2 segundos
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);

    } catch (error) {
        // Se a conta já existir, exibe a mensagem personalizada
        if (error.code === 'auth/email-already-in-use') {
            messageDiv.innerText = "Email já cadastrado.";
            console.log("Email já cadastrado.");
        } else {
            // Outros erros de registro
            messageDiv.innerText = `Erro ao registrar: ${error.message}`;
            console.log(`Erro ao registrar: ${error.message}`);
        }
    }
});


// --------------------------------------------PROGRESSO--------------------------------------------//

import { getDatabase, ref, set, get, query, orderByChild, equalTo, onValue, update, runTransaction, limitToFirst, startAfter } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

async function signUp(name, email, password, ) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        console.log('Usuário criado:', newUser);
        await set(ref(db, users/${newUser.uid}), {
            userName: name,
            email: newUser.email,
        });

    } catch (error) {
        console.error(Erro ao criar usuário: ${error});
    }
}


update(ref(db, company/${companyId}/games),{


})