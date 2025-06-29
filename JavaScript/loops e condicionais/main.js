for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for (let i = 0; i < carros.length; i++) {
//   console.log(carros[i]);
// } // FOR padrão

const carros = ["carro 1", "carro 2", "carro 3"];
const carros2 = {
  marca: "marca boa",
  placa: "placa boa",
  ano: 2000,
};

// o for ... of percorre todos os VALORES dentro da lista carros
// o for ... in percorre todos os ÍNDICES dentro da lista carros, também usado para mostrar VLORES de OBJETOS
// o "carro" é como uma variável qualquer para percorrer
for (let carro of carros) {
  console.log(carro);
}
for (let carro in carros) {
  console.log(carro);
}

for (let carro in carros2) {
  console.log(carros2[carro]);
} // pouco recomendado usar esse aqui

carros.forEach(function (carro, index) {
  console.log(`${carro}, ${index}`);
}); // outra forma de percorrer, agora usando uma função com parâmetro de valor e índice

let i = 0;
while (i < 3) {
  console.log(`while: ${carros[i]}`);
  i++;
} // exemplo de while, a variável tem que ser criada fora

//------------------------------------------------------------------------------------------------------
// IF ELSE moderno com operador ternário
// condição ? caso true : caso false
let idade = 18;
let podeentrar = idade === 18 ? "sim" : "não";
console.log(podeentrar);

// IF ELSE padrão
// const soma1 = 1 + 4, soma2 = 1+3;
// if (soma1 === 2) {
//   console.log("soma1 = 2");
// } else if (soma1 === 3) {
//   console.log("soma1 = 3");
// } else {
//   console.log("soma1 diferente de 2 e de 3");
// }
// if (soma1 == 5 && soma2 == 9){
//   console.log("soma1 = 5 E soma2 = 9");
// }else if(soma1 == 5 || soma2 == 9){
//   console.log('soma1 = 5 OU soma2 = 9');
// }
//------------------------------------------------------------------------------------------------------
const livro = "historia";
switch (livro) {
  case "historia":
    console.log("livro de história");
    break;
  default:
    console.log("não se sabe o livro");
    break;
}
