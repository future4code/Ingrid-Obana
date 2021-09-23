import React from 'react';
import './App.css'
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './image/foto.jpg'
import supergeeks from './image/supergeeks.png'
import stitch from './image/stitch.png'
import email from './image/email.png'
import gps from './image/gps.jpg'

const ContainerSection = styled.div `
  width: 40vw;
  margin: 10px 0;
`;

const TituloH2 = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="App">
      <ContainerSection>
        <TituloH2>Dados pessoais</TituloH2>
        <CardGrande 
          imagem={foto} 
          nome="Ingrid Midori" 
          descricao="Olá, eu sou a Ingrid! Sou instrutora de programação e aluna da Labenu! 
          Cheguei a cursar Ciências Aeronáuticas mas precisei trancar por motivos financeiros. 
          Meu sonho é ser desenvolvedora."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
  
        <CardPequeno
        imagem={email}
        nome="Email: "
        endereco="ingridmidori@live.com"
        />

        <CardPequeno
        imagem={gps}
        nome="Endereço: "
        endereco="Avenida Cachoeirinha"
        />
      </ContainerSection>

      <ContainerSection>
        <TituloH2>Experiências profissionais</TituloH2>
        <CardGrande 
          imagem={supergeeks} 
          nome="SuperGeeks" 
          descricao="Sou instrutora pleno de programação e robótica na escola SuperGeeks desde
          2019.
          Minhas atribuições são planejar e ministrar as aulas seguindo a grade curricular da
          escola, elaboração e correção de atividades avaliativas, preenchimento de diário de 
          classe, participação em reuniões pedagógicas com pais/responsáveis e professores."
        />
        
        <CardGrande 
          imagem={stitch}
          nome="Apontando os defeitos" 
          descricao="Sou uma pessoa que tem necessidade de agradar todo mundo, então estou
          sempre preocupada com o que as pessoas vão pensar de mim." 
        />
      </ContainerSection>

      <ContainerSection>
        <TituloH2>Minhas redes sociais</TituloH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerSection>
    </div>
  );
}

export default App;
