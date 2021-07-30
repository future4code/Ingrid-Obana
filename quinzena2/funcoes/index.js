//1.a. 10, 50
//b. nada


//2.a. Essa função modifica o texto para minúsculas e pesquisa a palavra "cenoura". Sua finalidade é fazer 
//pesquisas de um determinado termo
//b. true, true, false

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
//sobre você, como:
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função 
//não possui entradas, apenas imprime essa mensagem.

function imprimeMensagem(){
    console.log("Eu sou Ingrid, tenho 25 anos, moro em Belo Horizonte e sou instrutora.");
}
imprimeMensagem();

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
//(string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function imprimeInformacoes(nome, idade, endereco, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
}
imprimeInformacoes("Laís", 23, "São Paulo", "instrutora");

// 2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
//entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somarNumeros(num1,num2){
    const resultado = num1 + num2;
    return resultado;
}
console.log(somarNumeros(2,3));

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior
// ou igual** ao segundo.

function compararNumeros(num1,num2){
    const comparacao = num1 >= num2;
    return comparacao;
}
console.log(compararNumeros(2,3));

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function ehPar(num1){
    const resto = num1 % 2 ==0;
    return resto;
}
console.log(ehPar(7));

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

function medirTamanhoMensagem(mensagem){
    const fraseMaiuscula = mensagem.toUpperCase()
    console.log(mensagem.length, fraseMaiuscula);
}
medirTamanhoMensagem(("é preciso amar as pessoas como se não houvesse amanhã"));

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
//pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));

function somar(){
    const resultadoSoma = num1 + num2;
    console.log(`O número ${num1} somado com ${num2} é igual a ${resultadoSoma}`)
}
somar(num1,num2);

function subtrair(){
    const resultadoSubtracao = num1 - num2;
    console.log(`O número ${num1} subtraído por ${num2} é igual a ${resultadoSubtracao}`)
}
subtrair(num1,num2);

function multiplicar(){
    const resultadoMultiplicacao = num1 * num2;
    console.log(`O número ${num1} multiplicado por ${num2} é igual a ${resultadoMultiplicacao}`)
}
multiplicar(num1, num2);

function dividir(){
    const resultadoDivisao = num1 / num2;
    console.log(`O número ${num1} dividido por ${num2} é igual a ${resultadoDivisao}`)
}
dividir(num1, num2);

