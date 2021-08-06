// - **Exercícios de interpretação de código**

// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// a variável valor foi declarada e vale 0. Dentro do for, declaramos o i também valendo 0. Para 
// que a repetição continue, a condição é "i for menor que 5", enquanto essa condição for verdadeira, ela irá
// repetir o que estiver dentro do bloco, e i será incrementado em 1.
// A ação que se repetirá é adicionar o valor de i à variável valor. 
// Imprimirá 10 no console porque o valor de i cresce junto com a variável valor;

// 2. Leia o código abaixo:


// a) O que vai ser impresso no console?
//19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
// Se não, o que poderia ser usado para fazer isso?
// Poderia usar um indexOf() para pegar cada indice e imprimir no console.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

// *
// **
// ***
// ****

// - **Exercícios de escrita de código**
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses 
//nomes em um array. Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade 
//de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
// c) Por fim, imprima o array com os nomes dos bichinhos no console

let quantidadePets = Number(prompt("Digite a quantidade de pets que você tem:"));
let listaPets = [];
let nomePets;
if(quantidadePets == 0){
    console.log("Que pena! Você pode adotar um pet!");
}else{
    while(quantidadePets !== 0){
        nomePets = prompt("Digite o nome do pet: ");
        quantidadePets -= 1;
        listaPets.push(nomePets);
        
    }
    console.log(listaPets);
}


console.log("----------------------------------");


// 2. Considere que você tenha acesso a um array (chamado de 'array original') que é composto somente de 
//números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

imprimirLista = () => {
    for (let i = 0; i < array.length -1 ; i++) {
        console.log(array[i]);
    }
}
imprimirLista()

console.log("----------------------------------");

imprimirDividirLista = () => {
    for (let i = 0; i < array.length -1 ; i++) {
        console.log(array[i]/10)
    }
}
imprimirDividirLista();

console.log("----------------------------------");

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

imprimirDividirLista = () => {
    for (let i = 0; i < array.length -1 ; i++) {
        console.log(array[i]/10);
    }
}
imprimirDividirLista();

console.log("----------------------------------");

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
//e **imprima** esse novo array

imprimirNumerosParesLista = () =>{
        let novoArray = []
        for(numero of array){
            if(numero % 2 == 0){
                novoArray.push(numero);
            }
        }
        console.log(novoArray);
}
imprimirNumerosParesLista();

console.log("--------------------------------");

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do index
// `i` é: `numero`". Depois, **imprima** este novo array.

imprimirListaStrings = () => {
    
    for(indice of array){
        let posicao = array.indexOf(indice);
        let numero = indice.valueOf(posicao);
        console.log(`O elemento do index ${posicao + 1} é: ${numero}`);
    }
    
}
imprimirListaStrings();

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//     Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável 
//`valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` 
//com um valor que não seja menor que qualquer valor do array original.

imprimirMaximoEMinimo = () => {
    let valorMaximo = 0;
    let valorMinimo = 999;
    for(numero of array){
        if(numero > valorMaximo){
            valorMaximo = numero;
        } else if(numero < valorMinimo){
            valorMinimo = numero;
        }
    }
    console.log(`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}`);
}
imprimirMaximoEMinimo();

///DESAFIO 

console.log('Vamos jogar!');
let i = 0;
let numeroComputador = Math.floor(Math.random()*10);
let numeroPlayer = (prompt("Adivinhe o número que eu estou pensando..."));

while (Number(numeroPlayer) !== numeroComputador && numeroPlayer !== null){
  i++
  console.log(`O número chutado foi: ${(numeroPlayer)}`);
  if(Number(numeroPlayer)< numeroComputador){
      console.log("Errrrrrrrou, é maior");
      numeroPlayer = (prompt("Adivinhe o número que estou pensando..."));
    }else if (Number(numeroPlayer)> numeroComputador) {
        console.log("Errrrrrrrou, é menor");
        numeroPlayer = (prompt("Adivinhe o número que eu estou pensando..."));
    }
}

if (Number(numeroPlayer) === numeroComputador){
  console.log("Acertou!!!");
}

console.log(`O numero de tentativas foi: ${i}`);

