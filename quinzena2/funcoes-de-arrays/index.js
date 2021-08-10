//Exercícios de interpretação de código

//1.a) será impresso no console um novo array completo do objeto usuarios.

//2.a) será impresso no console um novo array dos nomes do objeto usuarios.

//3.a) será impresso no console um novo array com os apelidos diferentes de "Chijo" do objeto usuarios 

//Exercícios de escrita de código
//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
//a) Crie um novo array que contenha apenas o nome dos doguinhos 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const nomeDosPets = pets.map((doguinhos)=>{
    return doguinhos.nome
})
console.log(nomeDosPets)

//b) Crie um novo array apenas com os cachorros salsicha

const cachorroSalsicha = pets.filter(
    (doggo)=> doggo.raca === "Salsicha"
)
console.log(cachorroSalsicha)

//Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const gerarMensagem = (catioro) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${catioro.nome}!`
}
const filtrarRaca = (doggo) =>{
    return doggo.raca === "Poodle"
}

const mensagemPromo = pets.filter(filtrarRaca).map(gerarMensagem)
console.log(mensagemPromo)

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item
const nomeDosItens = produtos.map((item)=>{
    return item.nome
})
console.log(nomeDosItens)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const novoPreco = produtos.map((item)=>{
    return `${item.nome} R$ ${item.preco - item.preco * 5 /100}`
})
console.log(novoPreco)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const listaBebidas = produtos.filter(item=>{
    return item.categoria === "Bebidas"
})
console.log(listaBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter(item=>{
    return item.nome.includes("Ypê")
})
console.log(produtosYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const novaPromocao = produtosYpe.map((item)=>{
    return `Compre ${item.nome} por R$ ${item.preco}`
})
console.log(novaPromocao)
