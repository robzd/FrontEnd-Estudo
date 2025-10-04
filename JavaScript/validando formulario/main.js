const nomeInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const botao = document.querySelector("#submit-button");
const items = document.querySelector(".items");




botao.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = nomeInput.value;
    const email = emailInput.value;

    if (nome === "" || email === "") {
        const mensagem = document.querySelector(".msg");
        mensagem.classList.add("error"); //adiciona todo o css que está na
        // classe error para a mensagem
        mensagem.textContent = "Por favor, preencha todos os campos";

        setTimeout(() => mensagem.remove(), 3000); //remove a mensagem de erro 
        // após 3 segundos (3000 milisegundos)
        return;
    }


    const criarli = document.createElement("li");
    criarli.innerHTML = `Nome: ${nome} <br> Email: ${email}`;
    items.appendChild(criarli); //adiciona o li criado dentro da ul (items)

    //limpar os campos
    // OBS: não se pode usar as variáveis nome e email, pois elas
    // guardam apenas o valor que estava no input no momento do clique
    nomeInput.value = "";
    emailInput.value = "";

});