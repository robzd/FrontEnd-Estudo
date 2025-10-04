//SELECIONANDO ELEMENTOS DO DOM

const textoadduser = document.getElementById("add-user");
console.log(textoadduser);
// outra forma de pegar um elemento (querySelector)
// a diferença entre o getElementById e o querySelector é que 
// o querySelector pode pegar qualquer seletor,
// como classes, atributos, etc.
// OBS: tanto o querySelector quanto o getElementById pegam apenas o primeiro 
// elemento que encontrarem, mas o querySelector é mais versátil


// para pegar um elemento pela ID, usamos o #
const textoadduser2 = document.querySelector("#add-user");

// para pegar um elemento pela classe, usamos o .
const textoitem = document.querySelectorAll(".item");
// exemplo mostrando todas as classe item (querySelectorAll)
textoitem.forEach((item) => console.log(item));

// para pegar um elemento pela tag, usamos o nome da tag
const textoh1 = document.querySelector("h1");
console.log(textoh1);

// para pegar um elemento pelo atributo, usamos o []
const textoinput = document.querySelector("[type='text']");
// outro exemplo de pegar um elemento pelo atributo
const testoinput2 = document.querySelector("[placeholder='Nome']");


// ---------------------------------------------------------------------------

// MANIPULANDO ELEMENTOS DO DOM

const textoitemsplural = document.querySelector(".items");
// textoitemsplural.remove(); // remove todos os item do elemento do DOM
textoitemsplural.lastElementChild.remove(); // remove o último elemento filho do elemento selecionado
textoitemsplural.firstElementChild.remove(); // remove o primeiro elemento filho do elemento selecionado
textoitemsplural.children[1].remove(); // remove o segundo elemento filho do elemento selecionado (índice começa em 0)

// Alterando o texto do elemento selecionado
textoitemsplural.firstElementChild.textContent = "texto mudado";

// Alterando o HTML do elemento selecionado (innerHTML)
textoitemsplural.firstElementChild.innerHTML = "<h1>Item 1</h1>";

// Alterando o style do elemento selecionado
textoitemsplural.firstElementChild.style.color = "red";