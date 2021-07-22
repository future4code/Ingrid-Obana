/*-------------------Exercícios de interpretação de código --------------------------------------*/

//1.a. false
//1.b. false
//1.c. true
//1.d. boolean

//2. Isso acontece porque a função prompt sempre nos retorna uma string.
//3. Devemos colocar Number() antes do prompt para transformar string em número.
//Ficaria assim: 
//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))


/*-------------------Exercícios de escrita de código --------------------------------------*/

//1.a.
const idadeUsuario = Number(prompt('Digite sua idade:'));
//1.b.
const idadeAmigo = Number(prompt('Digite a idade do seu melhor amigo'));
//1.c.
console.log('Sua idade é maior do que a do seu melhor amigo? ', idadeUsuario > idadeAmigo);
//1.d.
console.log(idadeUsuario-idadeAmigo);

//2.a
const numero1 = Number(prompt('Digite um numero par:'));
//2.b.
console.log(numero1 % 2 ==0);
//2.c. Todos os numeros pares retornam true
//2.d. Retornam false

//3.
const idade = Number(prompt('Digite sua idade:'));
//3.a.
console.log(idade*12);
//3.b.
console.log(idade*365);
//3.c.
console.log(idade*8760);

//4.
const num1 = Number(prompt('Digite um numero:'));
const num2 = Number(prompt('Digite outro numero:'));

console.log('O primeiro numero é maior que segundo? ', num1 > num2);
console.log('O primeiro numero é igual ao segundo? ', num1 == num2);
console.log('O primeiro numero é divisível pelo segundo? ', num1 % num2 ==0);
console.log('O segundo numero é divisível pelo primeiro? ', num2 % num1 ==0);
