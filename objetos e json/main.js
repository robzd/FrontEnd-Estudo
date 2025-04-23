//objeto
const pessoa = {
  nome: "robz",
  sobrenome: "fernandes",
  idade: 23,
  hobbies: ["academia", "guitarra", "filmes"],
  pet: {
    //objeto dentro de um objeto
    nome: "mel",
    cor: "marrom",
  }, //boa prática: colocar virgula apos o ultimo atributo, apesar de não ser necessário
};

//destructuring = transformar os atributos do objeto em variáveis
const {
  nome: primeironome,
  sobrenome: segundonome,
  idade: idadepessoa,
  hobbies: listadehobbies,
  pet: animal,
} = pessoa;
// OPCIONAL: com o nome que eu quiser ^
// const {nome, sobrenome, idade, hobbies} = pessoa;
console.log(idadepessoa);

const { nome: nomedopet, cor: cordopet } = pessoa.pet;
console.log(cordopet);

pessoa.altura = 1.71; //colocar um novo atributo no objeto
console.log(pessoa);
//------------------------------------------------------------------------------------------------------
//lista com vários objetos
const listaobjetos = [
  {
    id: 1,
    tarefa: "tarefa numero 1",
    estafeita: true,
  },
  {
    id: 2,
    tarefa: "tarefa numero 2",
    estafeita: false,
  },
  {
    id: 3,
    tarefa: "tarefa numero 3",
    estafeita: false,
  },
];
console.log(listaobjetos[2].tarefa); //mostrar a tarefa 3
// OU com o destructuring
const { tarefa: nomedatarefa2 } = listaobjetos[2];
console.log(nomedatarefa2);
//------------------------------------------------------------------------------------------------------
//transformação de um objeto em string JSON (serve para mandar dados JSON para uma API / servidor)
//tem que fazer isso por que não tem como mandar um arquivo em forma de JS padrão, precisa converter
let listaobjetosJSON = JSON.stringify(listaobjetos);
console.log(listaobjetosJSON);
//transformação de um objeto em string JSON (serve para pegar dados JSON de uma API / servidor e usar como quiser)
listaobjetosJSON = JSON.parse(listaobjetosJSON);
console.log(listaobjetosJSON);
