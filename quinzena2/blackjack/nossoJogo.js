/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo Blackjack");
const comecarJogo = (confirm("Quer iniciar uma nova rodada? "));


if(comecarJogo === true) {

   let carta1Player = comprarCarta();
   let carta2Player = comprarCarta();
   let carta1Computador = comprarCarta();
   let carta2Computador = comprarCarta();

   somarPontos = (valor1, valor2) => {
      const pontos = valor1 + valor2;
      return pontos;
   }
	
   const pontosPlayer = somarPontos(carta1Player.valor, carta2Player.valor);
   const pontosComputador = somarPontos(carta1Computador.valor, carta2Computador.valor);   

   console.log(`"Usuário - cartas: ${carta1Player.texto} ${carta2Player.texto} - pontuação ${pontosPlayer}
   Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontosComputador}`)

   if (pontosPlayer === pontosComputador){
      console.log("Empate!")
   } else if (pontosPlayer < pontosComputador){
      console.log("O computador ganhou!")
   } else if (pontosPlayer > pontosComputador) {
      console.log("O usuário ganhou!")
   }
   
} else {
	console.log("O jogo acabou");
}



