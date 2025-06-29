//variaveis
const firstName = "RobZ"; //Tipo 1 de variável (constante)
let lastName = "Fernandes"; //Tipo 2 de variável (pode ser mudada)
const number = 21;
const x = null; //variavel nula
const y = undefined; //variavel sem nada dentro
//------------------------------------------------------------------------------------------------------
//touppercase / lower = deixar tudo maiúsculo ou minúsculo
//tostring = converter o tipo
//split dividir variavel em lista baseado em algum caractere

//FORMA DE INTERPOLAR VARIÁVEIS EM FRASES:  `${}`
console.log(
  `Meu nome é ${firstName.toUpperCase()} ${number.toString()} ${lastName}`
);
const names = "robz,douglas,fernandes";
console.log(names.split(","));
//------------------------------------------------------------------------------------------------------
//javascript não é tipado, então uma lista pode ter vários tipos dentro
const lista = ["peixe", "bola", "gato", 10, true];
console.log(lista[4]);
lista.push("mesa"); //adiciona um elemento no final da lista
lista.unshift("joia"); //adiciona um elemento no inicio da lista
lista.pop(); //remove o elemento final da lista
lista[2] = "boneco"; //alterar um elemento
console.log(lista.indexOf("gato")); //procura a posição de um elemento
console.log(lista.length); //FUNÇÃO de tamanho, diferente de metodo (que passa parâmetros)

console.log(lista);
//------------------------------------------------------------------------------------------------------
let verificar = Array.isArray(lista); //Array.isArray = função que mostra se é uma lista ou não
console.log(verificar);
verificar = Array.isArray(x);
console.log(verificar);
//------------------------------------------------------------------------------------------------------
const listanum1 = [1, 2, 3, 4, 5];
const numvezesdois = listanum1.map(function (numero) {
  //função com parâmetro numero, que representará cada índice da lista por causa do map
  return numero * 2;
});
console.log(numvezesdois);
//------------------------------------------------------------------------------------------------------
const listanum2 = [8, 26, 13, 67, 32];
const numpares = listanum2.filter(function (numero) {
  //filtra a lista colocando apenas os valores que passam na condição
  return numero % 2 === 0; //== compara valores ignorando o tipo, === compara valores e tipos
});
console.log(numpares);
//------------------------------------------------------------------------------------------------------
const listanum3 = [40, 20, 10, 30, 50];
const numsomados = listanum3.reduce(function (numero, accumulator) {
  return accumulator + numero;
}, 0); //valor do accumulator = aqui no caso iniciando igual a zero
console.log(numsomados);
