const bota0 = document.getElementById('submit-button');
// OU
const botao = document.querySelector('#submit-button');

const nomeInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const formulario = document.querySelector('#my-form');

const body = document.querySelector('body');


// OBS: existem vários outros eventos além do click
botao.addEventListener('click', (e) => {
    e.preventDefault(); // previne o comportamento padrão do botão 
    // (no caso, enviar o formulário e recarregar a página)
    console.log('Botão clicado');

    // Pega os valores digitados nos inputs
    const nome = nomeInput.value;
    const email = emailInput.value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        // return // é opcional, para sair da função se
        // os campos estiverem vazios, sem precisar do else
    } else {
        console.log(`Nome: ${nome}, Email: ${email}`);
        formulario.style.background = 'red';

        const items = document.querySelector('.items');
        items.firstElementChild.textContent = nome;
        items.children[1].textContent = email;

        body.style.background = '#ff7094ff';
    }

});