//- **Exercícios de interpretação de código**

//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu 
//computador **para analisar e pensar sobre o resultado.** 

//1. Leia o código abaixo:
//a) O que vai ser impresso no console?
//Matheus Nachtergaele
//Virginia Cavendish
//canal: Globo
//horario: 14h 

//2. Leia o código abaixo:
//a) O que vai ser impresso no console?
// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Vai copiar/herdar as propriedades e os valores do objeto existente para dentro de outro objeto.

//3. Leia o código abaixo
// a) O que vai ser impresso no console?
//false
//undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Porque o valor de backend é false e a altura não foi declarada dentro do objeto pessoa.

//Exercícios de escrita de código
// Exemplo de entrada:
// Exemplo de saída:
// "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const pessoa = {
   nome: "Ingrid", 
   apelidos: [" Mi ", " Midori-chan ", " Midori "],
   imprimir: () => {
       console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
   }
}
pessoa.imprimir();

// b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com 
//uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o 
//novo objeto

const novaPessoa = {
    ...pessoa, 
    apelidos: ["Lindinha", "Florzinha", "Docinho"],
    imprimir: () => {
        console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
    }
}
novaPessoa.imprimir();


//2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const primeiraPessoa = {
    nome: "Douglas",
    idade: 28,
    profissao: "Estudante",
}

const segundaPessoa = {
    nome: "Ingrid",
    idade: 26,
    profissao: "Instrutora",
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

minhaFuncao = (pessoas) =>{
    let array = []
    const nome  = pessoas.nome
    const caracteresNome = pessoas.nome.length
    const idade = pessoas.idade
    const profissao = pessoas.profissao
    const caracteresProfissao = pessoas.profissao.length
    
    array.push(nome, caracteresNome, idade, profissao, caracteresProfissao)
    console.log(array)
}

minhaFuncao(primeiraPessoa)
minhaFuncao(segundaPessoa)

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
//nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: "mamão",
    disponibilidade: true
}
const fruta2 = {
    nome: "melancia",
    disponibilidade: true
}
const fruta3 = {
    nome: "morango",
    disponibilidade: true
}

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de 
//`carrinho`. Invoque essa função passando os três objetos criados. 

adicionarCarrinho = () =>{
    carrinho.push(fruta1, fruta2, fruta3)
}
adicionarCarrinho()

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

console.log(carrinho)

//DESAFIOS
//Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console 
//um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para 
//garantir que é um objeto.

imprimirObjeto = () => {
    const pessoa ={
        nome: prompt("Digite seu nome"),
        profissao: prompt("Digite sua profissão"),
        idade: prompt("Digite a sua idade"),
    }
    console.log(typeof(pessoa));
}
imprimirObjeto();