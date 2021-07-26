/*--------------------------------Exercícios de interpretação de código-----------------------------------*/
//1.
//a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

//2.
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

/*--------------------------------Exercícios de escrita de código-----------------------------------*/

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte 
//mensagem:

const emailDoUsuario = prompt("Digite seu email:")
const nomeDoUsuario = prompt("Digite seu nome:")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:
//a. Imprima na tela o array completo

let comidasPreferidas = ["Pizza", "Lasanha", "Strogonoff", "Hamburguer", "Sushi"]
console.log(comidasPreferidas);

//b. Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das 
//comidas, uma embaixo da outra.

console.log("Essas são as minhas comidas preferidas: ", comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);


//c. Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
let suaComidaPreferida = prompt("Qual é a sua comida preferida?");
comidasPreferidas[1] = suaComidaPreferida;
console.log(comidasPreferidas);

//3. Faça um programa, seguindo os passos:

//a.Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas =[];
//b.Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let primeiraTarefa = prompt("Digite a primeira tarefa:");
let segundaTarefa = prompt("Digite a segunda tarefa:");
let terceiraTarefa = prompt("Digite a terceira tarefa:");

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa); 
console.log(listaDeTarefas); 

let tarefaConcluida =  Number(prompt("Digite o número da tarefa para marcar como concluída"));
tarefaConcluida -=1;
listaDeTarefas.splice(tarefaConcluida,1);
console.log(listaDeTarefas);

