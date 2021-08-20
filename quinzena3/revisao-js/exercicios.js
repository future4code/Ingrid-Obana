// EXERCÍCIO 01
function inverteArray(array) {
  let inverteArray = []
  for(let i = array.length -1; i >= 0; i--){
  inverteArray.push(array[i])
  }
  return(inverteArray)
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  for(item of array){
    if(item % 2 == 0){
      arrayPares.push(item**2) 
    }
  }
  return arrayPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPares = []
  for(item of array){
    if(item % 2 == 0){
      arrayPares.push(item) 
    }
  }
  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeroMaior = 0
  for(numero of array){
    if(numeroMaior <= numero){
      numeroMaior = numero
    }
  }
  return numeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let quantidadeElementos = 0
  for(item of array){
    quantidadeElementos++
  }
  return quantidadeElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [a,b,c,d,e]
  return respostas
}
// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayPares = []
  let i = 0
  while(i<n){
    arrayPares.push(i*2)
    i++
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if(a === b && a === c ){
    return "Equilátero"
  }else if(a === b && c!==b){
    return "Isósceles"
  }else{
    return "Escaleno"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  if(num1>num2){
    let objeto = {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num1 % num2 === 0,
      diferenca: num1 - num2
    }
  return objeto
  }else{
    let objeto = {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1
    }
  return objeto
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array){
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array.length; a++) {
      if (array[a] > array[a + 1]) {
        let temporario = array[a];
        array[a] = array[a + 1];
        array[a + 1] = temporario;
      }
    }
  }
  return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  array.sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})
return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  let filme = {
    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro:(lado1+lado2)*2,
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const dadosPessoais = {
    ...pessoa,
    nome:"ANÔNIMO"
  }
  return dadosPessoais
}

// EXERCÍCIO 16A
function maioresDe18(array) {
  const arrayPessoas = [
    ...array,
  ]
  const pessoasMaioresDe18 = arrayPessoas.filter((filtrarMaioridade)=> filtrarMaioridade.idade >= 18)
return pessoasMaioresDe18
}

// EXERCÍCIO 16B
function menoresDe18(array) {  
    const arrayPessoas = [
      ...array,
    ]
    const pessoasMenoresDe18 = arrayPessoas.filter((filtrarMenoridade)=> filtrarMenoridade.idade < 18)
  return pessoasMenoresDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicacao = array.map(dobro => dobro *2)
  return multiplicacao
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let arrayDeStrings = []
  for(item of array){
    arrayDeStrings.push((item*2).toString())
  }
  return arrayDeStrings
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  gerarMensagem = (numero) =>{
    if(numero %2===0){
      return (`${numero} é par`)
    }else{
      return (`${numero} é ímpar`)
    }
  }
  const mensagens = array.map(gerarMensagem)
  return mensagens
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const arrayDePessoasAutorizadas = [
    ...pessoas
  ]
  const pessoasAutorizadas = arrayDePessoasAutorizadas.filter((filtrarPessoasAutorizadas)=> 
  filtrarPessoasAutorizadas.altura >= 1.5 && filtrarPessoasAutorizadas.idade >14 && 
  filtrarPessoasAutorizadas.idade < 60)
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const arrayDePessoasNaoAutorizadas = [
    ...pessoas
  ]
  const pessoasNaoAutorizadas = arrayDePessoasNaoAutorizadas.filter((filtrarPessoasNaoAutorizadas)=> 
  filtrarPessoasNaoAutorizadas.altura < 1.5 || filtrarPessoasNaoAutorizadas.idade <= 14 || 
  filtrarPessoasNaoAutorizadas.idade > 60)
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  return consultasNome.sort((a, b) => {
    if (a.nome < b.nome) return -1
    return 0
})
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  return contas.map(conta => {
    return {
    cliente: conta.cliente,
    saldoTotal: conta.saldoTotal - conta.compras.reduce((acumulador, atual) => acumulador += atual, 0),
    compras: conta.compras
    }
  })
}
