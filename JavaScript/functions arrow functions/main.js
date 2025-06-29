function soma(a, b){
    console.log (a+b)
}

function soma2(a = 5, b = 5){ // O = representa valores DEFAULT, se valores não forem passados, eles serão usados
    return a + b
}

soma(2, 2);
console.log(soma2(2, 2));
console.log(soma2());
//------------------------------------------------------------------------------------------------------
// Arrow Function são funções escritas de forma curta e criadas com const

const soma3 = (a, b) => { // arrow function padrão com parâmetros
    return a + b;
}

const numQuad = a => { // arrow function com apenas 1 parâmetro (parenteses é opcional)
    return `O quadrado de ${a} é ${a*a}`;
}

const dizerOi = () => { //arrow function sem parâmetros
    console.log('oi', 'tudo bom?'); // consoles podem mostrar mais de uma coisa
}

const arrCurta = (a, b) => a + b; // arrow function ainda mais curta (quando ela fará apenas um RETURN)
                                  // aqui no caso, depois da arrow, return a + b

console.log(`soma3: ${soma3(1, 5)}`);
console.log(`numQuad: ${numQuad(9)}`);
dizerOi();
console.log(`arrCurta: ${arrCurta(1, 5)}`);