// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura do retângulo:');
  const largura = prompt('Digite a largura do retângulo:');

  console.log(Number(altura*largura));
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Digite o ano atual:');
  const anoNascimento = prompt('Digite o ano que você nasceu:');

  console.log(Number(anoAtual-anoNascimento));
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Digite o seu peso:');
  const altura = prompt('Digite a sua altura:');

  console.log(Number(peso / (altura*altura)));
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome:');
  const idade = prompt('Digite sua idade');
  const email = prompt('Digite seu e-mail');

  console.log('Meu nome é ' +nome+ ', tenho ' +idade+ ' anos, e o meu email é '+email+'.');
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite a sua cor preferida');
  const cor2 = prompt('Digite a segunda cor preferida');
  const cor3 = prompt('Digite a terceira preferida');

  console.log([cor1, cor2, cor3]);

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const texto = prompt('Digite seu texto: ');

  console.log(texto.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt('Digite o custo do espetáculo: ');
  const valorIngresso = prompt('Digite o valor do ingresso: ');

  console.log(Number(custo/valorIngresso));
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma palavra: ');
  const string2 = prompt('Digite outra palavra: ');

  if (string1.length == string2.length) {
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma palavra: ');
  const string2 = prompt('Digite outra palavra: ');
  if(string1.toUpperCase() === string2.toUpperCase()){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual: '));
  const anoNascimento = Number(prompt('Digite o ano que você nasceu: '));
  const anoEmissao = Number(prompt('Digite o ano que sua identidade foi emitida: '));
  const idadePessoa = (Number(anoAtual-anoNascimento));
  const idadeRg = (Number(anoAtual-anoEmissao));
  
  if(idadePessoa <= 20 && idadeRg >= 5){
    console.log(true);   
  }
  else if(idadePessoa > 20 && idadePessoa <= 50 && idadeRg >= 10){
    console.log(true);
  }
  else if(idadePessoa > 50 && idadeRg >= 15){
    console.log(true);
  }
  else {
    console.log(false);
  }
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt('Digite um ano aqui: ');

  if((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
    console.log(true);
  }
  else{
    console.log(false);
  }
  
}
// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const pergunta1 = prompt('tem mais de 18?: ')
  const pergunta2 = prompt('tem ensino médio completo?: ')
  const pergunta3 = prompt('tem disponibilidade de horários?: ')

  if(pergunta1 == 'sim' && pergunta2 == 'sim' && pergunta3 == 'sim'){
    console.log(true);
  }
  else {
    console.log(false);
  }
}