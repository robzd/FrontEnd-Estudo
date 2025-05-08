// Conceito de coisas TRUE or FALSE

// Uma variável vazia é FALSE, uma variável com zero é FALSE, o mesmo vale para NULL ou UNDEFINED
let x = '';
console.log(!!x); //O !! mostra se o valor de algo é TRUE ou FALSE
console.log(!x) //Já o ! mostra o valor INVERSO do booleano

x = 0;
console.log(!!x);

x = null;
console.log(!!x);

x = undefined;
console.log(!!x);

// PORÉM, uma lista vazia ou um objeto vazio são TRUE

x = []
console.log(!!x);

x = {

}
console.log(!!x);

// Por isso que a sintaxe abaixo funciona e é bastante usada
const lista = [];
if(lista){ // IF TRUE
    lista.push("elemento")
}

// outro exemplo de IF ELSE)
lista.length > 0 ? console.log("lista com algum elemento") : console.log("lista vazia")