class Pessoa{
    constructor(primeironome, segundonome, idade){
        this.primeironome = primeironome;
        this.segundonome = segundonome;
        this.idade = idade;
    }
    
    getnomeComleto(){
        return `${this.primeironome} ${this.segundonome}`;
    }

    mostrarIdade(){
        console.log(`minha idade é ${this.idade}`);
    }

    falar(){
        console.log(`meu nome é ${this.primeironome}`);
    }

    static metodoEstatico(){
        console.log("Este é um método estático");
    } // um método estático não pode acessar as propriedades de instância (primeironome, segundonome, idade), 
    // mas pode ser chamado sem criar uma instância da classe.
}

const p = new Pessoa("RobZ", "Fernandes", 23);
console.log(p);
console.log(p.getnomeComleto());
p.mostrarIdade();

Pessoa.metodoEstatico(); // chamando o método estático diretamente na classe


class Genero extends Pessoa {
    constructor(primeironome, segundonome, idade, genero){
        super(primeironome, segundonome, idade); // o super serve para chamar o construtor OU os métodos da classe pai (Pessoa)
        this.genero = genero;
    }

    mostrarGenero(){
        console.log(`Meu gênero é ${this.genero}`);
    }

    falar(){ // mostrando que é possível sobrescrever o método da classe pai
        console.log(`meu gênero é ${this.genero} e `);
        super.falar(); // aqui estamos chamando o método falar da classe pai (Pessoa)
    }
}

const g = new Genero("RobZ", "Fernandes", 23, "Masculino");
console.log(g);
g.mostrarGenero();
g.falar(); // chamando o método sobrescrito + o da classe pai nesse exemplo