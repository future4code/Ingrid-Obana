// ---------------------Exercícios de interpretação de código-------------------------------------
// Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

//1. Leia o código abaixo:

//a) Explique o que o código faz. Qual o teste que ele realiza? 
//Ele verifica se o número digitado pelo usuário é par.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//números pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//números ímpares

// a) Para que serve o código acima?
//Para imprimir o preço das frutas que forem digitadas pelo usuário

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//Vai imprimir "O preço da fruta  maçã  é  R$  5"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
//retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário 
//"BREAK PARA O ITEM c.")?

//Vai imprimir "O preço da fruta  Pêra  é  R$  5"

//3. Leia o código abaixo:
// a) O que a primeira linha está fazendo?
// Está pedindo um número para o usuário e guardando em uma variável

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se digitar 10, imprimirá "Esse número passou no teste". Se digitar -10, ele não imprimirá nada.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Ocorrerá um erro pois a variável mensagem foi declarada no escopo mas não foi atribuído valor dentro desse
//escopo 

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
const idadeUsuario = Number(prompt("Digite a sua idade"))

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

if (idadeUsuario >=18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}
// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

//         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

//         Se o usuário digitar "V", a saída deve ser:

//         ```
//         "Boa Tarde!"
//         ```
const turnoDia = prompt("Dentre essas opções, digite **M** para matutino ou **V** para Vespertino ou **N** para Noturno ")
if(turnoDia === "M"){
    console.log("Bom dia")
} else if (turnoDia === "V"){
    console.log("Boa tarde")
} else if (turnoDia === "N"){
    console.log("Boa noite")
}


// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
// Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

const horarioQueEstuda = prompt("Dentre essas opções, digite **M** para matutino ou **V** para Vespertino ou **N** para Noturno ")
switch(horarioQueEstuda){ 
    case "M":
        console.log("Bom dia");
        break;
    case "V":
        console.log("Boa tarde");
        break;
    case "N":
        console.log("Boa noite");
        break;
    default:
        console.log("Digite um turno válido");
        break;
}
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com 
//você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao 
//usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique 
//se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

const generoDoFilme = prompt("Digite o gênero do filme");
const precoDoIngresso = prompt("Digite o preço do ingresso");

if(generoDoFilme === "fantasia" && precoDoIngresso < 15 ){
    const lanchinho = prompt("Qual snack que você quer comprar?");
    console.log("Bom filme!");
    console.log(`Aproveite seu ${lanchinho}!`);
    
}
else{
    console.log("Escolha outro filme :(")
}

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`,
// pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima 
// no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o 
// usuário colocou no input.


