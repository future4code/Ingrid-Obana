//Exercícios de interpretação de código:
// 1. Vai imprimir duas linhas: a primeira linha 10 e a segunda linha 10 5
// 2. Vai imprimir 10 10 10
// 3. p = horasTrabalhadas e t = valorDia

//Exercícios de escrita de código:
//1.a
let nome
//1.b
let idade
//1.c
console.log(typeof nome, idade)

// 1.d. Imprimiu undefined porque não foi atribuído valor às variáveis.

//1.e
const nomeUsuario = prompt("Qual é o seu nome?")      
const idadeUsuario = prompt("Quantos anos você tem?")

//1.f Isso ocorre porque a função prompt() sempre retornará uma string.
console.log(typeof nomeUsuario, idadeUsuario)
//1.g
console.log("Olá, ", nomeUsuario, "! Você tem ", idadeUsuario, "anos")

//2.a
let respostaUm = prompt ("Você está usando uma roupa azul hoje?")
let respostaDois = prompt ("Você está feliz hoje?")
let respostaTres = prompt ("Você já bebeu água hoje?")
//2.b
console.log("Você está usando uma roupa azul hoje?", respostaUm)
console.log("Você está feliz hoje?", respostaDois)
console.log("Você já bebeu água hoje?", respostaTres)

//3.
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

c = b
b = a
a = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))

console.log("A soma dos dois números digitados é:", (num1+num2))
console.log("O resultado da multiplicação dos dois números digitados é:", (num1*num2))